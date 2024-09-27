import Ionicons from "@expo/vector-icons/Ionicons";
import type { IconProps } from "@expo/vector-icons/build/createIconSet";
import type { ComponentProps } from "react";

export const TabBarIcon: React.FC<
	IconProps<ComponentProps<typeof Ionicons>["name"]>
> = ({ style, ...rest }) => {
	return <Ionicons size={28} style={[{ marginBottom: -3 }, style]} {...rest} />;
};
