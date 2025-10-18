import { keepPreviousData, QueryClient } from "@tanstack/react-query";

export const MINUTE = 1000 * 60;

export const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: MINUTE * 5,
			gcTime: MINUTE * 10,
			placeholderData: keepPreviousData,
		},
	},
});
