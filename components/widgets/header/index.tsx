import { View, TouchableOpacity } from "react-native";
import { Container, Text, Avatar } from "@/components/shared";
import Ionicons from "@expo/vector-icons/Ionicons";

import { useThemeColor } from "@/core/hooks/useThemeColor";
import { useRouter } from "expo-router";

import { useAuth } from "@/core/hooks/useAuth";
import { useTailwind } from "tailwind-rn";

export const Header: React.FC = () => {
	const color = useThemeColor("text");
	const { profile } = useAuth();
	const router = useRouter();
	const tw = useTailwind();

	return (
		<Container style={tw("flex flex-row items-center justify-between py-2")}>
			<TouchableOpacity
				onPress={() => router.push("/profile")}
				style={tw("flex-row  items-center")}
			>
				<Avatar name={profile?.lastName} />

				<View style={tw("flex-row items-center ml-2")}>
					<Text style={tw("font-bold")}>{profile?.lastName}</Text>
					<Ionicons name="chevron-forward" size={20} color={color} />
				</View>
			</TouchableOpacity>

			<View style={tw("flex flex-row")}>
				<TouchableOpacity
					style={tw("mx-3 flex items-center")}
					onPress={() => router.push("/messages")}
				>
					<Ionicons name="notifications" size={20} color={color} />
				</TouchableOpacity>
				<TouchableOpacity
					style={tw("mx-3 flex items-center")}
					onPress={() => router.push("/statistics")}
				>
					<Ionicons name="bar-chart" size={20} color={color} />
				</TouchableOpacity>
			</View>
		</Container>
	);
};
