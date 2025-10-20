import { useState } from "react";
import type { TextInputProps, ViewProps } from "react-native";
import { TextInput, TouchableOpacity, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useThemeColor } from "@/shared/hooks/useThemeColor";
import { cn } from "../utils";

export interface FieldPasswordProps
	extends Omit<TextInputProps, "onChange" | "secureTextEntry"> {
	onChange?: (value: string) => void;
	clear?: boolean;
	containerProps?: ViewProps;
}

export const FieldPassword: React.FC<FieldPasswordProps> = ({
	className,
	style,
	value,
	onChange,
	containerProps,
	...props
}) => {
	const { className: containerClassName, ...otherContainerProps } =
		containerProps || {};
	const [isShowPassword, setIsShowPassword] = useState(false);

	const color = useThemeColor("text");
	const iconColor = useThemeColor("medium");
	const borderColor = useThemeColor("borderInput");

	return (
		<View
			className={cn("px-4 flex-row items-center", containerClassName)}
			{...otherContainerProps}
		>
			<TextInput
				onChangeText={onChange}
				placeholderTextColor={borderColor}
				className={cn("py-3 flex-1 border-b border-solid pr-8", className)}
				value={value}
				secureTextEntry={!isShowPassword}
				style={[{ color, borderColor }, style]}
				{...props}
			/>

			<TouchableOpacity
				onPress={() => setIsShowPassword((prew) => !prew)}
				className={cn("absolute right-4 px-2")}
				style={[{ borderColor }]}
			>
				<Ionicons
					name={isShowPassword ? "eye" : "eye-off"}
					size={18}
					color={iconColor}
				/>
			</TouchableOpacity>
		</View>
	);
};
