import { View } from "react-native";
import { Container, Text, Avatar, Link } from "@/components/shared";
import Ionicons from "@expo/vector-icons/Ionicons";

import { useAuth } from "@/core/hooks/useAuth";
import { useThemeColor } from "@/core/hooks/useThemeColor";

export const Header: React.FC = () => {
	const color = useThemeColor("text");
	const { profile } = useAuth();

	return (
		<Container className="flex flex-row items-center justify-between py-2">
			<Link href="/profile" className="flex-row  items-center">
				<Avatar name={profile?.lastName} />

				<View className="flex-row items-center ml-2">
					<Text className="font-bold">{profile?.lastName}</Text>
					<Ionicons name="chevron-forward" size={20} color={color} />
				</View>
			</Link>

			<View className="flex flex-row">
				<Link href="/messages" className="mx-3 flex items-center">
					<Ionicons name="notifications" size={20} color={color} />
				</Link>
				<Link href="/statistics" className="mx-3 flex items-center">
					<Ionicons name="bar-chart" size={20} color={color} />
				</Link>
			</View>
		</Container>
	);
};
