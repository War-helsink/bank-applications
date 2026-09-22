import { useEffect } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { subscribeToSupportMessages } from "../api";
import { useSession } from "@/entities/session";
import { BASE_QUERY_KEY } from "@/shared/config/queryKey";
import type { SupportMessageType } from "../types";

export function useSupport() {
	const queryClient = useQueryClient();
	const { session } = useSession();

	useEffect(() => {
		if (!session) {
			queryClient.invalidateQueries({ queryKey: [BASE_QUERY_KEY.support] });
			return;
		}

		const unsubscribe = subscribeToSupportMessages(session.uid, (messages) => {
			queryClient.setQueryData<SupportMessageType[]>(
				[BASE_QUERY_KEY.support, session.uid],
				messages,
			);
		});

		return () => {
			unsubscribe();
		};
	}, [session, queryClient]);
}
