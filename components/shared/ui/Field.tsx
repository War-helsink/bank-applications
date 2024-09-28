import { TextInput } from "react-native";
import { useTailwind } from "tailwind-rn";

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
	const tw = useTailwind();

	return (
		<TextInput
			placeholder={placeholder}
			onChangeText={onChange}
			value={value}
			secureTextEntry={isSecure}
			autoCapitalize="none"
            style={tw("rounded-xl bg-gray-100 mt-3 p-3")}
		/>
	);
};
