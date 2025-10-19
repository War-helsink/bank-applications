import { useThemeColor } from "@/shared/hooks/useThemeColor";
import { useThemeGradient } from "@/shared/hooks/useThemeGradient";
import { GLOBAL_STYLES } from "@/shared/style";
import { Link } from "@/shared/ui";
import Ionicons from "@expo/vector-icons/Ionicons";
import { LinearGradient } from "expo-linear-gradient";
import { View } from "react-native";

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
