import { Animated } from "react-native";
import { useCallback, useEffect, useMemo, useRef } from "react";
import { State } from "react-native-gesture-handler";
import type {
	GestureEvent,
	HandlerStateChangeEvent,
	PanGestureHandlerEventPayload,
} from "react-native-gesture-handler";
import type { Bounds, Dimensions, Position, Translation } from "../types";
import { clamp, isLeftTop, isMovingSection } from "../utils";

interface UseImageCropOverlayProps {
	readonly fixedAspectRatio: number;
	readonly minimumCropDimensions: Dimensions;
	readonly imageBounds: Bounds;

	updateCroppingBounds(accumulatedPan: Position, cropSize: Dimensions): void;
}

export function useImageCropOverlay({
	imageBounds,
	updateCroppingBounds,
	fixedAspectRatio,
	minimumCropDimensions,
}: UseImageCropOverlayProps) {
	const selectedFrameSection = useRef("");
	const cropSize = useRef<Dimensions>({
		width: 200,
		height: 200,
	});
	const animatedCropSize = useRef({
		width: new Animated.Value(cropSize.current.width),
		height: new Animated.Value(cropSize.current.height),
	});
	const accumulatedPan = useRef<Position>({
		x: 100,
		y: 100,
	});
	const accumulatedPanX = useRef(new Animated.Value(100));
	const accumulatedPanY = useRef(new Animated.Value(100));

	const panX = useRef(new Animated.Value(imageBounds.x));
	const panY = useRef(new Animated.Value(imageBounds.y));

	const translateX = useRef(
		Animated.add(panX.current, accumulatedPanX.current),
	);
	const translateY = useRef(
		Animated.add(panY.current, accumulatedPanY.current),
	);

	const getTargetCropFrameBounds = useCallback(
		({ translationX, translationY }: Translation) => {
			let x = 0;
			let y = 0;

			if (translationX && translationY) {
				const { isTop, isLeft } = isLeftTop(selectedFrameSection.current);
				if (fixedAspectRatio !== 777) {
					if (translationX < translationY) {
						x = (isLeft ? -1 : 1) * translationX;
						y = x / fixedAspectRatio;
					} else {
						y = (isTop ? -1 : 1) * translationY;
						x = y * fixedAspectRatio;
					}
				} else {
					x = (isLeft ? -1 : 1) * translationX;
					y = (isTop ? -1 : 1) * translationY;
				}
			}
			return { x, y };
		},
		[fixedAspectRatio],
	);

	const updateAccumulatedPan = useCallback((newAccumulatedPan: Position) => {
		accumulatedPan.current = newAccumulatedPan;

		accumulatedPanX.current.setValue(accumulatedPan.current.x);
		accumulatedPanY.current.setValue(accumulatedPan.current.y);
	}, []);

	const checkCropBounds = useCallback(
		({ translationX, translationY }: Translation) => {
			let accDx = accumulatedPan.current.x + translationX;

			if (accDx <= imageBounds.x) {
				accDx = imageBounds.x;
			} else if (
				accDx + cropSize.current.width >
				imageBounds.width + imageBounds.x
			) {
				accDx = imageBounds.x + imageBounds.width - cropSize.current.width;
			}

			let accDy = accumulatedPan.current.y + translationY;

			if (accDy <= imageBounds.y) {
				accDy = imageBounds.y;
			} else if (
				accDy + cropSize.current.height >
				imageBounds.height + imageBounds.y
			) {
				accDy = imageBounds.y + imageBounds.height - cropSize.current.height;
			}

			panX.current.setValue(0);
			panY.current.setValue(0);
			updateAccumulatedPan({ x: accDx, y: accDy });
			updateCroppingBounds(accumulatedPan.current, cropSize.current);
		},
		[updateAccumulatedPan, updateCroppingBounds, imageBounds],
	);

	const updateCropSize = useCallback(
		(newCropSize: Dimensions) => {
			cropSize.current = newCropSize;
			checkCropBounds({
				translationX: 0,
				translationY: 0,
			});

			animatedCropSize.current.height.setValue(cropSize.current.height);
			animatedCropSize.current.width.setValue(cropSize.current.width);
		},
		[checkCropBounds],
	);

	const checkResizeBounds = useCallback(
		({ translationX, translationY }: Translation) => {
			let { width: maxWidth, height: maxHeight } = imageBounds;
			const { width: minWidth, height: minHeight } = minimumCropDimensions;

			if (fixedAspectRatio !== 777) {
				const height = maxWidth / fixedAspectRatio;
				if (maxHeight > height) {
					maxHeight = height;
				}

				const width = maxHeight * fixedAspectRatio;
				if (maxWidth > width) {
					maxWidth = width;
				}
			}

			const { x, y } = getTargetCropFrameBounds({ translationX, translationY });
			const animatedWidth = cropSize.current.width + x;
			const animatedHeight = cropSize.current.height + y;
			let finalHeight = animatedHeight;
			let finalWidth = animatedWidth;

			if (animatedHeight > maxHeight) {
				finalHeight = maxHeight;
				if (fixedAspectRatio !== 777) {
					finalWidth = finalHeight * fixedAspectRatio;
				}
			} else if (animatedHeight < minHeight) {
				finalHeight = minHeight;
				if (fixedAspectRatio !== 777) {
					finalWidth = finalHeight * fixedAspectRatio;
				}
			}

			if (animatedWidth > maxWidth) {
				finalWidth = maxWidth;
				if (fixedAspectRatio !== 777) {
					finalHeight = maxHeight;
				}
			} else if (animatedWidth < minWidth) {
				finalWidth = minWidth;
				if (fixedAspectRatio !== 777) {
					finalHeight = finalWidth / fixedAspectRatio;
				}
			}

			const { isTop, isLeft } = isLeftTop(selectedFrameSection.current);

			panX.current.setValue(0);
			panY.current.setValue(0);

			updateCropSize({
				height: finalHeight,
				width: finalWidth,
			});
			updateAccumulatedPan({
				x: accumulatedPan.current.x + (isLeft ? -x : 0),
				y: accumulatedPan.current.y + (isTop ? -y : 0),
			});

			updateCroppingBounds(accumulatedPan.current, cropSize.current);
		},
		[
			imageBounds,
			fixedAspectRatio,
			minimumCropDimensions,
			updateCroppingBounds,
			updateAccumulatedPan,
			updateCropSize,
			getTargetCropFrameBounds,
		],
	);

	const onOverlayMove = useCallback(
		({ nativeEvent }: GestureEvent<PanGestureHandlerEventPayload>) => {
			if (selectedFrameSection.current !== "") {
				if (isMovingSection(selectedFrameSection.current)) {
					const newX = clamp(
						accumulatedPan.current.x + nativeEvent.translationX,
						imageBounds.x,
						imageBounds.x + imageBounds.width - cropSize.current.width,
					);
					const newY = clamp(
						accumulatedPan.current.y + nativeEvent.translationY,
						imageBounds.y,
						imageBounds.y + imageBounds.height - cropSize.current.height,
					);

					panX.current.setValue(newX - accumulatedPan.current.x);
					panY.current.setValue(newY - accumulatedPan.current.y);
				} else {
					const { isTop, isLeft } = isLeftTop(selectedFrameSection.current);
					const { x, y } = getTargetCropFrameBounds(nativeEvent);

					const newWidth = cropSize.current.width + x;
					const newHeight = cropSize.current.height + y;

					const newX = isLeft
						? accumulatedPan.current.x - x
						: accumulatedPan.current.x;
					const newY = isTop
						? accumulatedPan.current.y - y
						: accumulatedPan.current.y;

					if (
						newX >= imageBounds.x &&
						newY >= imageBounds.y &&
						newX + newWidth <= imageBounds.x + imageBounds.width &&
						newY + newHeight <= imageBounds.y + imageBounds.height
					) {
						if (isTop) {
							panY.current.setValue(-y);
						}
						if (isLeft) {
							panX.current.setValue(-x);
						}

						animatedCropSize.current.width.setValue(newWidth);
						animatedCropSize.current.height.setValue(newHeight);
					}
				}
			} else {
				const { x, y } = nativeEvent;
				const { width: initialWidth, height: initialHeight } = cropSize.current;
				let position = "";

				if (y / initialHeight < 0.333) {
					position = position + "top";
				} else if (y / initialHeight < 0.667) {
					position = position + "middle";
				} else {
					position = position + "bottom";
				}
				if (x / initialWidth < 0.333) {
					position = position + "left";
				} else if (x / initialWidth < 0.667) {
					position = position + "middle";
				} else {
					position = position + "right";
				}

				selectedFrameSection.current = position;
			}
		},
		[getTargetCropFrameBounds, imageBounds],
	);

	const onOverlayRelease = useCallback(
		(
			nativeEvent: HandlerStateChangeEvent<PanGestureHandlerEventPayload>["nativeEvent"],
		) => {
			isMovingSection(selectedFrameSection.current)
				? checkCropBounds(nativeEvent)
				: checkResizeBounds(nativeEvent);

			selectedFrameSection.current = "";
		},
		[checkCropBounds, checkResizeBounds],
	);

	const onHandlerStateChange = useCallback(
		({
			nativeEvent,
		}: HandlerStateChangeEvent<PanGestureHandlerEventPayload>) => {
			if (nativeEvent.state === State.END) onOverlayRelease(nativeEvent);
		},
		[onOverlayRelease],
	);

	useEffect(() => {
		if (fixedAspectRatio !== 777) {
			const newSize = { width: 0, height: 0 };
			const { width, height } = imageBounds;
			const imageAspectRatio = width / height;

			if (fixedAspectRatio < imageAspectRatio) {
				newSize.height = height;
				newSize.width = height * fixedAspectRatio;
			} else {
				newSize.width = width;
				newSize.height = width / fixedAspectRatio;
			}

			updateCropSize(newSize);
		}
	}, [imageBounds, fixedAspectRatio, updateCropSize]);

	return useMemo(
		() => ({
			translateX: translateX.current,
			translateY: translateY.current,
			animatedCropSize: animatedCropSize.current,
			onOverlayMove,
			onHandlerStateChange,
		}),
		[onOverlayMove, onHandlerStateChange],
	);
}
