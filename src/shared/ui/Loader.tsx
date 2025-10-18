import { useThemeColor } from "@/shared/hooks/useThemeColor";
import { ActivityIndicator } from "react-native";

export const Loader: React.FC = () => {
	const color = useThemeColor("primary");

	return <ActivityIndicator size="large" color={color} />;
};
