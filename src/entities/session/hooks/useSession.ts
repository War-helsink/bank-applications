import { BASE_QUERY_KEY } from "@/shared/config";
import { useSuspenseQuery } from "@tanstack/react-query";
import { getAuth } from "firebase/auth";
import { mapFirebaseSession } from "../lib";

export function useSession() {
	const { data: session, ...rest } = useSuspenseQuery({
		queryKey: [BASE_QUERY_KEY.session],
		queryFn: async () => {
			const auth = getAuth();
			return mapFirebaseSession(auth.currentUser);
		},
	});

	return {
		session,
		...rest,
	};
}
