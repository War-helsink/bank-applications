import clsx from "clsx";
import { Text } from "./Text";
import { View, Image } from "react-native";

import { useThemeColor } from "@/core/hooks/useThemeColor";
import { useCachedAvatar } from "@/core/hooks/useCached";

import type { ViewStyle, StyleProp } from "react-native";

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
			className={clsx(
				`rounded-2xl items-center justify-center ${isSmall ? "w-9 h-9" : "w-12 h-12"}`,
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
