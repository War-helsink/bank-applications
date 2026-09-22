import { useRef } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { BASE_QUERY_KEY } from "@/shared/config";
import { useSession } from "@/entities/session";
import type { FriendsData, FriendsUserData } from "../types";
import { addFriend, createFriends } from "../api";

export function useAddFriend() {
	const { session } = useSession();
	const queryClient = useQueryClient();
	const snapshotRef = useRef<FriendsData | null | undefined>(null);

	const mutation = useMutation({
		mutationFn: async (friend: FriendsUserData) => {
			if (!session) {
				return null;
			}

			const previousFriends = snapshotRef.current;

			if (!previousFriends) {
				return createFriends(session.uid, friend);
			}
			return addFriend(session.uid, previousFriends, friend);
		},
		onMutate: async (friend: FriendsUserData) => {
			if (!session) {
				return;
			}

			const queryKey = [BASE_QUERY_KEY.friends, session.uid];

			await queryClient.cancelQueries({ queryKey });

			const previousFriends = queryClient.getQueryData<FriendsData | null>(
				queryKey,
			);

			snapshotRef.current = previousFriends;

			queryClient.setQueryData<FriendsData | null>(queryKey, (old) => {
				if (!old) {
					return {
						id: session.uid,
						users: [friend],
					};
				}

				return {
					...old,
					users: [...old.users, friend],
				};
			});

			return { previousFriends };
		},
		onError: (_error, _friend, context) => {
			if (!session || !context) {
				return;
			}

			queryClient.setQueryData(
				[BASE_QUERY_KEY.friends, session.uid],
				context.previousFriends,
			);
		},
		onSettled: () => {
			if (!session) {
				return;
			}

			snapshotRef.current = null;

			queryClient.invalidateQueries({
				queryKey: [BASE_QUERY_KEY.friends, session.uid],
			});
		},
	});

	return {
		addFriend: mutation.mutate,
		getDisabled: (id: string) =>
			mutation.isPending && mutation.variables.uid === id,
	};
}
