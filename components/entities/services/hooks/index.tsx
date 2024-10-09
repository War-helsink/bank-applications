import { useColorScheme } from "@/core/hooks/useColorScheme";
import { gradients } from "../config";

export function useRandomGradient() {
	const theme = useColorScheme() ?? "light";
	const max = gradients[theme].length - 1;
	const randomNumber = Math.floor(Math.random() * max);

	return gradients[theme][randomNumber];
}
