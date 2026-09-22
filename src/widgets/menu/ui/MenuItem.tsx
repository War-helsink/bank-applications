import { useThemeColor } from "@/shared/hooks/useThemeColor";
import { GLOBAL_STYLES } from "@/shared/style";
import { Text } from "@/shared/ui";
import { MaterialIcons } from "@expo/vector-icons";
import { ImpactFeedbackStyle, impactAsync } from "expo-haptics";
import { Pressable, View } from "react-native";
import type { IMoreItem } from "../types";

export interface MenuItemProps {
	item: IMoreItem;
}

export const MenuItem: React.FC<MenuItemProps> = ({ item }) => {
	const backgroundColor = useThemeColor("toolbarBackground");
	const iconBackgroundColor = useThemeColor("primary");
	const color = useThemeColor("white");

	return (
		<Pressable
			className="mt-4 flex-row p-4 rounded-2xl justify-between"
			style={[GLOBAL_STYLES.shadow, { backgroundColor }]}
			onPress={() => {
				impactAsync(ImpactFeedbackStyle.Soft);
			}}
		>
			<View className="w-10/12">
				<Text className="text-xl font-bold">{item.title}</Text>
				<Text className="mt-1 opacity-90">{item.description}</Text>
			</View>

			<View
				className="w-9 h-9 rounded-full items-center justify-center"
				style={{ backgroundColor: iconBackgroundColor }}
			>
				<MaterialIcons name={item.iconName} size={22} color={color} />
			</View>
		</Pressable>
	);
};
