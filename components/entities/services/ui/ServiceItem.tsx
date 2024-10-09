import { View } from "react-native";
import { Text } from "@/components/shared";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialIcons } from "@expo/vector-icons";
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
		<View className="mb-4">
			<LinearGradient
				colors={gradient}
				className="w-14 h-14 mx-4 rounded-xl overflow-hidden items-center justify-center"
			>
				<Percent percent={service.percent} />
				<MaterialIcons name={service.iconName} color={color} size={30} />
			</LinearGradient>
			<Text className="text-xs text-center mt-1.5">{service.title}</Text>
		</View>
	);
};
