import { View, type ViewProps as ViewPropsRN } from "react-native";
import { useThemeColor } from "@/core/hooks/useThemeColor";

export type ViewProps = ViewPropsRN & {
	lightColor?: string;
	darkColor?: string;
};

export function ThemedView({
	style,
	lightColor,
	darkColor,
	...otherProps
}: ViewProps) {
	const backgroundColor = useThemeColor("background", {
		light: lightColor,
		dark: darkColor,
	});

	return <View style={[{ backgroundColor }, style]} {...otherProps} />;
}
