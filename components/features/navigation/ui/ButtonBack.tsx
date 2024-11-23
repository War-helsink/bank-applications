import { TouchableOpacity, Platform } from "react-native";
import { impactAsync, ImpactFeedbackStyle } from "expo-haptics";
import Ionicons from "@expo/vector-icons/Ionicons";

import { useNavigation } from "expo-router";
import { useThemeColor } from "@/core/hooks/useThemeColor";

export const ButtonBack: React.FC = () => {
	const navigation = useNavigation();
	const color = useThemeColor("text");
	const backgroundColor = useThemeColor("toolbarBackground");

	return (
		<TouchableOpacity
			onPress={() => {
				impactAsync(ImpactFeedbackStyle.Soft);
				navigation.goBack();
			}}
			className={`p-2.5 rounded-xl justify-center items-center ${Platform.OS === "android" && "mr-4"}`}
			style={{ backgroundColor }}
		>
			<Ionicons name="chevron-back-outline" size={16} color={color} />
		</TouchableOpacity>
	);
};
