import { TextInput } from "react-native";

import { useThemeColor } from "@/core/hooks/useThemeColor";

import type { TextStyle, StyleProp } from "react-native";

export interface FieldProps {
	className?: string;
	onChange?: (value: string) => void;
	style?: StyleProp<TextStyle>;
	value?: string;
	placeholder?: string;
	isSecure?: boolean;
}

export const Field: React.FC<FieldProps> = ({
	className,
	value,
	style,
	onChange,
	placeholder,
	isSecure,
}) => {
	const color = useThemeColor("text");
	const borderColor = useThemeColor("borderInput");

	return (
		<TextInput
			placeholder={placeholder}
			onChangeText={onChange}
			value={value}
			secureTextEntry={isSecure}
			autoCapitalize="none"
			placeholderTextColor={borderColor}
			className={`rounded-xl p-3 border border-solid ${className}`}
			style={[{ color, borderColor }, style]}
		/>
	);
};
