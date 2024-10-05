import { ScrollView, View } from "react-native";
import { Container, ThemedView, Text, ButtonOpacity} from "@/components/shared";
import { PaymentSystem } from "@/components/features/payment";
import { CardCurrency } from "@/components/features/card-currency";

import { useState } from "react";
import { useAuth } from "@/core/hooks/useAuth";
import { useRoute } from "@react-navigation/native";
import { useTailwind } from "tailwind-rn";
import { useThemeColor } from "@/core/hooks/useThemeColor";

import { PaymentNetwork } from "@/core/config/card";
import { Currency } from "@/core/config/card";

import type { CardType } from "@/core/config/card";
import { Card } from "@/core/entities/card";

const CardCreationScreen: React.FC = () => {
	const { user } = useAuth();

	if (user === null) {
		return null;
	}

	const route = useRoute();
	const { cardType } = route.params as { cardType: CardType };

	const tw = useTailwind();
	const borderColor = useThemeColor("toolbarBorder");

	const [activePaymentSystem, setActivePaymentSystem] = useState(
		PaymentNetwork.Mastercard,
	);

	const [activeCurrencySystem, setActiveCurrencySystem] = useState(
		Currency.UAH,
	);

	return (
		<ThemedView style={tw("h-full w-full flex-1 flex-col")}>
			<Container style={tw("w-full flex-grow")}>
				<ScrollView style={tw("w-full")}>
					<PaymentSystem
						activePaymentSystem={activePaymentSystem}
						setActivePaymentSystem={setActivePaymentSystem}
					/>
					<CardCurrency
						activeCurrencySystem={activeCurrencySystem}
						setActiveCurrencySystem={setActiveCurrencySystem}
					/>
				</ScrollView>
			</Container>
			<View
				style={[tw("w-full pt-4 pb-8 border-t border-solid"), { borderColor }]}
			>
				<Container style={tw("justify-center items-center")}>
					<ButtonOpacity style={tw("py-2")}>
						<Text>Add a card</Text>
					</ButtonOpacity>
				</Container>
			</View>
		</ThemedView>
	);
};

export default CardCreationScreen;
