import { useCachedAvatar } from "@/shared/hooks/useCached";
import { useThemeColor } from "@/shared/hooks/useThemeColor";
import type { StyleProp, ViewStyle } from "react-native";
import { Image, View } from "react-native";
import { Text } from "./Text";
import { cn } from "../utils";

export interface AvatarProps {
	className?: string;
	style?: StyleProp<ViewStyle>;
	name?: string;
	avatarUrl?: string | null;
	uid: string;
	size?: "small" | "large";
}

export const Avatar: React.FC<AvatarProps> = ({
	name,
	uid,
	avatarUrl,
	size = "small",
	style,
	className,
}) => {
	const backgroundColor = useThemeColor("mediumTint");
	const color = useThemeColor("white");
	const isSmall = size === "small";

	const uri = useCachedAvatar(uid, avatarUrl);

	return (
		<View
			className={cn(
				`rounded-2xl items-center justify-center ${isSmall ? "w-9 h-9" : "w-14 h-14"}`,
				className,
			)}
			style={[{ backgroundColor }, style]}
		>
			{uri ? (
				<Image source={{ uri }} className="rounded-2xl w-full h-full" />
			) : (
				<Text
					className={`${isSmall ? "text-lg" : "text-xl"} font-medium`}
					style={{ color }}
				>
					{name?.slice(0, 1)}
				</Text>
			)}
		</View>
	);
};
