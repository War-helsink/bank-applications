import { useColorScheme } from "react-native";
import { Colors } from "@/core/config/Colors";

export function useThemeColor(
	colorName: keyof typeof Colors.light & keyof typeof Colors.dark,
	colors?: { light?: string; dark?: string },
) {
	const theme = useColorScheme() ?? "light";
	const colorFromProps = colors ? colors[theme] : undefined;

	if (colorFromProps) {
		return colorFromProps;
	}
	return Colors[theme][colorName];
}
