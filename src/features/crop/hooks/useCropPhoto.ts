import type { LayoutChangeEvent } from "react-native";
import { useState, useEffect, useCallback, useRef, useMemo } from "react";
import { useImageManipulator, SaveFormat } from "expo-image-manipulator";
import type { ActionCrop } from "expo-image-manipulator";
import type { Bounds, Dimensions, Position } from "../types";

const INITIAL_BOUNDS = {
	x: 0,
	y: 0,
	width: 0,
	height: 0,
};

export function useCropPhoto(uri: string) {
	const [isReady, setIsReady] = useState<boolean>(false);
	const contextImage = useImageManipulator(uri);

	const croppingBoundsRef = useRef<ActionCrop["crop"]>(null);
	const imageDataRef = useRef<Dimensions>(null);
	const imageLayoutRef = useRef<Dimensions>(null);
	const imageScaleFactorRef = useRef<number>(1);

	const [imageBounds, setImageBounds] = useState<Bounds>(INITIAL_BOUNDS);

	const onUpdateCropLayout = useCallback(() => {
		const layout = imageLayoutRef.current;
		const imageData = imageDataRef.current;

		if (layout && imageData) {
			const editingWindowAspectRatio = layout.height / layout.width;
			const imageAspectRatio = imageData.height / imageData.width;
			const bounds = { ...INITIAL_BOUNDS };
			let imageScaleFactor = 1;

			if (imageAspectRatio > editingWindowAspectRatio) {
				bounds.x =
					(((imageAspectRatio - editingWindowAspectRatio) / imageAspectRatio) *
						layout.width) /
					2;
				bounds.width = layout.height / imageAspectRatio;
				bounds.height = layout.height;
				imageScaleFactor = imageData.height / layout.height;
			} else {
				bounds.y =
					(((1 / imageAspectRatio - 1 / editingWindowAspectRatio) /
						(1 / imageAspectRatio)) *
						layout.height) /
					2;
				bounds.width = layout.width;
				bounds.height = layout.width * imageAspectRatio;
				imageScaleFactor = imageData.width / layout.width;
			}

			setIsReady(true);
			setImageBounds(bounds);
			imageScaleFactorRef.current = imageScaleFactor;
		}
	}, []);

	const updateCroppingBounds = useCallback(
		(accumulatedPan: Position, cropSize: Dimensions) => {
			const imageScaleFactor = imageScaleFactorRef.current;

			croppingBoundsRef.current = {
				originX: Math.round(
					(accumulatedPan.x - imageBounds.x) * imageScaleFactor,
				),
				originY: Math.round(
					(accumulatedPan.y - imageBounds.y) * imageScaleFactor,
				),
				width: Math.round(cropSize.width * imageScaleFactor),
				height: Math.round(cropSize.height * imageScaleFactor),
			};
		},
		[imageBounds],
	);

	const getImageFrame = useCallback(
		({ nativeEvent }: LayoutChangeEvent) => {
			imageLayoutRef.current = nativeEvent.layout;
			onUpdateCropLayout();
		},
		[onUpdateCropLayout],
	);

	const onCropPhoto = useCallback(
		async (callback: (uri: string) => void) => {
			const croppingBounds = croppingBoundsRef.current;

			if (croppingBounds) {
				contextImage.crop(croppingBounds);

				const image = await contextImage.renderAsync();
				const result = await image.saveAsync({
					format: SaveFormat.JPEG,
				});

				if (result.uri) {
					callback(result.uri);
				}

				contextImage.reset();
			}
		},
		[contextImage],
	);

	useEffect(() => {
		const initialize = async () => {
			const { width, height } = await contextImage.renderAsync();

			imageDataRef.current = { width, height };
			onUpdateCropLayout();
		};

		initialize();
	}, [contextImage, onUpdateCropLayout]);

	return useMemo(
		() => ({
			isReady,
			imageBounds,
			onCropPhoto,
			getImageFrame,
			updateCroppingBounds,
		}),
		[isReady, imageBounds, onCropPhoto, getImageFrame, updateCroppingBounds],
	);
}
