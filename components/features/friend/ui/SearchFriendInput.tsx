import { TextInput, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

import { useThemeColor } from "@/core/hooks/useThemeColor";

export interface SearchFriendInputProps {
	onChange?: (value: string) => void;
	value?: string;
}

export const SearchFriendInput: React.FC<SearchFriendInputProps> = ({
	value,
	onChange,
}) => {
	const color = useThemeColor("text");
	const backgroundColor = useThemeColor("toolbarBackground");
	const borderColor = useThemeColor("borderInput");

	return (
		<View
			className="rounded-xl flex-row gap-2 p-3 border border-solid"
			style={{ borderColor, backgroundColor }}
		>
			<Ionicons name="search" size={18} color={color} />
			<TextInput
				placeholder="Search for your friend"
				onChangeText={onChange}
				value={value}
				placeholderTextColor={borderColor}
				className="flex-1"
				style={{ color }}
			/>
		</View>
	);
};
