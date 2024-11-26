import { View, ScrollView } from "react-native";
import { Toolbar, Link, Text } from "@/components/shared";
import Ionicons from "@expo/vector-icons/Ionicons";

import { useThemeColor } from "@/core/hooks/useThemeColor";

export const FriendsListTransfer: React.FC = () => {
	const color = useThemeColor("danger");
	const addFriendColor = useThemeColor("text");
	const backgroundColor = useThemeColor("mainSurfaceSecondary");

	// Need to add friends
	const friends = [];

	return (
		<Toolbar className="py-4 rounded-2xl my-2 flex gap-4">
			<View className="flex-row justify-between">
				<Text className="text-xs">QUICK MONEY TRANSFER</Text>

				<Link className="flex-row items-center gap-1" href="/(app)/transfer">
					<Text className="text-xs" style={{ color }}>
						SEE MORE
					</Text>
					<Ionicons name="chevron-forward-outline" size={12} color={color} />
				</Link>
			</View>
			<ScrollView horizontal showsHorizontalScrollIndicator={false}>
				<View className="flex-row gap-2">
					<Link
						className="w-14 h-14 rounded-2xl flex justify-center items-center"
						style={{ backgroundColor }}
						href="/(app)/friends"
					>
						<Ionicons name="add" size={18} color={addFriendColor} />
					</Link>
				</View>
			</ScrollView>
		</Toolbar>
	);
};
