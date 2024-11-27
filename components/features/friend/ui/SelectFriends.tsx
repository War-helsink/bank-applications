import { View, ScrollView, TouchableOpacity } from "react-native";
import { Toolbar, Avatar, Text } from "@/components/shared";
import Ionicons from "@expo/vector-icons/Ionicons";

import { useThemeColor } from "@/core/hooks/useThemeColor";

import type { UserProfile } from "@/core/entities/user";

export interface YourFriendsProps {
	users: UserProfile[];
	selectUser?: (user: UserProfile) => void;
}

export const SelectFriends: React.FC<YourFriendsProps> = ({
	users,
	selectUser,
}) => {
	const addFriendColor = useThemeColor("danger");
	const backgroundColor = useThemeColor("mainSurfaceSecondary");

	return (
		users.length > 0 && (
			<Toolbar className="py-4 rounded-2xl my-2 flex gap-4">
				<ScrollView>
					<View className="w-full gap-2">
						{users.length > 0 &&
							users.map((user) => (
								<View
									key={user.id}
									className="flex-row justify-between items-center"
								>
									<View className="flex-1 flex-row gap-4">
										<Avatar
											uid={user.id}
											name={user.lastName}
											avatarUrl={user.avatarUrl}
											size="large"
										/>
										<View>
											<Text className="text-sm">{user.firstName}</Text>
											<Text className="text-sm">{user.secondName}</Text>
										</View>
									</View>
									<TouchableOpacity
										onPress={() => selectUser?.(user)}
										className="w-10 h-10 rounded-xl flex justify-center items-center"
										style={{ backgroundColor }}
									>
										<Ionicons name="add" size={18} color={addFriendColor} />
									</TouchableOpacity>
								</View>
							))}
					</View>
				</ScrollView>
			</Toolbar>
		)
	);
};
