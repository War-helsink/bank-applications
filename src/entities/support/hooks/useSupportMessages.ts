import { useQuery } from "@tanstack/react-query";
import { useSession } from "@/entities/session";
import { BASE_QUERY_KEY } from "@/shared/config/queryKey";
import type { SupportMessageType } from "../types";

export function useSupportMessages() {
	const { session } = useSession();

	const { data: messages } = useQuery<SupportMessageType[]>({
		queryKey: [BASE_QUERY_KEY.support, session?.uid],
		queryFn: () => {
			return [];
		},
		enabled: !!session?.uid,
		initialData: [],
	});

	return messages;
}
