import { useQuery } from "@tanstack/react-query";
import { BASE_QUERY_KEY } from "@/shared/config";
import { getFriends } from "../api";

export const useFriends = (uid?: string) => {
	const { data: friends, refetch } = useQuery({
		queryKey: [BASE_QUERY_KEY.friends, uid],
		queryFn: async () => {
			try {
				return await getFriends(uid ?? "");
			} catch {
				return null;
			}
		},
		enabled: !!uid,
	});

	return { friends, refetch };
};
