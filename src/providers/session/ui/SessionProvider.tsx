import { mapFirebaseSession } from "@/entities/session";
import { BASE_QUERY_KEY } from "@/shared/config";
import { auth } from "@/shared/utils";
import { useQueryClient } from "@tanstack/react-query";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, Suspense } from "react";

export const SessionProvider: React.FC<React.PropsWithChildren> = ({
	children,
}) => {
	const queryClient = useQueryClient();

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, async (user) => {
			queryClient.setQueryData(
				[BASE_QUERY_KEY.session],
				mapFirebaseSession(user),
			);
		});
		return () => unsubscribe();
	}, [queryClient]);

	return <Suspense fallback={null}>{children}</Suspense>;
};
