import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity, View } from "react-native";
import { useThemeColor } from "@/shared/hooks/useThemeColor";
import { Avatar, type AvatarProps } from "./Avatar";

interface AvatarUploaderProps extends AvatarProps {
	sizeIcon: number;
}

export const AvatarUploader: React.FC<AvatarUploaderProps> = ({
	size,
	sizeIcon,
	...props
}) => {
	const route = useRouter();
	const backgroundColor = useThemeColor("primary");
	const selectAvatarColor = useThemeColor("text");

	return (
		<View
			className="relative justify-center items-center gap-2"
			style={{ width: size, height: size }}
		>
			<Avatar size={size} {...props} />

			<TouchableOpacity
				className="absolute bottom-0 right-0 p-1 rounded-full items-center justify-center"
				onPress={() => route.navigate("/(authenticated)/photo")}
				style={{ backgroundColor }}
			>
				<Ionicons name="camera" size={sizeIcon} color={selectAvatarColor} />
			</TouchableOpacity>
		</View>
	);
};
