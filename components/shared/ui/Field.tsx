import { TextInput } from "react-native";
import { useTailwind } from "tailwind-rn";
import { useThemeColor } from "@/hooks/useThemeColor";

export interface FieldProps {
	onChange?: (value: string) => void;
	value?: string;
	placeholder?: string;
	isSecure?: boolean;
}

export const Field: React.FC<FieldProps> = ({
	value,
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
				{ color },
				{ borderColor },
				tw("rounded-xl mt-3 p-3 border border-solid"),
			]}
		/>
	);
};
