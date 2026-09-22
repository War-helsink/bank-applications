import { TouchableHighlight } from "react-native";
import type { TouchableHighlightProps } from "react-native";
import { useThemeColor } from "@/shared/hooks/useThemeColor";
import type { TypeColors } from "@/shared/types";
import { Text } from "./Text";
import { cn } from "../utils";
import { withButtonLoading } from "../hoc";

export interface ButtonProps
	extends Omit<TouchableHighlightProps, "underlayColor"> {
	asChild?: boolean;
	color?: TypeColors;
}

export const Button: React.FC<ButtonProps> = ({
	className,
	children,
	asChild,
	style,
	color: colorName = "primary",
	disabled,
	...props
}) => {
	const backgroundColor = useThemeColor(colorName);
	const underlayColor = useThemeColor(colorName);
	const color = useThemeColor(`${colorName}Contrast`);

	return (
		<TouchableHighlight
			disabled={disabled}
			className={cn(
				"rounded-xl w-full py-3",
				disabled && "opacity-75",
				className,
			)}
			style={[{ backgroundColor }, style]}
			underlayColor={underlayColor}
			{...props}
		>
			{asChild ? (
				children
			) : (
				<Text className="text-center" style={{ color: color }}>
					{children}
				</Text>
			)}
		</TouchableHighlight>
	);
};

export const ButtonWithLoading = withButtonLoading(Button);
