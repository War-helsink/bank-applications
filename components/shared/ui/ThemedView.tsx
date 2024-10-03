import { View, type ViewProps } from "react-native";
import { useThemeColor } from "@/core/hooks/useThemeColor";

export interface ThemedViewProps extends ViewProps {
	lightColor?: string;
	darkColor?: string;
}

export function ThemedView({
	style,
	lightColor,
	darkColor,
	...otherProps
}: ThemedViewProps) {
	const backgroundColor = useThemeColor("background", {
		light: lightColor,
		dark: darkColor,
	});

	return <View style={[{ backgroundColor }, style]} {...otherProps} />;
}
