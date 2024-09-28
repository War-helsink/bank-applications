import type { ViewProps } from "react-native";
import { useTailwind } from "tailwind-rn";
import { ThemedView } from "./ThemedView";

export type ContainerProps = ViewProps;

export const Container: React.FC<ContainerProps> = ({
	children,
	style,
	...otherProps
}) => {
	const tw = useTailwind();
	return (
		<ThemedView style={[tw("px-4"), style]} {...otherProps}>
			{children}
		</ThemedView>
	);
};
