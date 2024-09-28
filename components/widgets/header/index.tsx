import { Container, Text, View } from "@/components/shared/ui";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { useThemeColor } from "@/hooks/useThemeColor";
import { useTailwind } from "tailwind-rn";


export const Header: React.FC = () => {
	const color = useThemeColor("text");
	const tw = useTailwind();

	return (
		<Container style={tw("flex flex-row items-center justify-between")}>
			<View>
				<Text>Header</Text>
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
