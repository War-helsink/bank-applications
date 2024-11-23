import { TouchableOpacity, StyleSheet } from "react-native";
import { impactAsync, ImpactFeedbackStyle } from "expo-haptics";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialIcons } from "@expo/vector-icons";
import { Text } from "@/components/shared";

import { Percent } from "./Percent";
import { useRandomGradient } from "../hooks";

import { useThemeColor } from "@/core/hooks/useThemeColor";

import type { IServiceItem } from "../model";

export interface ServiceItemProps {
	service: IServiceItem;
}

export const ServiceItem: React.FC<ServiceItemProps> = ({ service }) => {
	const color = useThemeColor("white");
	const gradient = useRandomGradient();

	return (
		<TouchableOpacity
			className="mb-4"
			onPress={() => {
				impactAsync(ImpactFeedbackStyle.Soft);
			}}
		>
			<LinearGradient colors={gradient} style={style.linearGradient}>
				<Percent percent={service.percent} />
				<MaterialIcons name={service.iconName} color={color} size={30} />
			</LinearGradient>
			<Text className="text-xs text-center mt-1.5">{service.title}</Text>
		</TouchableOpacity>
	);
};

const style = StyleSheet.create({
	linearGradient: {
		width: 56,
		height: 56,
		padding: 8,
		overflow: "hidden",
		marginLeft: 16,
		marginRight: 16,
		borderRadius: 12,
		alignItems: "center",
		justifyContent: "center",
	},
});
