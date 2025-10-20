import type { ViewProps } from "react-native";
import { View } from "react-native";

import { useThemeColor } from "@/shared/hooks/useThemeColor";
import { cn } from "../utils";

export type ToolbarProps = ViewProps;

export const Toolbar: React.FC<ToolbarProps> = ({
	className,
	style,
	children,
	...props
}) => {
	const backgroundColor = useThemeColor("toolbarBackground");
	const borderColor = useThemeColor("toolbarBorder");

	return (
		<View
			className={cn("px-4 py-1 border border-solid", className)}
			style={[{ backgroundColor, borderColor }, style]}
			{...props}
		>
			{children}
		</View>
	);
};
