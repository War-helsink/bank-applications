import { TouchableOpacity, View } from "react-native";
import { useThemeColor } from "@/shared/hooks/useThemeColor";
import { Text } from "./Text";
import { useSelectFile } from "../hooks/useSelectFile";
import type { AvatarInfo } from "../types";
import { Avatar, type AvatarProps } from "./Avatar";

export interface AvatarUploaderProps extends AvatarProps {
	onChangeAvatar?: (avatarInfo: AvatarInfo) => void;
	uploadLabel?: string;
}

export const AvatarUploader: React.FC<AvatarUploaderProps> = ({
	onChangeAvatar,
	uploadLabel = "Select a new avatar",
	...props
}) => {
	const selectAvatarColor = useThemeColor("primary");

	const pickImageFromGallery = useSelectFile((file) => {
		onChangeAvatar?.({
			avatarUrl: file.uri,
			name: file.fileName as string,
		});
	});

	return (
		<View className="w-full justify-center items-center gap-4">
			<Avatar {...props} />

			<TouchableOpacity onPress={pickImageFromGallery}>
				<Text className="text-lg" style={{ color: selectAvatarColor }}>
					{uploadLabel}
				</Text>
			</TouchableOpacity>
		</View>
	);
};
