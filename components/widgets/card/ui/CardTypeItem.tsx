import { View, TouchableOpacity } from "react-native";
import { Text } from "@/components/shared";
import { LinearGradient } from "expo-linear-gradient";

import { useTailwind } from "tailwind-rn";
import { useThemeColor } from "@/core/hooks/useThemeColor";

import {
	type CartType,
	CartTypeDisplayNames,
	CartTypeDescriptions,
	CartTypeGradients,
} from "@/core/config/card";

export interface CardTypeItemProps {
	onClick?: (cardType: CartType) => void;
	cardType: CartType;
}

export const CardTypeItem: React.FC<CardTypeItemProps> = ({
	cardType,
	onClick,
}) => {
	const tw = useTailwind();
	const backgroundColor = useThemeColor("medium");
	const borderColor = useThemeColor("borderInput");

	return (
		<TouchableOpacity
			style={tw("w-full flex-row p-2")}
			onPress={() => onClick?.(cardType)}
		>
			<LinearGradient
				colors={CartTypeGradients[cardType].colors}
				style={tw("w-24 h-16 rounded-xl p-2 flex justify-between")}
			>
				<View style={tw("flex-row")}>
					<View style={[tw("w-4 h-1 rounded-xl"), { backgroundColor }]} />
					<View style={[tw("w-4 h-1 rounded-xl ml-2"), { backgroundColor }]} />
				</View>

				<View style={[tw("w-8 h-1 rounded-xl"), { backgroundColor }]} />
			</LinearGradient>

			<View
				style={[tw("mx-4 pb-2 flex-1 border-b border-solid"), { borderColor }]}
			>
				<Text>{CartTypeDisplayNames[cardType]}</Text>
				<Text style={tw("text-xs")}>{CartTypeDescriptions[cardType]}</Text>
			</View>
		</TouchableOpacity>
	);
};
