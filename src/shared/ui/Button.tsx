import type { StyleProp, ViewStyle } from "react-native";
import { ActivityIndicator, TouchableHighlight } from "react-native";

import { useThemeColor } from "@/shared/hooks/useThemeColor";
import type { TypeColors } from "@/shared/types";
import { Text } from "./Text";
import { cn } from "../utils";

export interface ButtonProps extends React.PropsWithChildren {
	className?: string;
	onPress?: () => void;
	color?: TypeColors;
	style?: StyleProp<ViewStyle>;
	disabled?: boolean;
	isLoading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
	className,
	children,
	onPress,
	style,
	color: colorName = "primary",
	disabled,
	isLoading,
}) => {
	const backgroundColor = useThemeColor(colorName);
	const underlayColor = useThemeColor(colorName);
	const color = useThemeColor(`${colorName}Contrast`);

	return (
		<TouchableHighlight
			onPress={onPress}
			disabled={disabled || isLoading}
			className={cn(
				"rounded-xl w-full py-3",
				disabled && "opacity-75",
				className,
			)}
			style={[{ backgroundColor }, style]}
			underlayColor={underlayColor}
		>
			{isLoading ? (
				<ActivityIndicator size="small" color={color} />
			) : (
				<Text className="text-center" style={{ color: color }}>
					{children}
				</Text>
			)}
		</TouchableHighlight>
	);
};
