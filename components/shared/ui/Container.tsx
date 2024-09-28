import type { ViewProps } from "react-native";
import { useTailwind } from "tailwind-rn";
import { View } from "./View";

export type ContainerProps = ViewProps;

export const Container: React.FC<ContainerProps> = ({
	children,
	style,
	...otherProps
}) => {
	const tw = useTailwind();
	return (
		<View style={[tw("px-4"), style]} {...otherProps}>
			{children}
		</View>
	);
};
