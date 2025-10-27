import React from "react";
import { Platform, Text, type TextProps } from "react-native";
import { useThemeColor } from "../hooks/useThemeColor";

interface TextButtonProps extends TextProps {
	ref?: React.RefObject<Text>;
	onPress: () => void;
}
export const TextButton: React.FC<TextButtonProps> = ({
	ref,
	onPress,
	style,
	style: styleProps,
	...props
}) => {
	const color = useThemeColor("primary");

	return React.createElement(Text, {
		ref,
		style: [{ color }, style],
		...props,
		...Platform.select({
			web: { onClick: onPress },
			default: { onPress },
		}),
	});
};
