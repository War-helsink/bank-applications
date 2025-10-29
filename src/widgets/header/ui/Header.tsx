import { ProfileLink } from "@/features/profile";
import { useThemeColor } from "@/shared/hooks/useThemeColor";
import { Container, Link } from "@/shared/ui";
import Ionicons from "@expo/vector-icons/Ionicons";
import { View } from "react-native";

export const Header: React.FC = () => {
	const color = useThemeColor("text");

	return (
		<Container className="flex flex-row items-center justify-between py-2">
			<ProfileLink />

			<View className="flex flex-row gap-2">
				<Link href="/(authenticated)/(app)/messages" button>
					<Ionicons name="notifications" size={18} color={color} />
				</Link>
				<Link href="/(authenticated)/(app)/statistics" button>
					<Ionicons name="bar-chart" size={18} color={color} />
				</Link>
			</View>
		</Container>
	);
};
