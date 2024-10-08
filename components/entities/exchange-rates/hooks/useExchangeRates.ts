import { useState, useEffect } from "react";

import type { ExchangeRatesSimplified } from "../model/types";
import { getExchangeRates } from "../api/api";

export function useExchangeRates() {
	const [isLoading, setIsLoading] = useState(false);
	const [exchangeRates, setExchangeRates] = useState<ExchangeRatesSimplified[]>(
		[],
	);

	useEffect(() => {
		getExchangeRates()
			.then((exchangeRates) => {
				setExchangeRates(exchangeRates);
				setIsLoading(true);
			})
			.catch(() => {
				setIsLoading(true);
			});
	}, []);

	return { isLoading, exchangeRates };
}
