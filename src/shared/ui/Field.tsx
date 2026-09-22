import type { TextInputProps } from "react-native";
import { TextInput } from "react-native";

import { useThemeColor } from "@/shared/hooks/useThemeColor";
import { cn } from "../utils";

export interface FieldProps extends Omit<TextInputProps, "onChange"> {
	ref?: React.RefObject<TextInput | null>;
	onChange?: (value: string) => void;
}

export const Field: React.FC<FieldProps> = ({
	className,
	style,
	onChange,
	...props
}) => {
	const color = useThemeColor("text");
	const borderColor = useThemeColor("borderInput");

	return (
		<TextInput
			onChangeText={onChange}
			placeholderTextColor={borderColor}
			className={cn("rounded-xl p-3 border border-solid", className)}
			style={[{ color, borderColor }, style]}
			{...props}
		/>
	);
};
