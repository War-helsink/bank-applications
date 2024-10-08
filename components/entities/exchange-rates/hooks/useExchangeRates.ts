import { useState, useEffect, useCallback } from "react";

import type { ExchangeRatesSimplified } from "../model/types";
import { getExchangeRates } from "../api/api";

export function useExchangeRates() {
	const [isLoading, setIsLoading] = useState(true);
	const [exchangeRates, setExchangeRates] = useState<ExchangeRatesSimplified[]>(
		[],
	);

	const trigger = useCallback(async () => {
		await getExchangeRates()
			.then((exchangeRates) => {
				setExchangeRates(exchangeRates);
				setIsLoading(false);
			})
			.catch(() => {
				setIsLoading(false);
			});
	}, []);

	useEffect(() => {
		trigger();
	}, [trigger]);

	return { isLoading, exchangeRates, trigger };
}
