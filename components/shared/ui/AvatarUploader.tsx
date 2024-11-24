import { Text } from "./Text";
import Toast from "react-native-toast-message";
import { View, Image, TouchableOpacity } from "react-native";
import {
	requestMediaLibraryPermissionsAsync,
	launchImageLibraryAsync,
} from "expo-image-picker";

import { useState, useEffect } from "react";
import { useThemeColor } from "@/core/hooks/useThemeColor";

export interface AvatarUploaderProps {
	name?: string;
	avatarUrl?: string | null;
	onChangeAvatar?: (avatarUri: string) => void;
}

export const AvatarUploader: React.FC<AvatarUploaderProps> = ({
	name,
	avatarUrl = null,
	onChangeAvatar,
}) => {
	const backgroundColor = useThemeColor("mediumTint");
	const selectAvatarColor = useThemeColor("primary");
	const color = useThemeColor("white");

	const [avatarUri, setAvatarUri] = useState<string | null>(null);

	useEffect(() => {
		if (avatarUrl) {
			setAvatarUri(avatarUrl);
		}
	}, [avatarUrl]);

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
			setAvatarUri(result.assets[0].uri);
			onChangeAvatar?.(result.assets[0].uri);
		}
	};

	return (
		<View className="w-full justify-center items-center gap-4">
			{avatarUri ? (
				<Image source={{ uri: avatarUri }} className="rounded-full h-32 w-32" />
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
