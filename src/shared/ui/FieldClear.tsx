import type { TextInputProps, ViewProps } from "react-native";
import { TextInput, TouchableOpacity, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useThemeColor } from "@/shared/hooks/useThemeColor";
import { cn } from "../utils";

export interface FieldClearProps extends Omit<TextInputProps, "onChange"> {
	onChange?: (value: string) => void;
	containerProps?: ViewProps;
}

export const FieldClear: React.FC<FieldClearProps> = ({
	className,
	style,
	value,
	onChange,
	containerProps,
	...props
}) => {
	const { className: containerClassName, ...otherContainerProps } =
		containerProps || {};

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
				style={[{ color, borderColor }, style]}
				{...props}
			/>
			{value && value.length > 0 && (
				<TouchableOpacity
					onPress={() => onChange?.("")}
					className={cn("absolute right-4 px-2")}
					style={[{ borderColor }]}
				>
					<Ionicons name="close-circle" size={18} color={iconColor} />
				</TouchableOpacity>
			)}
		</View>
	);
};
