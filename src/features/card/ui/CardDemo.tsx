import {
	type Currency,
	type PaymentNetwork,
	PaymentNetworkImg,
} from "@/shared/config";
import {
	CARD_DEMO_NUMBER,
	type CardType,
	CardTypeDisplayNames,
	CardTypeGradients,
	generateExpirationDate,
	getPrefixPaymentNetwork,
} from "@/entities/card";
import { GLOBAL_STYLES } from "@/shared/style";
import { Text } from "@/shared/ui";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, View } from "react-native";

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
