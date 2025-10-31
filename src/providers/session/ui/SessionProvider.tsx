import { mapFirebaseSession } from "@/entities/session";
import { BASE_QUERY_KEY } from "@/shared/config";
import { auth } from "@/shared/utils";
import { useQueryClient } from "@tanstack/react-query";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, Suspense, useState } from "react";

export const SessionProvider: React.FC<React.PropsWithChildren> = ({
	children,
}) => {
	const queryClient = useQueryClient();
	const [ready, setReady] = useState(false);

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, async (user) => {
			queryClient.setQueryData(
				[BASE_QUERY_KEY.session],
				mapFirebaseSession(user),
			);
			setReady(true);
		});
		return () => unsubscribe();
	}, [queryClient]);

	if (!ready) {
		return null;
	}

	return <Suspense fallback={null}>{children}</Suspense>;
};
