import { TouchableHighlight } from "react-native";
import { useTailwind } from "tailwind-rn";
import { useThemeColor } from "@/core/hooks/useThemeColor";
import { Text } from "./Text";

import type { TypeColors } from "@/core/types/colors";

export interface ButtonProps extends React.PropsWithChildren {
	onPress?: () => void;
	color?: TypeColors;
}

export const Button: React.FC<ButtonProps> = ({
	children,
	onPress,
	color = "primary",
}) => {
	const backgroundColor = useThemeColor(color);
	const underlayColor = useThemeColor(color);
	const text = useThemeColor(`${color}Contrast`);
	const tw = useTailwind();

	return (
		<TouchableHighlight
			onPress={onPress}
			style={[{ backgroundColor }, tw("rounded-xl w-full my-4 py-3")]}
			underlayColor={underlayColor}
		>
			<Text style={[{ color: text }, tw("text-center")]}>{children}</Text>
		</TouchableHighlight>
	);
};
