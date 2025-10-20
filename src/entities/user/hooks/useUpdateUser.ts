import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { UserType } from "../types";
import { BASE_QUERY_KEY } from "@/shared/config";
import { updateUser } from "../api";
import { auth } from "@/shared/utils";

export function useUpdateUser() {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: async (user: Partial<UserType>) => {
			const uid = auth.currentUser?.uid;
			if (!uid) {
				return;
			}
			return await updateUser(uid, user);
		},
		onSettled: () => {
			queryClient.invalidateQueries({
				queryKey: [BASE_QUERY_KEY.users],
			});
		},
	});
}
