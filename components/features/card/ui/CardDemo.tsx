import { View, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Text } from "@/components/shared";

import { useTailwind } from "tailwind-rn";

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
	const tw = useTailwind();
	const SVG = PaymentNetworkImg[paymentSystem];

	return (
		<View style={tw("justify-center items-center pt-8")}>
			<LinearGradient
				colors={CardTypeGradients[cardType].colors}
				start={CardTypeGradients[cardType].start}
				end={CardTypeGradients[cardType].end}
				style={[tw("w-72 h-40 px-4 py-2 rounded-xl"), styles.shadow]}
			>
				<View style={tw("h-full w-full justify-between")}>
					<View style={tw("w-full flex")}>
						<Text style={{ color: CardTypeGradients[cardType].color }}>
							{CardTypeDisplayNames[cardType]}
						</Text>
						<Text
							style={[
								tw("text-sm"),
								{ color: CardTypeGradients[cardType].color },
							]}
						>
							{`${getPrefixPaymentNetwork(paymentSystem)}${CARD_DEMO_NUMBER} ${generateExpirationDate()}`}
						</Text>
					</View>
					<View style={tw("w-full flex-row justify-between items-center")}>
						<Text
							style={[
								tw("text-lg font-medium"),
								{ color: CardTypeGradients[cardType].color },
							]}
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

const styles = StyleSheet.create({
	shadow: {
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 4 },
		shadowOpacity: 0.3,
		shadowRadius: 5,
		elevation: 5,
	},
});
