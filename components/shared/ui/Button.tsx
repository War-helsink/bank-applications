import { TouchableHighlight } from "react-native";
import { Text } from "./Text";

import { useThemeColor } from "@/core/hooks/useThemeColor";

import type { ViewStyle, StyleProp } from "react-native";
import type { TypeColors } from "@/core/types";

export interface ButtonProps extends React.PropsWithChildren {
	className?: string;
	onPress?: () => void;
	color?: TypeColors;
	style?: StyleProp<ViewStyle>;
	disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
	className,
	children,
	onPress,
	style,
	color: colorName = "primary",
	disabled,
}) => {
	const backgroundColor = useThemeColor(colorName);
	const underlayColor = useThemeColor(colorName);
	const color = useThemeColor(`${colorName}Contrast`);

	return (
		<TouchableHighlight
			onPress={onPress}
			disabled={disabled}
			className={`rounded-xl w-full py-3 ${className}`}
			style={[{ backgroundColor }, style]}
			underlayColor={underlayColor}
		>
			<Text className="text-center" style={{ color: color }}>
				{children}
			</Text>
		</TouchableHighlight>
	);
};
