import { View, TouchableHighlight } from "react-native";
import { Text } from "@/components/shared";
import { LinearGradient } from "expo-linear-gradient";
import * as Haptics from "expo-haptics";

import { useTailwind } from "tailwind-rn";

import { PaymentNetworkImg } from "@/core/config/payment";
import { CardTypeGradients, CardTypeDisplayNames } from "@/core/config/card";
import { GLOBAL_STYLES } from "@/core/style";
import type { Card } from "@/core/entities/card";

export interface CardItemProps {
	width: number;
	height: number;
	card: Card;
}

export const CardItem: React.FC<CardItemProps> = ({ width, height, card }) => {
	const tw = useTailwind();
	const SVG = PaymentNetworkImg[card.paymentNetwork];

	return (
		<TouchableHighlight
			onPress={() => {
				Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Soft);
			}}
		>
			<LinearGradient
				colors={CardTypeGradients[card.cardType].colors}
				start={CardTypeGradients[card.cardType].start}
				end={CardTypeGradients[card.cardType].end}
				style={[
					{ width: width, height: height },
					tw("rounded-xl p-5 justify-center items-center"),
					GLOBAL_STYLES.shadow,
				]}
			>
				<View style={tw("h-full w-full justify-between")}>
					<View style={tw("w-full flex")}>
						<Text style={{ color: CardTypeGradients[card.cardType].color }}>
							{CardTypeDisplayNames[card.cardType]}
						</Text>
						<Text
							style={[
								tw("text-sm"),
								{ color: CardTypeGradients[card.cardType].color },
							]}
						>
							{`${card.formatCardNumber} ${card.expirationDate}`}
						</Text>
					</View>
					<View style={tw("w-full flex-row justify-between items-center")}>
						<Text
							style={[
								tw("text-lg font-medium"),
								{ color: CardTypeGradients[card.cardType].color },
							]}
						>
							{`${card.balance} ${card.currency}`}
						</Text>

						<SVG width={48} height={48} />
					</View>
				</View>
			</LinearGradient>
		</TouchableHighlight>
	);
};
