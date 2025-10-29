import { useCachedAvatar } from "@/shared/hooks/useCached";
import { Image, TouchableOpacity, View } from "react-native";
import { useThemeColor } from "@/shared/hooks/useThemeColor";
import { Text } from "./Text";
import { useSelectFile } from "../hooks/useSelectFile";
import type { AvatarInfo } from "../types";

export interface AvatarUploaderProps {
	name?: string;
	uid: string;
	avatarUrl?: string | null;
	onChangeAvatar?: (avatarInfo: AvatarInfo) => void;
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

	const [uri] = useCachedAvatar(uid, avatarUrl);

	const pickImageFromGallery = useSelectFile((file) => {
		onChangeAvatar?.({
			avatarUrl: file.uri,
			name: file.fileName as string,
		});
	});

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

			<TouchableOpacity onPress={pickImageFromGallery}>
				<Text className="text-lg" style={{ color: selectAvatarColor }}>
					Select a new avatar
				</Text>
			</TouchableOpacity>
		</View>
	);
};
