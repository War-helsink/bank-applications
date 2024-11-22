import { View, TouchableHighlight } from "react-native";
import { Text } from "@/components/shared";
import { LinearGradient } from "expo-linear-gradient";

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
	const SVG = PaymentNetworkImg[card.paymentNetwork];

	return (
		<TouchableHighlight
			className="rounded-xl p-5 justify-center items-center overflow-hidden"
			style={[{ width: width, height: height }, GLOBAL_STYLES.shadow]}
		>
			<>
				<LinearGradient
					colors={CardTypeGradients[card.cardType].colors}
					start={CardTypeGradients[card.cardType].start}
					end={CardTypeGradients[card.cardType].end}
					
					style={{ width: width, height: height }}
				/>
				<View className="absolute h-full w-full justify-between">
					<View className="w-full flex">
						<Text style={{ color: CardTypeGradients[card.cardType].color }}>
							{CardTypeDisplayNames[card.cardType]}
						</Text>
						<Text
							className="text-sm"
							style={{ color: CardTypeGradients[card.cardType].color }}
						>
							{card.formatCardNumber}
						</Text>
						<Text
							className="text-sm"
							style={{ color: CardTypeGradients[card.cardType].color }}
						>
							{card.expirationDate}
						</Text>
					</View>
					<View className="w-full flex-row justify-between items-center">
						<Text
							className="text-lg font-medium"
							style={{ color: CardTypeGradients[card.cardType].color }}
						>
							{`${card.balance} ${card.currency}`}
						</Text>

						<SVG width={48} height={48} />
					</View>
				</View>
			</>
		</TouchableHighlight>
	);
};
