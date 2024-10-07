import { useState, useEffect } from "react";

import type { ExchangeRatesSimplified } from "../model/types";
import { getExchangeRates } from "../api/api";

import { defaultCurrencies } from "../config/exchange-rates";

export function useExchangeRates() {
	const [isLoading, setIsLoading] = useState(false);
	const [exchangeRates, setExchangeRates] = useState<ExchangeRatesSimplified[]>(
		[],
	);

	useEffect(() => {
		getExchangeRates()
			.then((exchangeRates) => {
				setExchangeRates(
					exchangeRates.filter((exchangeRate) =>
						defaultCurrencies.includes(exchangeRate.code),
					),
				);
				setIsLoading(true);
			})
			.catch(() => {
				setIsLoading(true);
			});
	}, []);

	return { isLoading, exchangeRates };
}
