import type { CardType } from "@/entities/card";
import { Container, Text, ThemedSafeAreaView, Toolbar } from "@/shared/ui";
import { CardTypeList } from "@/widgets/card";
import { useNavigation } from "@react-navigation/native";

const AddCardScreen: React.FC = () => {
	const navigation = useNavigation();

	const onAddNewCard = (cardType: CardType) => {
		navigation.navigate<any>("card-creating", { cardType });
	};

	return (
		<ThemedSafeAreaView className="h-full w-full pt-4" edges={["bottom"]}>
			<Container className="w-full h-full">
				<Toolbar className="justify-center items-center py-6 rounded-md">
					<Text className="text-center font-bold">Upgrade card status</Text>
					<Text className="text-center text-sm">
						Add a name to the card or gain access to the lounge, fast-line, and
						free travel insurance
					</Text>
				</Toolbar>

				<CardTypeList onSetCardType={onAddNewCard} />
			</Container>
		</ThemedSafeAreaView>
	);
};

export default AddCardScreen;
