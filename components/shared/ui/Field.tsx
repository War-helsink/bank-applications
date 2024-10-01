import { TextInput } from "react-native";
import type { TextStyle, StyleProp } from "react-native";
import { useTailwind } from "tailwind-rn";
import { useThemeColor } from "@/core/hooks/useThemeColor";

export interface FieldProps {
	onChange?: (value: string) => void;
	style?: StyleProp<TextStyle>;
	value?: string;
	placeholder?: string;
	isSecure?: boolean;
}

export const Field: React.FC<FieldProps> = ({
	value,
	style,
	onChange,
	placeholder,
	isSecure,
}) => {
	const color = useThemeColor("text");
	const borderColor = useThemeColor("borderInput");
	const tw = useTailwind();

	return (
		<TextInput
			placeholder={placeholder}
			onChangeText={onChange}
			value={value}
			secureTextEntry={isSecure}
			autoCapitalize="none"
			placeholderTextColor={borderColor}
			style={[
				{ color, borderColor },
				tw("rounded-xl p-3 border border-solid"),
				style,
			]}
		/>
	);
};
