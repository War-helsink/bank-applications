import type { StyleProp, ViewStyle } from "react-native";
import { TouchableOpacity } from "react-native";
import { useThemeColor } from "@/shared/hooks/useThemeColor";
import type { TypeColors } from "@/shared/types";
import { Text } from "./Text";
import { cn } from "../utils";

export interface ButtonOpacityProps extends React.PropsWithChildren {
	className?: string;
	onPress?: () => void;
	color?: TypeColors;
	style?: StyleProp<ViewStyle>;
	disabled?: boolean;
}

export const ButtonOpacity: React.FC<ButtonOpacityProps> = ({
	className,
	children,
	onPress,
	style,
	color: colorName = "primary",
	disabled,
}) => {
	const backgroundColor = useThemeColor(colorName);
	const color = useThemeColor(`${colorName}Contrast`);

	return (
		<TouchableOpacity
			onPress={onPress}
			disabled={disabled}
			className={cn("rounded-xl w-full py-3", className)}
			style={[{ backgroundColor }, style]}
		>
			<Text className="text-center" style={{ color: color }}>
				{children}
			</Text>
		</TouchableOpacity>
	);
};
