import { View, Pressable } from "react-native";
import { Text } from "@/components/shared";
import { MaterialIcons } from "@expo/vector-icons";
import { impactAsync, ImpactFeedbackStyle } from "expo-haptics";

import type { IMoreItem } from "../model";
import { GLOBAL_STYLES } from "@/core/style";

import { useThemeColor } from "@/core/hooks/useThemeColor";

export interface MenuItemProps {
	item: IMoreItem;
}

export const MenuItem: React.FC<MenuItemProps> = ({ item }) => {
	const backgroundColor = useThemeColor("mainSurfaceSecondary");
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
