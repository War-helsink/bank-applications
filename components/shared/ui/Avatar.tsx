import { Text } from "./Text";
import { View } from "react-native";

import { useThemeColor } from "@/core/hooks/useThemeColor";

export interface AvatarProps {
	name?: string;
	size?: "small" | "large";
}

export const Avatar: React.FC<AvatarProps> = ({ name, size = "small" }) => {
	const backgroundColor = useThemeColor("mediumTint");
	const color = useThemeColor("white");
	const isSmall = size === "small";

	return (
		<View
			className={`rounded-full items-center justify-center ${isSmall ? "w-9 h-9" : "w-12 h-12"}`}
			style={{ backgroundColor }}
		>
			<Text
				className={`${isSmall ? "text-lg" : "text-xl"} font-medium`}
				style={{ color }}
			>
				{name?.slice(0, 1)}
			</Text>
		</View>
	);
};
