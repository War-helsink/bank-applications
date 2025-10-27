import type { TextInputProps, ViewProps } from "react-native";
import { TextInput, View } from "react-native";
import { Text } from "./Text";
import { useThemeColor } from "@/shared/hooks/useThemeColor";
import { cn } from "../utils";

const PHONE_INPUT_MAX_LENGTH = 13; // +380 (xx) xxx-xxxxx

const formatPhoneValue = (value: string): string => {
	if (!value) {
		return "";
	}

	const digits = value.replace(/\D/g, "").slice(0, 10);
	const area = digits.slice(0, 2);
	const prefix = digits.slice(2, 5);
	const line = digits.slice(5, 10);

	if (digits.length <= 2) {
		return `(${area}`;
	}

	if (digits.length <= 5) {
		return `(${area}) ${prefix}`;
	}

	return `(${area}) ${prefix}-${line}`;
};

const sanitizePhoneValue = (value: string): string => {
	if (!value) {
		return "";
	}
	const digits = value.replace(/\D/g, "");
	const withoutLeadingOne = digits.startsWith("0") ? digits.slice(1) : digits;
	return withoutLeadingOne.slice(0, 10);
};

export interface FieldPhoneProps extends Omit<TextInputProps, "onChange"> {
	containerProps?: ViewProps;
	onChange: (value: string) => void;
	value: string;
}

export const FieldPhone: React.FC<FieldPhoneProps> = ({
	className,
	style,
	value,
	onChange,
	containerProps,
	...props
}) => {
	const {
		className: containerClassName,
		style: containerStyle,
		...otherContainerProps
	} = containerProps || {};

	const color = useThemeColor("text");
	const backgroundColor = useThemeColor("light");
	const placeholderColor = useThemeColor("borderInput");

	const onChangeText = (text: string) => {
		const sanitized = sanitizePhoneValue(text);
		onChange(sanitized);
	};

	const formattedValue = formatPhoneValue(value);

	return (
		<View
			className={cn(
				"px-6 py-1 flex-row items-center gap-2 rounded-full",
				containerClassName,
			)}
			style={[{ backgroundColor }, containerStyle]}
			{...otherContainerProps}
		>
			<View>
				<Text className="text-center font-bold">🇺🇦 +380</Text>
			</View>
			<TextInput
				onChangeText={onChangeText}
				placeholderTextColor={placeholderColor}
				className={cn("p-3 flex-1 rounded-full", className)}
				textContentType="telephoneNumber"
				autoComplete="tel"
				keyboardType="phone-pad"
				value={formattedValue}
				maxLength={PHONE_INPUT_MAX_LENGTH}
				style={[{ color }, style]}
				{...props}
			/>
		</View>
	);
};
