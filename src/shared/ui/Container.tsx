import { View } from "react-native";
import type { ViewProps } from "react-native";
import { cn } from "../utils";

export const Container: React.FC<ViewProps> = ({
	className,
	children,
	style,
	...otherProps
}) => {
	return (
		<View className={cn("px-4", className)} style={style} {...otherProps}>
			{children}
		</View>
	);
};
