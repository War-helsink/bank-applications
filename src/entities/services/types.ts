import type { MaterialIcons } from "@expo/vector-icons";

export interface IServiceItem {
	title: string;
	percent: number;
	iconName: keyof typeof MaterialIcons.glyphMap;
}
