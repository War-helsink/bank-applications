import { View } from "react-native";
import { Container, Link } from "@/components/shared";
import { ProfileLink } from "@/components/features/profile";
import Ionicons from "@expo/vector-icons/Ionicons";

import { useThemeColor } from "@/core/hooks/useThemeColor";

export const Header: React.FC = () => {
	const color = useThemeColor("text");

	return (
		<Container className="flex flex-row items-center justify-between py-2">
			<ProfileLink />

			<View className="flex flex-row gap-2">
				<Link href="/messages" button>
					<Ionicons name="notifications" size={18} color={color} />
				</Link>
				<Link href="/statistics" button>
					<Ionicons name="bar-chart" size={18} color={color} />
				</Link>
			</View>
		</Container>
	);
};
