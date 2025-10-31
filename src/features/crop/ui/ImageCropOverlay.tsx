import { Animated, StyleSheet, View } from "react-native";
import {
	PanGestureHandler,
	GestureHandlerRootView,
} from "react-native-gesture-handler";
import { useImageCropOverlay } from "../hooks/useImageCropOverlay";
import type { Bounds, Dimensions, Position } from "../types";
import { CropSection } from "./CropSection";

interface ImageCropOverlayProps {
	readonly fixedAspectRatio: number;
	readonly minimumCropDimensions: Dimensions;
	readonly imageBounds: Bounds;

	updateCroppingBounds(accumulatedPan: Position, cropSize: Dimensions): void;
}

export const ImageCropOverlay: React.FC<ImageCropOverlayProps> = ({
	fixedAspectRatio,
	minimumCropDimensions,
	imageBounds,
	updateCroppingBounds,
}) => {
	const {
		translateX,
		translateY,
		animatedCropSize,
		onOverlayMove,
		onHandlerStateChange,
	} = useImageCropOverlay({
		fixedAspectRatio,
		minimumCropDimensions,
		imageBounds,
		updateCroppingBounds,
	});

	return (
		<View style={styles.container}>
			<GestureHandlerRootView className="flex-1">
				<PanGestureHandler
					onGestureEvent={onOverlayMove}
					onHandlerStateChange={onHandlerStateChange}
				>
					<Animated.View
						style={[
							styles.overlay,
							animatedCropSize,
							{
								transform: [{ translateX }, { translateY }],
							},
						]}
					>
						<CropSection />
					</Animated.View>
				</PanGestureHandler>
			</GestureHandlerRootView>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		height: "100%",
		width: "100%",
		position: "absolute",
	},
	overlay: {
		height: 40,
		width: 40,
		borderWidth: 1,
		backgroundColor: "#33333355",
		borderColor: "#ffffff88",
	},
});
