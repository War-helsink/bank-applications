import { View } from "react-native";
import type { ViewProps } from "react-native";

import { useTailwind } from "tailwind-rn";
import { useThemeColor } from "@/core/hooks/useThemeColor";

export type ToolbarProps = ViewProps;

export const Toolbar: React.FC<ToolbarProps> = ({
	style,
	children,
	...props
}) => {
	const backgroundColor = useThemeColor("toolbarBackground");
	const borderColor = useThemeColor("toolbarBorder");
	const tw = useTailwind();

	return (
		<View
			style={[
				{ backgroundColor, borderColor },
				tw("px-4 py-1 border border-solid rounded-md"),
				style,
			]}
			{...props}
		>
			{children}
		</View>
	);
};
