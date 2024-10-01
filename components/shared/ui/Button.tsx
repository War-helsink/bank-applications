import { TouchableHighlight } from "react-native";
import type { ViewStyle, StyleProp } from "react-native";
import { useTailwind } from "tailwind-rn";
import { useThemeColor } from "@/core/hooks/useThemeColor";
import { Text } from "./Text";

import type { TypeColors } from "@/core/types/colors";

export interface ButtonProps extends React.PropsWithChildren {
	onPress?: () => void;
	color?: TypeColors;
	style?: StyleProp<ViewStyle>;
	disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
	children,
	onPress,
	style,
	color: colorName = "primary",
	disabled,
}) => {
	const backgroundColor = useThemeColor(colorName);
	const underlayColor = useThemeColor(colorName);
	const color = useThemeColor(`${colorName}Contrast`);
	const tw = useTailwind();

	return (
		<TouchableHighlight
			onPress={onPress}
			disabled={disabled}
			style={[{ backgroundColor }, tw("rounded-xl w-full py-3"), style]}
			underlayColor={underlayColor}
		>
			<Text style={[{ color: color }, tw("text-center")]}>{children}</Text>
		</TouchableHighlight>
	);
};
