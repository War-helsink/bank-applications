import { ScrollView } from "react-native";
import { Container, ThemedView } from "@/components/shared";
import { PaymentSystem } from "@/components/features/payment";
import { CardCurrency } from "@/components/features/card-currency";

import { useState } from "react";
import { useAuth } from "@/core/hooks/useAuth";
import { useRoute } from "@react-navigation/native";
import { useTailwind } from "tailwind-rn";

import { PaymentNetwork } from "@/core/config/card";
import { Currency } from "@/core/config/card";

import type { CardType } from "@/core/config/card";
import { Card } from "@/core/entities/card";

const CardCreationScreen: React.FC = () => {
	const tw = useTailwind();
	const { user } = useAuth();

	const route = useRoute();
	const { cardType } = route.params as { cardType: CardType };

	if (user === null) {
		return null;
	}

	const [activePaymentSystem, setActivePaymentSystem] = useState(
		PaymentNetwork.Mastercard,
	);

	const [activeCurrencySystem, setActiveCurrencySystem] = useState(
		Currency.UAH,
	);

	return (
		<ThemedView style={tw("h-full w-full")}>
			<Container>
				<ScrollView style={tw("h-full w-full")}>
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
		</ThemedView>
	);
};

export default CardCreationScreen;
