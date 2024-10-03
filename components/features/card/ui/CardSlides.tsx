import { CreateCardItem } from "./CreateCardItem";
import { CardItem } from "./CardItem";
import { Carousel } from "@/components/shared";
import { Dimensions } from "react-native";

import { useAuth } from "@/core/hooks/useAuth";
import { useCards } from "@/core/hooks/useCards";

const { width: viewportWidth } = Dimensions.get("window");

const cardWidth = Math.round(viewportWidth - 32);
const cardHeight = Math.round(cardWidth * 0.6);

export const CardSlides: React.FC = () => {
	const { user } = useAuth();

	if (user === null) {
		return;
	}

	const cards = useCards(user.uid);
	const data = [...cards, { createCard: true }];

	return (
		<Carousel
			data={data}
			width={viewportWidth}
			height={cardHeight}
			renderItem={({ item }) => {
				if (item.createCard === true) {
					return <CreateCardItem width={cardWidth} height={cardHeight} />;
				}
				return (
					<CardItem width={cardWidth} height={cardHeight} card={item} />
				);
			}}
		/>
	);
};
