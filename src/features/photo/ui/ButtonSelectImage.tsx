import { useState } from "react";
import { View } from "react-native";
import { useRouter } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { CameraService } from "@/shared/services";
import { useSelectFile } from "@/shared/hooks/useSelectFile";
import { BottomModal, Button, type ButtonProps } from "@/shared/ui";

type ButtonSelectImageProps = Omit<ButtonProps, "onPress">;

export const ButtonSelectImage: React.FC<ButtonSelectImageProps> = (props) => {
	const router = useRouter();
	const insets = useSafeAreaInsets();
	const [isBottomModalVisible, setIsBottomModalVisible] = useState(false);

	const pickImageFromCamera = async () => {
		setIsBottomModalVisible(false);
		const uri = await CameraService.openCamera(router);
		if (uri) {
			router.navigate({
				pathname: "/(authenticated)/crop",
				params: { uri },
			});
		}
	};

	const pickImageFromGallery = useSelectFile(async (file) => {
		router.navigate({
			pathname: "/(authenticated)/crop",
			params: { uri: file.uri },
		});
		setIsBottomModalVisible(false);
	});

	return (
		<>
			<Button onPress={() => setIsBottomModalVisible(true)} {...props} />
			<BottomModal
				onClose={() => setIsBottomModalVisible(false)}
				isVisible={isBottomModalVisible}
				bottomSheetViewProps={{
					style: {
						paddingBottom: insets.bottom,
						paddingLeft: insets.left,
						paddingRight: insets.right,
					},
				}}
			>
				<View className="flex-1 px-10 py-2 gap-4">
					<Button className="rounded-full" onPress={pickImageFromCamera}>
						Open Camera
					</Button>
					<Button className="rounded-full" onPress={pickImageFromGallery}>
						Choose from Gallery
					</Button>
				</View>
			</BottomModal>
		</>
	);
};
