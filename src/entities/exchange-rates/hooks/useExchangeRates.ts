import { useQuery } from "@tanstack/react-query";
import { getExchangeRates } from "../api/api";

import type { ExchangeRatesSimplified } from "../model/types";

export function useExchangeRates() {
	const {
		data: exchangeRates = [],
		isLoading,
		refetch,
	} = useQuery({
		queryKey: ["exchangeRates"],
		queryFn: getExchangeRates,
		select: (exchangeRates) =>
			exchangeRates.map(
				(exchangeRate) =>
					({
						text: exchangeRate.txt,
						code: exchangeRate.cc,
						rate: exchangeRate.rate,
					}) as ExchangeRatesSimplified,
			),
	});

	return { isLoading, exchangeRates, refetch };
}
