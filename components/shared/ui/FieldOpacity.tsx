import clsx from "clsx";
import { View, TextInput, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

import { useState, useCallback } from "react";
import { useThemeColor } from "@/core/hooks/useThemeColor";

import type { TextStyle, StyleProp } from "react-native";

export interface FieldOpacityProps {
	className?: string;
	onChange?: (value: string) => void;
	style?: StyleProp<TextStyle>;
	value?: string;
	placeholder?: string;
	multiline?: boolean;
	isSecure?: boolean;
	border?: boolean;
	clear?: boolean;
}

export const FieldOpacity: React.FC<FieldOpacityProps> = ({
	className,
	value,
	style,
	onChange,
	placeholder,
	multiline,
	isSecure,
	border = true,
	clear = true,
}) => {
	const [isFocused, setIsFocused] = useState(false);

	const onFocus = useCallback(() => setIsFocused(true), []);
	const onBlur = useCallback(() => setIsFocused(false), []);

	const color = useThemeColor("text");
	const iconColor = useThemeColor("medium");
	const borderColor = useThemeColor("borderInput");

	return (
		<View className="pl-4 flex-row">
			<TextInput
				placeholder={placeholder}
				onChangeText={onChange}
				value={value}
				multiline={multiline}
				secureTextEntry={isSecure}
				placeholderTextColor={borderColor}
				className={clsx(
					"py-3 flex-1",
					border && "border-b border-solid",
					className,
				)}
				onFocus={onFocus}
				onBlur={onBlur}
				style={[{ color, borderColor }, style]}
			/>
			{clear && isFocused && value && value.length > 0 && (
				<TouchableOpacity
					onPress={() => onChange?.("")}
					className={clsx(
						"px-2 h-full flex-row items-center",
						border && "border-b border-solid",
					)}
					style={[{ borderColor }]}
				>
					<Ionicons name="close-circle" size={18} color={iconColor} />
				</TouchableOpacity>
			)}
		</View>
	);
};
