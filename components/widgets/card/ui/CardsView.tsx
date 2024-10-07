import { TouchableOpacity, View } from "react-native";
import { Text } from "@/components/shared";
import { CardSlides } from "@/components/features/card";
import Ionicons from "@expo/vector-icons/Ionicons";

import { useAuth } from "@/core/hooks/useAuth";
import { useRouter } from "expo-router";
import { useThemeColor } from "@/core/hooks/useThemeColor";

export const CardsView: React.FC = () => {
	const color = useThemeColor("text");
	const { profile } = useAuth();
	const router = useRouter();

	if (profile === null) {
		return;
	}

	return (
		<View>
			<View className="w-full py-2 justify-center">
				<TouchableOpacity
					className="flex-row items-center"
					onPress={() => router.push("/cards")}
				>
					<Text>All cards</Text>
					<Ionicons name="chevron-forward" size={20} color={color} />
				</TouchableOpacity>
			</View>
			<CardSlides />
		</View>
	);
};
