import { View, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Text } from "@/components/shared";

import {
	type CardType,
	CardTypeGradients,
	CardTypeDisplayNames,
	CARD_DEMO_NUMBER,
} from "@/core/config/card";
import type { Currency } from "@/core/config/currency";
import { type PaymentNetwork, PaymentNetworkImg } from "@/core/config/payment";
import {
	getPrefixPaymentNetwork,
	generateExpirationDate,
} from "@/core/entities/card";

import { GLOBAL_STYLES } from "@/core/style";

export interface CardDemoProps {
	cardType: CardType;
	currency: Currency;
	paymentSystem: PaymentNetwork;
}

export const CardDemo: React.FC<CardDemoProps> = ({
	cardType,
	currency,
	paymentSystem,
}) => {
	const SVG = PaymentNetworkImg[paymentSystem];

	return (
		<View className="justify-center items-center pt-8">
			<LinearGradient
				colors={CardTypeGradients[cardType].colors}
				start={CardTypeGradients[cardType].start}
				end={CardTypeGradients[cardType].end}
				style={[style.linearGradient, GLOBAL_STYLES.shadow]}
			>
				<View className="h-full w-full justify-between">
					<View className="w-full flex">
						<Text style={{ color: CardTypeGradients[cardType].color }}>
							{CardTypeDisplayNames[cardType]}
						</Text>
						<Text
							className="text-sm"
							style={{ color: CardTypeGradients[cardType].color }}
						>
							{`${getPrefixPaymentNetwork(paymentSystem)}${CARD_DEMO_NUMBER}`}
						</Text>
						<Text
							className="text-sm"
							style={{ color: CardTypeGradients[cardType].color }}
						>
							{generateExpirationDate()}
						</Text>
					</View>
					<View className="w-full flex-row justify-between items-center">
						<Text
							className="text-lg font-medium"
							style={{ color: CardTypeGradients[cardType].color }}
						>
							0 {currency}
						</Text>

						<SVG width={48} height={48} />
					</View>
				</View>
			</LinearGradient>
		</View>
	);
};

const style = StyleSheet.create({
	linearGradient: {
		width: 288,
		height: 160,
		paddingTop: 8,
		paddingBottom: 8,
		paddingLeft: 16,
		paddingRight: 16,
		borderRadius: 12,
	},
});