import { TouchableOpacity } from "react-native";
import { Text, View } from "@/components/shared";
import Ionicons from "@expo/vector-icons/Ionicons";

import { useAuth } from "@/core/hooks/useAuth";
import { useRouter } from "expo-router";
import { useTailwind } from "tailwind-rn";
import { useThemeColor } from "@/core/hooks/useThemeColor";

export const Account: React.FC = () => {
	const color = useThemeColor("primary");
	const colorText = useThemeColor("text");
	const tw = useTailwind();
	const { profile } = useAuth();
	const router = useRouter();

	if (profile === null) {
		return;
	}

	return (
		<View style={tw("w-full flex-row items-center justify-between py-2")}>
			<TouchableOpacity
				style={tw("flex-row items-center")}
				onPress={() => router.push("/account")}
			>
				<Text style={{ color }}>All cards</Text>
				<Ionicons name="chevron-forward" size={20} color={color} />
			</TouchableOpacity>

			<View style={tw("flex-row items-center")}>
				<Ionicons name="ellipsis-vertical" size={20} color={colorText} />
			</View>
		</View>
	);
};
