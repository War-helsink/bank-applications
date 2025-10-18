import { useSession } from "@/entities/session";
import { CardDemo } from "@/features/card";
import { CardCurrency } from "@/features/currency";
import { PaymentSystem } from "@/features/payment";
import type { CardType } from "@/entities/card";
import { Currency } from "@/shared/config/currency";
import { PaymentNetwork } from "@/shared/config/payment";
import { Card } from "@/entities/card";
import { useLoader } from "@/shared/hooks/useLoader";
import { useThemeColor } from "@/shared/hooks/useThemeColor";
import {
	ButtonOpacity,
	Container,
	Text,
	ThemedSafeAreaView,
} from "@/shared/ui";
import { useRoute } from "@react-navigation/native";
import { NotificationFeedbackType, notificationAsync } from "expo-haptics";
import { useRouter } from "expo-router";
import { useState } from "react";
import { ScrollView, View } from "react-native";
import Toast from "react-native-toast-message";

const CardCreationScreen: React.FC = () => {
	const { session } = useSession();

	if (!session) {
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
