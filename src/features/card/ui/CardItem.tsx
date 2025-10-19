import {
	CardTypeDisplayNames,
	CardTypeGradients,
	formatCardNumber,
} from "@/entities/card";
import { PaymentNetworkImg } from "@/shared/config";

import type { Card } from "@/entities/card";
import { GLOBAL_STYLES } from "@/shared/style";
import { Text } from "@/shared/ui";
import { LinearGradient } from "expo-linear-gradient";
import type React from "react";
import { TouchableHighlight, View } from "react-native";
import { Fragment } from "react";

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
			<Fragment key={card.id}>
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
							{formatCardNumber(card.cardNumber)}
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
			</Fragment>
		</TouchableHighlight>
	);
};
