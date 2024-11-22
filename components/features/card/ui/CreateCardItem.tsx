import { Link } from "@/components/shared";
import { LinearGradient } from "expo-linear-gradient";
import Ionicons from "@expo/vector-icons/Ionicons";
import { View } from "react-native";

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

	return (
		<View
			className="rounded-xl p-5 justify-center items-center overflow-hidden"
			style={[{ width: width, height: height }, GLOBAL_STYLES.shadow]}
		>
			<LinearGradient
				colors={backgroundGradient}
				style={{ width: width, height: height }}
			/>
			<Link className="absolute" href="/add-card">
				<Ionicons name="add-circle" size={32} color={color} />
			</Link>
		</View>
	);
};
