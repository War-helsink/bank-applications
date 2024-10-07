import { TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Ionicons from "@expo/vector-icons/Ionicons";
import * as Haptics from "expo-haptics";

import { useRouter } from "expo-router";
import { useThemeColor } from "@/core/hooks/useThemeColor";
import { useThemeGradient } from "@/core/hooks/useThemeGradient";

import { GLOBAL_STYLES } from "@/core/style";

export interface CreateCardItemProps {
	width: number;
	height: number;
}

export const CreateCardItem: React.FC<CreateCardItemProps> = ({
	width,
	height,
}) => {
	const backgroundGradient = useThemeGradient("addCard");
	const color = useThemeColor("white");
	const router = useRouter();

	return (
		<LinearGradient
			colors={backgroundGradient}
			className="rounded-xl p-5 justify-center items-center"
			style={[
				{ width: width, height: height },
				GLOBAL_STYLES.shadow,
			]}
		>
			<TouchableOpacity
				className="mx-3 flex items-center"
				onPress={() => {
					Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Soft);
					router.push("/add-card");
				}}
			>
				<Ionicons name="add-circle" size={32} color={color} />
			</TouchableOpacity>
		</LinearGradient>
	);
};
