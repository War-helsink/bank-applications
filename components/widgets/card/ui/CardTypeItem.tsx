import { View, TouchableOpacity } from "react-native";
import { Text } from "@/components/shared";
import { LinearGradient } from "expo-linear-gradient";
import * as Haptics from "expo-haptics";

import { useThemeColor } from "@/core/hooks/useThemeColor";

import {
	type CardType,
	CardTypeDisplayNames,
	CardTypeDescriptions,
	CardTypeGradients,
} from "@/core/config/card";

export interface CardTypeItemProps {
	onClick?: (cardType: CardType) => void;
	cardType: CardType;
}

export const CardTypeItem: React.FC<CardTypeItemProps> = ({
	cardType,
	onClick,
}) => {
	const backgroundColor = useThemeColor("medium");
	const borderColor = useThemeColor("borderInput");

	return (
		<TouchableOpacity
			className="w-full flex-row p-2"
			onPress={() => {
				Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
				onClick?.(cardType);
			}}
		>
			<LinearGradient
				colors={CardTypeGradients[cardType].colors}
				start={CardTypeGradients[cardType].start}
				end={CardTypeGradients[cardType].end}
				className="w-24 h-16 rounded-xl p-2 flex justify-between"
			>
				<View className="flex-row">
					<View className="w-4 h-1 rounded-xl" style={{ backgroundColor }} />
					<View className="w-4 h-1 rounded-xl" style={{ backgroundColor }} />
				</View>

				<View className="w-8 h-1 rounded-xl" style={{ backgroundColor }} />
			</LinearGradient>

			<View
				className="mx-4 pb-2 flex-1 border-b border-solid"
				style={{ borderColor }}
			>
				<Text>{CardTypeDisplayNames[cardType]}</Text>
				<Text className="text-xs">{CardTypeDescriptions[cardType]}</Text>
			</View>
		</TouchableOpacity>
	);
};
