import { CardSlides } from "@/features/card";
import { useThemeColor } from "@/shared/hooks/useThemeColor";
import { Link, Text } from "@/shared/ui";
import Ionicons from "@expo/vector-icons/Ionicons";
import { View } from "react-native";

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
