import { useMutation, useQueryClient } from "@tanstack/react-query";
import { BASE_QUERY_KEY } from "@/shared/config";
import { createUser } from "../api";
import type { CreateUserPayload } from "../types";

export function useCreateUser() {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: async ({ uid, email, password }: CreateUserPayload) => {
			return await createUser({ uid, email, password });
		},
		onSettled: () => {
			queryClient.invalidateQueries({
				queryKey: [BASE_QUERY_KEY.users],
			});
		},
	});
}
