import { View, TouchableOpacity } from "react-native";
import { Container, Text, Avatar } from "@/components/shared";
import Ionicons from "@expo/vector-icons/Ionicons";

import { useAuth } from "@/core/hooks/useAuth";
import { useRouter } from "expo-router";
import { useThemeColor } from "@/core/hooks/useThemeColor";

export const Header: React.FC = () => {
	const color = useThemeColor("text");
	const { profile } = useAuth();
	const router = useRouter();

	return (
		<Container className="flex flex-row items-center justify-between py-2">
			<TouchableOpacity
				onPress={() => router.push("/profile")}
				className="flex-row  items-center"
			>
				<Avatar name={profile?.lastName} />

				<View className="flex-row items-center ml-2">
					<Text className="font-bold">{profile?.lastName}</Text>
					<Ionicons name="chevron-forward" size={20} color={color} />
				</View>
			</TouchableOpacity>

			<View className="flex flex-row">
				<TouchableOpacity
					className="mx-3 flex items-center"
					onPress={() => router.push("/messages")}
				>
					<Ionicons name="notifications" size={20} color={color} />
				</TouchableOpacity>
				<TouchableOpacity
					className="mx-3 flex items-center"
					onPress={() => router.push("/statistics")}
				>
					<Ionicons name="bar-chart" size={20} color={color} />
				</TouchableOpacity>
			</View>
		</Container>
	);
};
