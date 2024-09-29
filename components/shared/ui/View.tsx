import { View as ViewRN, type ViewProps as ViewPropsRN } from "react-native";
import { useThemeColor } from "@/core/hooks/useThemeColor";

export type ViewProps = ViewPropsRN & {
	lightColor?: string;
	darkColor?: string;
};

export function View({
	style,
	lightColor,
	darkColor,
	...otherProps
}: ViewProps) {
	const backgroundColor = useThemeColor("background", {
		light: lightColor,
		dark: darkColor,
	});

	return <ViewRN style={[{ backgroundColor }, style]} {...otherProps} />;
}
