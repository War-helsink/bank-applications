import { CreateCardItem } from "./CreateCardItem";
import { CardItem } from "./CardItem";
import { Carousel } from "@/components/shared";
import { Dimensions, View } from "react-native";

import { useCards } from "@/core/hooks/useCards";

const { width: viewportWidth } = Dimensions.get("window");

const cardWidth = Math.round(viewportWidth - 32);
const cardHeight = Math.round(cardWidth * 0.6);

export const CardSlides: React.FC = () => {
	const cards = useCards();
	const data = [...cards, { createCard: true }];

	return (
		<Carousel
			data={data}
			width={viewportWidth}
			height={cardHeight}
			renderItem={({ item }) => {
				if (item.createCard === true) {
					return (
						<View className="w-full h-full justify-center items-center">
							<CreateCardItem width={cardWidth} height={cardHeight} />
						</View>
					);
				}
				return (
					<View className="w-full h-full justify-center items-center">
						<CardItem width={cardWidth} height={cardHeight} card={item} />
					</View>
				);
			}}
		/>
	);
};
