import { Text } from "./Text";
import Toast from "react-native-toast-message";
import { View, Image, TouchableOpacity } from "react-native";
import {
	requestMediaLibraryPermissionsAsync,
	launchImageLibraryAsync,
} from "expo-image-picker";

import { useThemeColor } from "@/core/hooks/useThemeColor";
import { useCachedAvatar } from "@/core/hooks/useCached";

export interface AvatarUploaderProps {
	name?: string;
	uid: string;
	avatarUrl?: string | null;
	onChangeAvatar?: (avatarInfo: {
		avatarUrl: string | null;
		name: string | null;
	}) => void;
}

export const AvatarUploader: React.FC<AvatarUploaderProps> = ({
	uid,
	name,
	avatarUrl = null,
	onChangeAvatar,
}) => {
	const backgroundColor = useThemeColor("mediumTint");
	const selectAvatarColor = useThemeColor("primary");
	const color = useThemeColor("white");

	const uri = useCachedAvatar(uid, avatarUrl);

	const pickImage = async () => {
		const permissionResult = await requestMediaLibraryPermissionsAsync();

		if (!permissionResult.granted) {
			Toast.show({
				type: "info",
				text1: "Access to the gallery is required to select an avatar!",
			});
			return;
		}

		const result = await launchImageLibraryAsync({
			mediaTypes: "images",
			allowsEditing: true,
			aspect: [1, 1],
			quality: 1,
		});

		if (!result.canceled) {
			onChangeAvatar?.({
				avatarUrl: result.assets[0].uri,
				name: result.assets[0].fileName as string,
			});
		}
	};

	return (
		<View className="w-full justify-center items-center gap-4">
			{uri ? (
				<Image source={{ uri }} className="rounded-full h-32 w-32" />
			) : (
				<View
					className="rounded-full items-center justify-center h-32 w-32"
					style={{ backgroundColor }}
				>
					<Text className="text-[64px] font-medium" style={{ color }}>
						{name?.slice(0, 1)}
					</Text>
				</View>
			)}

			<TouchableOpacity onPress={pickImage}>
				<Text className="text-lg" style={{ color: selectAvatarColor }}>
					Select a new avatar
				</Text>
			</TouchableOpacity>
		</View>
	);
};
