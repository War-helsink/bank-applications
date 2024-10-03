import { Container, ThemedView, Toolbar, Text } from "@/components/shared";

import { useAuth } from "@/core/hooks/useAuth";
import { useRoute } from "@react-navigation/native";
import { useTailwind } from "tailwind-rn";

import { Card } from "@/core/entities/card";

const CardCreationScreen: React.FC = () => {
	const tw = useTailwind();
	const { user } = useAuth();

	const route = useRoute();
	const { cardType } = route.params as { cardType: string };

	if (user === null) {
		return null;
	}

	console.log("cardType", cardType);

	return (
		<ThemedView style={tw("h-full w-full pt-4")}>
			<Container>
				<Text>Создание карты типа: {cardType}</Text>
			</Container>
		</ThemedView>
	);
};

export default CardCreationScreen;
