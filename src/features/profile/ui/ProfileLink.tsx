import { useUser } from "@/entities/user";
import { useThemeColor } from "@/shared/hooks/useThemeColor";
import { Avatar, Link, Text } from "@/shared/ui";
import Ionicons from "@expo/vector-icons/Ionicons";
import { View } from "react-native";

export const ProfileLink: React.FC = () => {
	const color = useThemeColor("danger");

	const { user } = useUser();

	if (!user) {
		return null;
	}

	return (
		<Link
			className="flex-row p-0 pr-2 items-center rounded-2xl"
			href="/(authenticated)/profile"
			button
		>
			<Avatar
				uid={user.id}
				name={user.lastName}
				avatarUrl={user.avatarUrl}
				className="border border-solid rounded-2xl"
				style={{ borderColor: color }}
				size={48}
			/>

			<View className="flex-row items-center ml-2">
				<Text className="text-base">{user.lastName}</Text>
				<Ionicons name="chevron-forward" size={16} color={color} />
			</View>
		</Link>
	);
};
