import { useThemeColor } from "@/core/hooks/useThemeColor";
import { useTailwind } from "tailwind-rn";
import { Text } from "./Text";
import { View } from "./View";

export interface AvatarProps {
	name?: string;
	size?: "small" | "large";
}

export const Avatar: React.FC<AvatarProps> = ({ name, size = "small" }) => {
	const backgroundColor = useThemeColor("mediumTint");
	const color = useThemeColor("white");
	const isSmall = size === "small";
	const tw = useTailwind();

	return (
		<View
			style={[
				{ backgroundColor },
				tw(
					`rounded-full items-center justify-center ${isSmall ? "w-9 h-9" : "w-12 h-12"}`,
				),
			]}
		>
			<Text
				style={[
					{ color },
					tw(`${isSmall ? "text-lg" : "text-xl"} font-medium`),
				]}
			>
				{name?.slice(0, 1)}
			</Text>
		</View>
	);
};
