import { useQuery } from "@tanstack/react-query";
import { getSearchUsers } from "@/entities/user";
import { BASE_QUERY_KEY } from "@/shared/config";
import { useDebounceValue } from "@/shared/hooks/useDebounce";

export function useSearchFriends(uid?: string, searchValue?: string) {
	const debouncedSearchValue = useDebounceValue(searchValue, 1000);

	const { data: searchUsers, refetch } = useQuery({
		queryKey: [BASE_QUERY_KEY.friends, uid, "search", debouncedSearchValue],
		queryFn: async () => {
			if (!debouncedSearchValue) {
				return [];
			}

			try {
				return getSearchUsers(debouncedSearchValue).then((searchUsers) => {
					return searchUsers.filter((searchUser) => searchUser.id !== uid);
				});
			} catch {
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
