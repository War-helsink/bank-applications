import { ActivityIndicator } from "react-native";
import { useThemeColor } from "@/core/hooks/useThemeColor";

export const Profile: React.FC = () => {
	const color = useThemeColor("primary");

	return <ActivityIndicator size="large" color={color} />;
};
