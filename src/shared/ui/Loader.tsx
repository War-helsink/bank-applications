import { useThemeColor } from "@/shared/hooks/useThemeColor";
import { ActivityIndicator, type ActivityIndicatorProps } from "react-native";

export const Loader: React.FC<
	Omit<ActivityIndicatorProps, "size" | "color">
> = (props) => {
	const color = useThemeColor("primary");

	return <ActivityIndicator size="large" color={color} {...props} />;
};
