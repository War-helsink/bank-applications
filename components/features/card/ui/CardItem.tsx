import { ThemedView } from "@/components/shared";
import type { Card } from "@/core/entities/card";

export interface CardItemProps {
	width: number;
	height: number;
	card: Card;
}

export const CardItem: React.FC<CardItemProps> = ({ card }) => {
	return <ThemedView></ThemedView>;
};
