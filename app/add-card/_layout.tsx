import { Container, ThemedView, Toolbar, Text } from "@/components/shared";
import { CardTypeList } from "@/components/widgets/card";

import { useAuth } from "@/core/hooks/useAuth";
import { useTailwind } from "tailwind-rn";

import type { CartType } from "@/core/config/card";
import { Card } from "@/core/entities/card";

const AddCardLayout: React.FC = () => {
	const tw = useTailwind();
	const { user } = useAuth();

	if (user === null) {
		return;
	}

	const onAddNewCart = (cardType: CartType) => {
		const card = new Card({uid: user.uid, cartType: cardType});
		console.log(card.toData());
	};

	return (
		<ThemedView style={tw("h-full w-full pt-4")}>
			<Container style={tw("w-full h-full")}>
				<Toolbar style={tw("justify-center items-center py-6")}>
					<Text>Information for the user</Text>
				</Toolbar>

				<CardTypeList
					onSetCardType={onAddNewCart}
					style={tw("pt-4")}
				/>
			</Container>
		</ThemedView>
	);
};

export default AddCardLayout;
