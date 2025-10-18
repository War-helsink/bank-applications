import { useColorScheme } from "@/shared/hooks/useColorScheme";
import { gradients } from "../config";

export function useRandomGradient(): [string, string, ...string[]] {
	const theme = useColorScheme() ?? "light";
	const max = gradients[theme].length - 1;
	const randomNumber = Math.floor(Math.random() * max);

	return gradients[theme][randomNumber] as [string, string, ...string[]];
}
