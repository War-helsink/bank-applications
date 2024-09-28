import { TouchableHighlight } from "react-native";
import { useTailwind } from "tailwind-rn";
import { ThemedText } from "./ThemedText";

export interface ButtonProps {
	onPress?: () => void;
	bgColor?: string;
	underlayColor?: string;
}

export const Button: React.FC<ButtonProps & React.PropsWithChildren> = ({
	children,
	onPress,
	bgColor = "bg-yellow-300",
	underlayColor = "#FBBF24",
}) => {
	const tw = useTailwind();

	return (
		<TouchableHighlight
			onPress={onPress}
			style={tw(`${bgColor} rounded-xl w-full my-4 py-3`)}
			underlayColor={underlayColor}
		>
			<ThemedText style={tw("text-center")}>{children}</ThemedText>
		</TouchableHighlight>
	);
};
