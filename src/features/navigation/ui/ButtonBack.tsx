import { useThemeColor } from "@/shared/hooks/useThemeColor";
import Ionicons from "@expo/vector-icons/Ionicons";
import { ImpactFeedbackStyle, impactAsync } from "expo-haptics";
import { useRouter } from "expo-router";
import { Platform, TouchableOpacity } from "react-native";

export const ButtonBack: React.FC = () => {
	const route = useRouter();
	const color = useThemeColor("text");
	const backgroundColor = useThemeColor("toolbarBackground");

	return (
		<TouchableOpacity
			onPress={() => {
				impactAsync(ImpactFeedbackStyle.Soft);
				route.back();
			}}
			className={`p-2.5 rounded-xl justify-center items-center ${Platform.OS === "android" && "mr-4"}`}
			style={{ backgroundColor }}
		>
			<Ionicons name="chevron-back-outline" size={16} color={color} />
		</TouchableOpacity>
	);
};
