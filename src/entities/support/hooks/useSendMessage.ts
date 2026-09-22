import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSession } from "@/entities/session";
import { createSupportMessage } from "../api";
import { generateSupportMessage } from "../utils";
import { BASE_QUERY_KEY } from "@/shared/config/queryKey";
import type { SupportMessageType } from "../types";

export function useSendMessage() {
	const queryClient = useQueryClient();
	const { session } = useSession();

	return useMutation({
		mutationFn: async (text: string) => {
			if (!session) {
				return;
			}
			const message = generateSupportMessage(session.uid, text);
			return createSupportMessage(message);
		},
		onMutate: async (text: string) => {
			if (!session?.uid) return;

			const queryKey = [BASE_QUERY_KEY.support, session.uid];

			await queryClient.cancelQueries({ queryKey });

			const previousMessages =
				queryClient.getQueryData<SupportMessageType[]>(queryKey);

			const optimisticMessage: SupportMessageType = {
				...generateSupportMessage(session.uid, text),
				id: `temp-${Date.now()}`,
			};

			queryClient.setQueryData<SupportMessageType[]>(queryKey, (old = []) => [
				optimisticMessage,
				...old,
			]);

			return { previousMessages, queryKey };
		},
		onError: (_err, _variables, context) => {
			if (context?.previousMessages) {
				queryClient.setQueryData(context.queryKey, context.previousMessages);
			}
		},
	});
}
