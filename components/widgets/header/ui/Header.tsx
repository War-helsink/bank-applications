import { View } from "react-native";
import { Container, Link } from "@/components/shared";
import Ionicons from "@expo/vector-icons/Ionicons";
import { ProfileLink } from "./ProfileLink";

import { useThemeColor } from "@/core/hooks/useThemeColor";

export const Header: React.FC = () => {
	const color = useThemeColor("text");

	return (
		<Container className="flex flex-row items-center justify-between py-2">
			<ProfileLink />

			<View className="flex flex-row">
				<Link href="/messages" className="mx-3 flex items-center">
					<Ionicons name="notifications" size={18} color={color} />
				</Link>
				<Link href="/statistics" className="mx-3 flex items-center">
					<Ionicons name="bar-chart" size={18} color={color} />
				</Link>
			</View>
		</Container>
	);
};
