import { useRef } from "react";
import { useRouter } from "expo-router";
import { View } from "react-native";
import { useRoute } from "@react-navigation/native";
import { Button, ThemedSafeAreaView } from "@/shared/ui";
import { ImageCrop, type ImageCropRef } from "@/features/crop";
import { ButtonSelectImage } from "@/features/photo";
import { useUpdateAvatar } from "@/entities/user";

const CropScreen: React.FC = () => {
	const route = useRoute();
	const router = useRouter();
	const { uri } = route.params as { uri: string };

	const imageCropRef = useRef<ImageCropRef>(null);
	const { mutateAsync: updateAvatar, isPending } = useUpdateAvatar();

	const cropPhotoAndUpdate = async () => {
		imageCropRef.current?.crop(async (uri) => {
			const fileName = uri.split("/").pop();
			if (!fileName) {
				return;
			}
			await updateAvatar({
				avatarUrl: uri,
				name: fileName,
			});
			router.dismissTo({
				pathname: "/(authenticated)/(tabs)",
			});
		});
	};

	return (
		<ThemedSafeAreaView className="flex-1 justify-between">
			<ImageCrop ref={imageCropRef} uri={uri} />
			<View className="gap-4 px-9">
				<Button
					className="rounded-full h-12"
					isLoading={isPending}
					onPress={cropPhotoAndUpdate}
				>
					Save
				</Button>

				<ButtonSelectImage className="rounded-full" disabled={isPending}>
					Retake
				</ButtonSelectImage>
			</View>
		</ThemedSafeAreaView>
	);
};

export default CropScreen;
