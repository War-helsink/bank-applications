import { useImperativeHandle } from "react";
import type { Ref } from "react";
import { View, Image, StyleSheet } from "react-native";
import { useCropPhoto } from "../hooks/useCropPhoto";
import { ImageCropOverlay } from "./ImageCropOverlay";
import {
	DEFAULT_FIX_ASPECT_RATIO,
	DEFAULT_MINIMUM_CROP_DIMENSIONS,
} from "../config";

export interface ImageCropRef {
	crop: (
		callback: (croppedUri: string) => void | Promise<void>,
	) => Promise<void>;
}

export interface ImageCropProps {
	readonly uri: string;
	readonly ref?: Ref<ImageCropRef>;
}

export const ImageCrop: React.FC<ImageCropProps> = ({ uri, ref }) => {
	const {
		isReady,
		imageBounds,
		onCropPhoto,
		getImageFrame,
		updateCroppingBounds,
	} = useCropPhoto(uri);

	useImperativeHandle(
		ref,
		() => ({
			crop: onCropPhoto,
		}),
		[onCropPhoto],
	);

	return (
		<View className="flex-1 pb-4">
			<Image
				source={{ uri }}
				className="w-full h-full"
				style={styles.image}
				onLayout={getImageFrame}
			/>

			{isReady && (
				<ImageCropOverlay
					fixedAspectRatio={DEFAULT_FIX_ASPECT_RATIO}
					minimumCropDimensions={DEFAULT_MINIMUM_CROP_DIMENSIONS}
					imageBounds={imageBounds}
					updateCroppingBounds={updateCroppingBounds}
				/>
			)}
		</View>
	);
};

const styles = StyleSheet.create({
	image: {
		resizeMode: "contain",
	},
});
