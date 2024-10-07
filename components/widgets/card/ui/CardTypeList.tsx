import { ScrollView, type StyleProp, type ViewStyle } from "react-native";
import { CardTypeItem } from "./CardTypeItem";

import { CardType } from "@/core/config/card";

export interface CardTypeListProps {
	onSetCardType?: (cardType: CardType) => void;
}

export const CardTypeList: React.FC<CardTypeListProps> = ({
	onSetCardType,
}) => {
	const cards = Object.entries(CardType);

	return (
		<ScrollView className="w-full flex pt-4">
			{cards.map(([_, value]) => (
				<CardTypeItem onClick={onSetCardType} key={value} cardType={value} />
			))}
		</ScrollView>
	);
};
