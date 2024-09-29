import { Container, View, Avatar } from "@/components/shared/ui";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { useThemeColor } from "@/core/hooks/useThemeColor";
import { useTailwind } from "tailwind-rn";
import { useAuth } from "@/core/hooks/useAuth";

export const Header: React.FC = () => {
	const color = useThemeColor("text");
	const { profile } = useAuth();
	const tw = useTailwind();

	return (
		<Container style={tw("flex flex-row items-center justify-between")}>
			<View>
				<Avatar name={profile?.lastName} />
			</View>
			<View style={tw("flex flex-row")}>
				<MaterialCommunityIcons
					name="bell"
					size={24}
					color="black"
					style={[{ color }, tw("mx-1")]}
				/>
				<FontAwesome5
					name="chart-bar"
					size={24}
					color="black"
					style={[{ color }, tw("mx-1")]}
				/>
			</View>
		</Container>
	);
};
