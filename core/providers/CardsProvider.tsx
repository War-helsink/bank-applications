import { createContext, useState, useEffect, useRef } from "react";
import { useAuth } from "@/core/hooks/useAuth";

import { onSnapshot } from "firebase/firestore";
import type { Unsubscribe } from "firebase/firestore";

import { Card } from "@/core/entities/card";

export type ICardsContext = Card[];

export const CardsContext = createContext<ICardsContext>({} as ICardsContext);

export const CardsProvider: React.FC<React.PropsWithChildren> = ({
	children,
}) => {
	const unsubscribe = useRef<Unsubscribe | null>(null);
	const { user } = useAuth();
	const [cards, setCards] = useState<Card[]>([]);

	useEffect(() => {
		if (user === null) {
			if (unsubscribe.current !== null) {
				unsubscribe.current();
				unsubscribe.current = null;
			}
			setCards([]);
			return;
		}

		if (unsubscribe.current === null) {
			unsubscribe.current = onSnapshot(
				Card.getQueryCollectionRef("uid", "==", user.uid),
				(querySnapshot) => {
					const cards: Card[] = [];
					querySnapshot.forEach((doc) => {
						cards.push(doc.data());
					});

					setCards(cards);
				},
			);
		}
	}, [user]);

	return (
		<CardsContext.Provider value={cards}>{children}</CardsContext.Provider>
	);
};
