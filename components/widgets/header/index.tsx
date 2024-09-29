import { TouchableOpacity } from "react-native";
import { Container, View, Text, Avatar } from "@/components/shared/ui";

import {
	FontAwesome5,
	MaterialCommunityIcons,
	Entypo,
} from "@expo/vector-icons";
import { useThemeColor } from "@/core/hooks/useThemeColor";
import { useRouter } from "expo-router";

import { useAuth } from "@/core/hooks/useAuth";
import { useTailwind } from "tailwind-rn";

export const Header: React.FC = () => {
	const color = useThemeColor("text");
	const { profile } = useAuth();
	const tw = useTailwind();
	const router = useRouter();

	return (
		<Container style={tw("flex flex-row items-center justify-between")}>
			<View style={tw("flex flex-row items-center")}>
				<Avatar name={profile?.lastName} />
				<TouchableOpacity
					style={tw("flex-row items-end ml-2")}
					onPress={() => router.push("/profile")}
				>
					<Text style={tw("font-bold")}>{profile?.lastName}</Text>
					<Entypo name="chevron-small-right" size={24} style={{ color }} />
				</TouchableOpacity>
			</View>
			<View style={tw("flex flex-row")}>
				<TouchableOpacity
					style={tw("mx-1")}
					onPress={() => router.push("/messages")}
				>
					<MaterialCommunityIcons
						name="bell"
						size={24}
						color="black"
						style={{ color }}
					/>
				</TouchableOpacity>
				<TouchableOpacity
					style={tw("mx-1")}
					onPress={() => router.push("/statistics")}
				>
					<FontAwesome5
						name="chart-bar"
						size={24}
						color="black"
						style={{ color }}
					/>
				</TouchableOpacity>
			</View>
		</Container>
	);
};
