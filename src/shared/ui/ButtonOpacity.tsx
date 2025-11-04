import type { TouchableOpacityProps } from "react-native";
import { TouchableOpacity } from "react-native";
import { useThemeColor } from "@/shared/hooks/useThemeColor";
import type { TypeColors } from "@/shared/types";
import { cn } from "../utils";
import { withButtonLoading } from "../hoc";

export interface ButtonOpacityProps extends TouchableOpacityProps {
	color?: TypeColors;
}

export const ButtonOpacity: React.FC<ButtonOpacityProps> = ({
	color: colorName = "primary",
	className,
	style,
	...props
}) => {
	const backgroundColor = useThemeColor(colorName);

	return (
		<TouchableOpacity
			className={cn("rounded-xl w-full py-3", className)}
			style={[{ backgroundColor }, style]}
			{...props}
		/>
	);
};

export const ButtonOpacityWithLoading = withButtonLoading(ButtonOpacity);
