import { Card } from "@/core/entities/card";
import { useEffect, useState } from "react";

export const useCards = (uid: string) => {
	const [cards, setCards] = useState<Card[]>([]);

	useEffect(() => {
		Card.getAllQuery("uid", "==", uid).then((cards) =>
			setCards(cards as Card[]),
		);
	}, [uid]);

	return cards;
};
