import { useUser } from "@/entities/user";
import { useGetFriends } from "@/entities/friends";
import { useThemeColor } from "@/shared/hooks/useThemeColor";
import { Avatar, Link, Text, Toolbar } from "@/shared/ui";
import Ionicons from "@expo/vector-icons/Ionicons";
import { ScrollView, View } from "react-native";

export interface YourFriendsProps {
	title?: string;
	name?: boolean;
	linkFriends?: boolean;
	linkTransfer?: boolean;
}

export const YourFriends: React.FC<YourFriendsProps> = ({
	title,
	name,
	linkFriends,
	linkTransfer,
}) => {
	const { user } = useUser();
	const color = useThemeColor("danger");
	const addFriendColor = useThemeColor("text");
	const backgroundColor = useThemeColor("mainSurfaceSecondary");

	const { friends } = useGetFriends(user?.id);

	return (
		<Toolbar className="py-4 rounded-2xl my-2 flex gap-4">
			<View className="flex-row justify-between">
				<Text className="text-xs">{title}</Text>

				{linkTransfer && (
					<Link
						className="flex-row items-center gap-1"
						href="/(authenticated)/(app)/transfer"
					>
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
						friends.users.map((friendsUserData) =>
							name ? (
								<View key={friendsUserData.uid} className="flex items-center">
									<Avatar
										uid={friendsUserData.uid}
										name={friendsUserData.lastName}
										avatarUrl={friendsUserData.avatarUrl}
										size="large"
									/>

									<Text className="mt-2">{friendsUserData.lastName}</Text>
									<Text>{friendsUserData.secondName}</Text>
								</View>
							) : (
								<Avatar
									key={friendsUserData.uid}
									uid={friendsUserData.uid}
									name={friendsUserData.lastName}
									avatarUrl={friendsUserData.avatarUrl}
									size="large"
								/>
							),
						)}

					{linkFriends && (
						<Link
							className="w-14 h-14 rounded-2xl flex justify-center items-center"
							style={{ backgroundColor }}
							href="/(authenticated)/(app)/friends"
						>
							<Ionicons name="add" size={18} color={addFriendColor} />
						</Link>
					)}
				</View>
			</ScrollView>
		</Toolbar>
	);
};
