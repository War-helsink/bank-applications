import { useLayoutEffect } from "react";
import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";
import { persistQueryClientOptions, queryClient } from "../config";
import { setupOnlineManager } from "../utils/onlineManager";

export const QueryProvider: React.FC<React.PropsWithChildren> = ({
	children,
}) => {
	useLayoutEffect(() => {
		setupOnlineManager();
	}, []);

	return (
		<PersistQueryClientProvider
			client={queryClient}
			persistOptions={persistQueryClientOptions}
			onSuccess={() => {
				queryClient.resumePausedMutations().then(() => {
					queryClient.invalidateQueries();
				});
			}}
		>
			{children}
		</PersistQueryClientProvider>
	);
};
