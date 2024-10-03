import { TouchableOpacity, View } from "react-native";
import { Text } from "@/components/shared";
import { AccountSlides } from "@/components/features/account";
import Ionicons from "@expo/vector-icons/Ionicons";

import { useAuth } from "@/core/hooks/useAuth";
import { useRouter } from "expo-router";
import { useTailwind } from "tailwind-rn";
import { useThemeColor } from "@/core/hooks/useThemeColor";

export const AccountView: React.FC = () => {
	const tw = useTailwind();
	const color = useThemeColor("primary");
	const { profile } = useAuth();
	const router = useRouter();

	if (profile === null) {
		return;
	}

	return (
		<View>
			<View style={tw("w-full py-2 justify-center")}>
				<TouchableOpacity
					style={tw("flex-row items-center")}
					onPress={() => router.push("/accounts")}
				>
					<Text style={{ color }}>All cards</Text>
					<Ionicons name="chevron-forward" size={20} color={color} />
				</TouchableOpacity>
			</View>
			<AccountSlides />
		</View>
	);
};
