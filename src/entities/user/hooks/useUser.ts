import { useSession } from "@/entities/session";
import { BASE_QUERY_KEY } from "@/shared/config";
import { useQuery } from "@tanstack/react-query";
import { getUser } from "../api";

export function useUser() {
	const { session } = useSession();

	const { data: user, ...rest } = useQuery({
		queryKey: [BASE_QUERY_KEY.users, session?.uid],
		queryFn: async () => {
			if (!session) {
				return null;
			}
			return await getUser(session.uid);
		},
	});

	return {
		user,
		...rest,
	};
}
