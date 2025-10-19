import { mapFirebaseSession } from "@/entities/session";
import { BASE_QUERY_KEY } from "@/shared/config";
import { auth } from "@/shared/utils/firebase";
import { useQueryClient } from "@tanstack/react-query";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

export const SessionProvider: React.FC<React.PropsWithChildren> = ({
	children,
}) => {
	const [isInitialized, setIsInitialized] = useState(false);
	const queryClient = useQueryClient();

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, async (user) => {
			queryClient.setQueryData(
				[BASE_QUERY_KEY.session],
				mapFirebaseSession(user),
			);
			setIsInitialized(true);
		});
		return () => unsubscribe();
	}, [queryClient]);

	return isInitialized ? children : null;
};
