import { useQuery } from "@tanstack/react-query";
import { getExchangeRates } from "../api/api";
import { MINUTE } from "../config/exchange-rates"

export function useExchangeRates() {
	const {
		data: exchangeRates = [],
		isLoading,
		refetch,
	} = useQuery({
		queryKey: ["exchangeRates"],
		queryFn: getExchangeRates,
		staleTime: MINUTE,
    	gcTime: MINUTE * 10,
	});

	return { isLoading, exchangeRates, refetch };
}
