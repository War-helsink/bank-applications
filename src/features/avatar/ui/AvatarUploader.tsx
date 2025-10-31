import { View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useThemeColor } from "@/shared/hooks/useThemeColor";
import { Avatar, type AvatarProps } from "@/shared/ui";
import { ButtonSelectImage } from "@/features/photo";

interface AvatarUploaderProps extends AvatarProps {
	sizeIcon: number;
}

export const AvatarUploader: React.FC<AvatarUploaderProps> = ({
	size,
	sizeIcon,
	...props
}) => {
	const selectAvatarColor = useThemeColor("text");

	return (
		<View
			className="relative justify-center items-center gap-2"
			style={{ width: size, height: size }}
		>
			<Avatar size={size} {...props} />
			<ButtonSelectImage className="absolute bottom-0 right-0 w-auto p-1 rounded-full items-center justify-center">
				<Ionicons name="camera" size={sizeIcon} color={selectAvatarColor} />
			</ButtonSelectImage>
		</View>
	);
};
