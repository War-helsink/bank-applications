import { getSearchUsers } from "@/entities/user";
import { Friends } from "../model/friends";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useDebounceValue } from "@/shared/hooks/useDebounce";

export function useSearchFriends(uid?: string, searchValue?: string) {
	const debouncedSearchValue = useDebounceValue(searchValue, 1000);

	const { data: searchUsers, refetch } = useQuery({
		queryKey: ["friends", "search", debouncedSearchValue, uid],
		queryFn: async () => {
			if (!debouncedSearchValue) {
				return [];
			}

			try {
				return getSearchUsers(debouncedSearchValue).then((searchUsers) => {
					return searchUsers.filter((searchUser) => searchUser.id !== uid);
				});
			} catch (err) {
				return [];
			}
		},
		enabled: !!debouncedSearchValue && !!uid,
	});

	if (!searchUsers) {
		return { searchUsers: [], refetch };
	}

	return { searchUsers, refetch };
}

export const useGetFriends = (uid?: string) => {
	const { data: friends, refetch } = useQuery({
		queryKey: ["friends", uid],
		queryFn: async () => {
			try {
				return await Friends.get<Friends>(uid as string);
			} catch (err) {
				const data = new Friends({
					id: uid,
				});

				return await data.create();
			}
		},
		enabled: !!uid,
	});

	return { friends, refetch };
};

export const useRefetchFriends = (uid?: string) => {
	const queryClient = useQueryClient();

	return () => queryClient.invalidateQueries({ queryKey: ["friends", uid] });
};
