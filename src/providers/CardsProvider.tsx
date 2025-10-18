import { useSession } from "@/entities/session";
import { Card } from "@/entities/card";
import type { Unsubscribe } from "firebase/firestore";
import { onSnapshot } from "firebase/firestore";
import { createContext, useEffect, useRef, useState } from "react";

export type ICardsContext = Card[];

export const CardsContext = createContext<ICardsContext>({} as ICardsContext);

export const CardsProvider: React.FC<React.PropsWithChildren> = ({
	children,
}) => {
	const { session } = useSession();
	const unsubscribe = useRef<Unsubscribe | null>(null);
	const [cards, setCards] = useState<Card[]>([]);

	useEffect(() => {
		if (!session) {
			if (unsubscribe.current !== null) {
				unsubscribe.current();
				unsubscribe.current = null;
			}
			setCards([]);
			return;
		}

		if (unsubscribe.current === null) {
			unsubscribe.current = onSnapshot(
				Card.getQueryCollectionRef("uid", "==", session.uid),
				(querySnapshot) => {
					const cards: Card[] = [];
					querySnapshot.forEach((doc) => {
						cards.push(doc.data() as Card);
					});

					setCards(cards);
				},
			);
		}
	}, [session]);

	return (
		<CardsContext.Provider value={cards}>{children}</CardsContext.Provider>
	);
};
