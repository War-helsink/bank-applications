import { Container, ThemedView, Toolbar, Text } from "@/components/shared";
import { CardTypeList } from "@/components/widgets/card";

import { useTailwind } from "tailwind-rn";
import { useNavigation } from "@react-navigation/native";

import type { CardType } from "@/core/config/card";

const AddCardLayout: React.FC = () => {
	const tw = useTailwind();
	const navigation = useNavigation();

	const onAddNewCart = (cardType: CardType) => {
		navigation.navigate<any>("card-creating", { cardType });
	};

	return (
		<ThemedView style={tw("h-full w-full pt-4")}>
			<Container style={tw("w-full h-full")}>
				<Toolbar style={tw("justify-center items-center py-6")}>
					<Text style={tw("text-center font-bold")}>Upgrade card status</Text>
					<Text style={tw("text-center text-sm")}>
						Add a name to the card or gain access to the lounge, fast-line, and
						free travel insurance
					</Text>
				</Toolbar>

				<CardTypeList onSetCardType={onAddNewCart} style={tw("pt-4")} />
			</Container>
		</ThemedView>
	);
};

export default AddCardLayout;
