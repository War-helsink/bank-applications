import { View, ScrollView } from "react-native";
import { Toolbar, Link, Text, Avatar } from "@/components/shared";
import Ionicons from "@expo/vector-icons/Ionicons";

import { useThemeColor } from "@/core/hooks/useThemeColor";
import { useGetFriends } from "@/core/hooks/useFriends";
import { useAuth } from "@/core/hooks/useAuth";

export interface YourFriendsProps {
	title?: string;
	linkFriends?: boolean;
	linkTransfer?: boolean;
}

export const YourFriends: React.FC<YourFriendsProps> = ({
	title,
	linkFriends,
	linkTransfer,
}) => {
	const { profile } = useAuth();
	const color = useThemeColor("danger");
	const addFriendColor = useThemeColor("text");
	const backgroundColor = useThemeColor("mainSurfaceSecondary");

	const { friends } = useGetFriends(profile?.id);

	return (
		<Toolbar className="py-4 rounded-2xl my-2 flex gap-4">
			<View className="flex-row justify-between">
				<Text className="text-xs">{title}</Text>

				{linkTransfer && (
					<Link className="flex-row items-center gap-1" href="/(app)/transfer">
						<Text className="text-xs" style={{ color }}>
							SEE MORE
						</Text>
						<Ionicons name="chevron-forward-outline" size={12} color={color} />
					</Link>
				)}
			</View>
			<ScrollView horizontal showsHorizontalScrollIndicator={false}>
				<View className="flex-row gap-2">
					{friends &&
						friends.users.length > 0 &&
						friends.users.map((friendsUserData) => (
							<Avatar
								key={friendsUserData.uid}
								uid={friendsUserData.uid}
								name={friendsUserData.lastName}
								avatarUrl={friendsUserData.avatarUrl}
								size="large"
							/>
						))}

					{linkFriends && (
						<Link
							className="w-12 h-12 rounded-2xl flex justify-center items-center"
							style={{ backgroundColor }}
							href="/(app)/friends"
						>
							<Ionicons name="add" size={18} color={addFriendColor} />
						</Link>
					)}
				</View>
			</ScrollView>
		</Toolbar>
	);
};
