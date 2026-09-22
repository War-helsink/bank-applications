import React from "react";
import { Platform } from "react-native";
import { Text, type TextProps } from "./Text";

interface TextButtonProps extends TextProps {
	onPress?: () => void;
}
export const TextButton: React.FC<TextButtonProps> = ({
	onPress,
	...props
}) => {
	return React.createElement(Text, {
		...props,
		...Platform.select({
			web: { onClick: onPress },
			default: { onPress },
		}),
	});
};
