import { useThemeColor } from "@/shared/hooks/useThemeColor";
import { type TextProps as TextPropsRN, Text as TextRN } from "react-native";

export type TextProps = TextPropsRN & {
	ref?: React.RefObject<TextRN>;
	lightColor?: string;
	darkColor?: string;
};

export function Text({ style, lightColor, darkColor, ...rest }: TextProps) {
	const color = useThemeColor("text", { light: lightColor, dark: darkColor });
	return <TextRN style={[{ color }, style]} {...rest} />;
}
