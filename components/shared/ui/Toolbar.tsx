import { View } from "react-native";
import type { ViewProps } from "react-native";

import { useThemeColor } from "@/core/hooks/useThemeColor";

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
			className={`px-4 py-1 border border-solid rounded-md ${className}`}
			style={[{ backgroundColor, borderColor }, style]}
			{...props}
		>
			{children}
		</View>
	);
};
