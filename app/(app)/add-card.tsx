import { Container, ThemedView, Toolbar, Text } from "@/components/shared";
import { CardTypeList } from "@/components/widgets/card";

import { useNavigation } from "@react-navigation/native";

import type { CardType } from "@/core/config/card";

const AddCardScreen: React.FC = () => {
	const navigation = useNavigation();

	const onAddNewCard = (cardType: CardType) => {
		navigation.navigate<any>("card-creating", { cardType });
	};

	return (
		<ThemedView className="h-full w-full pt-4">
			<Container className="w-full h-full">
				<Toolbar className="justify-center items-center py-6">
					<Text className="text-center font-bold">Upgrade card status</Text>
					<Text className="text-center text-sm">
						Add a name to the card or gain access to the lounge, fast-line, and
						free travel insurance
					</Text>
				</Toolbar>

				<CardTypeList onSetCardType={onAddNewCard} />
			</Container>
		</ThemedView>
	);
};

export default AddCardScreen;
