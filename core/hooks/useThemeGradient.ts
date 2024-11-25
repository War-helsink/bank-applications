import { useColorScheme } from "./useColorScheme";
import { Gradients } from "@/core/config/colors";

export function useThemeGradient(
	colorName: keyof typeof Gradients.light & keyof typeof Gradients.dark,
	colors?: { light?: [string, string]; dark?: [string, string] },
) {
	const theme = useColorScheme() ?? "light";
	const colorFromProps = colors ? colors[theme] : undefined;

	if (colorFromProps) {
		return colorFromProps;
	}
	return Gradients[theme][colorName] as [string, string];
}
