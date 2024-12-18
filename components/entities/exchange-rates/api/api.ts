import { URL_API } from "../config/exchange-rates";
import type {
	ExchangeRatesApiResponse,
	ExchangeRatesSimplified,
} from "../model/types";

export const getExchangeRates = async (): Promise<
	ExchangeRatesSimplified[]
> => {
	const response = await fetch(URL_API);
	if (!response.ok) {
		throw new Error("Failed to fetch exchange rates");
	}

	const exchangeRates: ExchangeRatesApiResponse = await response.json();

	const newExchangeRates: ExchangeRatesSimplified[] = exchangeRates.map(
		(exchangeRate) => ({
			code: exchangeRate.cc,
			rate: exchangeRate.rate,
		}),
	);

	return newExchangeRates;
};
