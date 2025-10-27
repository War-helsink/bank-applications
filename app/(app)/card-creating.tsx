import { useSession } from "@/entities/session";
import { CardDemo } from "@/features/card";
import { CardCurrency } from "@/features/currency";
import { PaymentSystem } from "@/features/payment";
import { useCreateCard, type CardType } from "@/entities/card";
import { Currency } from "@/shared/config/currency";
import { PaymentNetwork } from "@/shared/config/payment";
import { useLoader } from "@/shared/hooks/useLoader";
import { useThemeColor } from "@/shared/hooks/useThemeColor";
import {
	ButtonOpacity,
	Container,
	Text,
	ThemedSafeAreaView,
} from "@/shared/ui";
import { useRoute } from "@react-navigation/native";
import { useRouter } from "expo-router";
import { useState } from "react";
import { ScrollView, View } from "react-native";

const CardCreationScreen: React.FC = () => {
	const { session } = useSession();

	const route = useRoute();
	const router = useRouter();
	const { mutate: createCard } = useCreateCard();
	const { showLoader, hideLoader } = useLoader();
	const { cardType } = route.params as { cardType: CardType };

	const borderColor = useThemeColor("toolbarBorder");

	const [activePaymentSystem, setActivePaymentSystem] = useState(
		PaymentNetwork.Mastercard,
	);

	const [activeCurrency, setActiveCurrency] = useState(Currency.UAH);

	if (!session) {
		return null;
	}

	const creatingCard = () => {
		showLoader();
		createCard({
			uid: session.uid,
			cardType,
			paymentNetwork: activePaymentSystem,
			currency: activeCurrency,
		});

		hideLoader();
		router.dismissTo("/(tabs)");
	};

	return (
		<ThemedSafeAreaView
			className="h-full w-full flex-1 flex-col"
			edges={["bottom"]}
		>
			<Container className="w-full flex-grow">
				<ScrollView className="w-full">
					<PaymentSystem
						activePaymentSystem={activePaymentSystem}
						setActivePaymentSystem={setActivePaymentSystem}
					/>
					<CardCurrency
						activeCurrency={activeCurrency}
						setActiveCurrency={setActiveCurrency}
					/>
					<CardDemo
						cardType={cardType}
						currency={activeCurrency}
						paymentSystem={activePaymentSystem}
					/>
				</ScrollView>
			</Container>
			<View
				className="w-full pt-4 border-t border-solid"
				style={{ borderColor }}
			>
				<Container className="justify-center items-center">
					<ButtonOpacity className="py-2" onPress={creatingCard}>
						<Text style={{ color: "#fff" }}>Add a card</Text>
					</ButtonOpacity>
				</Container>
			</View>
		</ThemedSafeAreaView>
	);
};

export default CardCreationScreen;
