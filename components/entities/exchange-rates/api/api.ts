import { URL_API } from "../config/exchange-rates";
import type {
	ExchangeRatesApiResponse,
	ExchangeRatesSimplified,
} from "../model/types";

export const getExchangeRates = async (): Promise<
	ExchangeRatesSimplified[]
> => {
	try {
		const response = await fetch(URL_API);
		if (!response.ok) {
			throw new Error("Failed to fetch exchange rates");
		}

		const exchangeRates: ExchangeRatesApiResponse = await response.json();

		console.log("exchangeRates: ", exchangeRates);

		const newExchangeRates: ExchangeRatesSimplified[] = exchangeRates.map(
			(exchangeRate) => ({
				code: exchangeRate.cc,
				rate: exchangeRate.rate,
			}),
		);

		return newExchangeRates;
	} catch (error) {
		console.error("Error fetching exchange rates:", error);
		throw error;
	}
};
