import Toast from "react-native-toast-message";
import { ScrollView, View } from "react-native";
import {
	Container,
	ThemedView,
	Text,
	ButtonOpacity,
} from "@/components/shared";
import { PaymentSystem } from "@/components/features/payment";
import { CardCurrency } from "@/components/features/currency";
import { CardDemo } from "@/components/features/card";
import { notificationAsync, NotificationFeedbackType } from "expo-haptics";

import { useState } from "react";
import { useAuth } from "@/core/hooks/useAuth";
import { useRoute } from "@react-navigation/native";
import { useRouter } from "expo-router";
import { useLoader } from "@/core/hooks/useLoader";
import { useThemeColor } from "@/core/hooks/useThemeColor";

import { PaymentNetwork } from "@/core/config/payment";
import { Currency } from "@/core/config/currency";

import type { CardType } from "@/core/config/card";
import { Card } from "@/core/entities/card";

const CardCreationScreen: React.FC = () => {
	const { user } = useAuth();

	if (user === null) {
		return null;
	}

	const route = useRoute();
	const router = useRouter();
	const { showLoader, hideLoader } = useLoader();
	const { cardType } = route.params as { cardType: CardType };

	const borderColor = useThemeColor("toolbarBorder");

	const [activePaymentSystem, setActivePaymentSystem] = useState(
		PaymentNetwork.Mastercard,
	);

	const [activeCurrency, setActiveCurrency] = useState(Currency.UAH);

	const creatingCard = async () => {
		showLoader();
		try {
			const card = new Card({
				uid: user.uid,
				currency: activeCurrency,
				paymentNetwork: activePaymentSystem,
				cardType: cardType,
			});

			await card.create();

			hideLoader();

			notificationAsync(NotificationFeedbackType.Success);

			Toast.show({
				type: "success",
				text1: "The map has been successfully created.",
			});

			router.replace("/");
		} catch (_) {
			notificationAsync(NotificationFeedbackType.Error);
			Toast.show({
				type: "error",
				text1: "Error creating map",
			});
			hideLoader();
		}
	};

	return (
		<ThemedView className="h-full w-full flex-1 flex-col">
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
				className="w-full pt-4 pb-8 border-t border-solid"
				style={{ borderColor }}
			>
				<Container className="justify-center items-center">
					<ButtonOpacity className="py-2" onPress={creatingCard}>
						<Text>Add a card</Text>
					</ButtonOpacity>
				</Container>
			</View>
		</ThemedView>
	);
};

export default CardCreationScreen;
