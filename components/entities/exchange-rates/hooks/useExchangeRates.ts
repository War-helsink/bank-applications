import { useState, useEffect } from "react";

import type { ExchangeRatesSimplified } from "../model/types";
import { getExchangeRates } from "../api/api";

export function useExchangeRates() {
	const [isLoading, setIsLoading] = useState(true);
	const [exchangeRates, setExchangeRates] = useState<ExchangeRatesSimplified[]>(
		[],
	);

	useEffect(() => {
		getExchangeRates()
			.then((exchangeRates) => {
				setExchangeRates(exchangeRates);
				setIsLoading(false);
			})
			.catch(() => {
				setIsLoading(false);
			});
	}, []);

	return { isLoading, exchangeRates };
}
