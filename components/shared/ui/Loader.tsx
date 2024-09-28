import { ActivityIndicator } from "react-native";
import { useThemeColor } from "@/hooks/useThemeColor";

export const Loader: React.FC = () => {
	const color = useThemeColor("primary");

	return <ActivityIndicator size="large" color={color} />;
};
