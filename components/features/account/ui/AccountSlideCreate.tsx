import { View, StyleSheet, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Ionicons from "@expo/vector-icons/Ionicons";

import { useRouter } from "expo-router";
import { useTailwind } from "tailwind-rn";
import { useThemeColor } from "@/core/hooks/useThemeColor";
import { useThemeGradient } from "@/core/hooks/useThemeGradient";

export interface AccountSlideCreateProps {
	width: number;
	height: number;
}

export const AccountSlideCreate: React.FC<AccountSlideCreateProps> = ({
	width,
	height,
}) => {
	const backgroundGradient = useThemeGradient("addCard");
	const color = useThemeColor("white");
	const router = useRouter();
	const tw = useTailwind();

	return (
		<View style={tw("w-full h-full justify-center items-center")}>
			<LinearGradient
				colors={backgroundGradient}
				style={[
					{ width: width, height: height },
					tw("rounded-xl p-5 justify-center items-center"),
					styles.shadow,
				]}
			>
				<TouchableOpacity
					style={tw("mx-3 flex items-center")}
					onPress={() => router.push("/create-account")}
				>
					<Ionicons name="add-circle" size={32} color={color} />
				</TouchableOpacity>
			</LinearGradient>
		</View>
	);
};

const styles = StyleSheet.create({
	shadow: {
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 4 },
		shadowOpacity: 0.3,
		shadowRadius: 5,
		elevation: 5,
	},
});
