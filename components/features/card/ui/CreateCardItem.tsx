import { TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Ionicons from "@expo/vector-icons/Ionicons";
import * as Haptics from "expo-haptics";

import { useRouter } from "expo-router";
import { useTailwind } from "tailwind-rn";
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
	const tw = useTailwind();

	return (
		<LinearGradient
			colors={backgroundGradient}
			style={[
				{ width: width, height: height },
				tw("rounded-xl p-5 justify-center items-center"),
				GLOBAL_STYLES.shadow,
			]}
		>
			<TouchableOpacity
				style={tw("mx-3 flex items-center")}
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
