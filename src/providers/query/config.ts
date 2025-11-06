import {
	QueryClient,
	type OmitKeyof,
	keepPreviousData,
} from "@tanstack/react-query";
import { stringify, parse } from "superjson";
import type { PersistQueryClientOptions } from "@tanstack/react-query-persist-client";
import { createAsyncStoragePersister } from "@tanstack/query-async-storage-persister";
import { LocalStore } from "@/shared/services";

const persister = createAsyncStoragePersister({
	storage: LocalStore,
	serialize: (data) => stringify(data),
	deserialize: (data) => parse(data),
});

const MINUTE = 1000 * 60;

export const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: MINUTE * 5,
			gcTime: MINUTE * 30,
			placeholderData: keepPreviousData,
			retry: 0,
		},
	},
});

export const persistQueryClientOptions: OmitKeyof<
	PersistQueryClientOptions,
	"queryClient"
> = {
	persister,
	maxAge: MINUTE * 60 * 24,
};
