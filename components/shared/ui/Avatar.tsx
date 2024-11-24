import clsx from "clsx";
import { Text } from "./Text";
import { View, Image } from "react-native";

import { useThemeColor } from "@/core/hooks/useThemeColor";

export interface AvatarProps {
	className?: string;
	name?: string;
	avatarUrl?: string | null;
	size?: "small" | "large";
}

export const Avatar: React.FC<AvatarProps> = ({
	name,
	avatarUrl,
	size = "small",
	className,
}) => {
	const backgroundColor = useThemeColor("mediumTint");
	const color = useThemeColor("white");
	const isSmall = size === "small";

	return (
		<View
			className={clsx(
				`rounded-full items-center justify-center ${isSmall ? "w-9 h-9" : "w-12 h-12"}`,
				className,
			)}
			style={{ backgroundColor }}
		>
			{avatarUrl ? (
				<Image
					source={{ uri: avatarUrl }}
					className={`rounded-full ${isSmall ? "w-9 h-9" : "w-12 h-12"}`}
				/>
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
