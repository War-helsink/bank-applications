import { View } from "react-native";
import { Text, Link } from "@/components/shared";
import { CardSlides } from "@/components/features/card";
import Ionicons from "@expo/vector-icons/Ionicons";

import { useThemeColor } from "@/core/hooks/useThemeColor";

export const CardsView: React.FC = () => {
	const color = useThemeColor("text");

	return (
		<View>
			<View className="w-full py-2 flex-row justify-between items-center">
				<Link className="flex-row" href="/cards" button>
					<Text>All cards</Text>
					<Ionicons name="chevron-forward" size={18} color={color} />
				</Link>

				<Link href="/add-card" button>
					<Ionicons name="add" size={18} color={color} />
				</Link>
			</View>
			<CardSlides />
		</View>
	);
};
