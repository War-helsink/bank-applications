import { View } from "react-native";
import type { ViewProps } from "react-native";
import { cn } from "../utils";

export type ContainerProps = ViewProps;

export const Container: React.FC<ContainerProps> = ({
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
