import { View } from "react-native";
import { Text, Link } from "@/components/shared";
import { CardSlides } from "@/components/features/card";
import Ionicons from "@expo/vector-icons/Ionicons";

import { useAuth } from "@/core/hooks/useAuth";
import { useThemeColor } from "@/core/hooks/useThemeColor";

export const CardsView: React.FC = () => {
	const color = useThemeColor("text");
	const { profile } = useAuth();

	if (profile === null) {
		return;
	}

	return (
		<View>
			<View className="w-full py-2 flex-row justify-between items-center">
				<Link className="flex-row items-center" href="/cards">
					<Text>All cards</Text>
					<Ionicons name="chevron-forward" size={20} color={color} />
				</Link>

				<Link className="flex-row items-center" href="/add-card">
					<Ionicons name="add" size={20} color={color} />
				</Link>
			</View>
			<CardSlides />
		</View>
	);
};
