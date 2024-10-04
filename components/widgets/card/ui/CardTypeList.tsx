import { ScrollView, type StyleProp, type ViewStyle } from "react-native";
import { CardTypeItem } from "./CardTypeItem";

import { useTailwind } from "tailwind-rn";

import { CardType } from "@/core/config/card";

export interface CardTypeListProps {
	onSetCardType?: (cardType: CardType) => void;
	style?: StyleProp<ViewStyle>;
}

export const CardTypeList: React.FC<CardTypeListProps> = ({
	style,
	onSetCardType,
}) => {
	const tw = useTailwind();

	const cards = Object.entries(CardType);

	return (
		<ScrollView style={[tw("w-full flex"), style]}>
			{cards.map(([_, value]) => (
				<CardTypeItem onClick={onSetCardType} key={value} cardType={value} />
			))}
		</ScrollView>
	);
};
