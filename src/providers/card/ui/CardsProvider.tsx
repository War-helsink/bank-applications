import { useSession } from "@/entities/session";
import { subscribeToUserCards } from "@/entities/card";
import { useEffect } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { BASE_QUERY_KEY } from "@/shared/config";

export const CardsProvider: React.FC<React.PropsWithChildren> = ({
	children,
}) => {
	const { session } = useSession();
	const queryClient = useQueryClient();

	useEffect(() => {
		if (!session) {
			return;
		}

		const unsubscribe = subscribeToUserCards(session.uid, (cards) => {
			queryClient.setQueryData([BASE_QUERY_KEY.cards, session.uid], cards);
		});

		return () => unsubscribe();
	}, [session, queryClient]);

	return children;
};
