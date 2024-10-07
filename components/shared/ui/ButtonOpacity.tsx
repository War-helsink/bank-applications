import clsx from "clsx";
import { TouchableOpacity } from "react-native";
import { Text } from "./Text";

import { useThemeColor } from "@/core/hooks/useThemeColor";

import type { ViewStyle, StyleProp } from "react-native";
import type { TypeColors } from "@/core/types";

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
			className={clsx("rounded-xl w-full py-3", className)}
			style={[{ backgroundColor }, style]}
		>
			<Text className="text-center" style={{ color: color }}>
				{children}
			</Text>
		</TouchableOpacity>
	);
};
