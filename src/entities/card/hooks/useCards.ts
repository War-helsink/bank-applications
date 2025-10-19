import { useSession } from "@/entities/session";
import { BASE_QUERY_KEY } from "@/shared/config";
import { useQuery } from "@tanstack/react-query";
import { getUserCards } from "../api";

export function useCards() {
	const { session } = useSession();

	const { data: cards, ...rest } = useQuery({
		queryKey: [BASE_QUERY_KEY.cards, session?.uid],
		queryFn: async () => {
			if (!session) {
				return null;
			}
			return await getUserCards(session.uid);
		},
		enabled: !!session,
	});

	return {
		cards,
		...rest,
	};
}
