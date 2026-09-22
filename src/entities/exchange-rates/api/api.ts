import { URL_API } from "../config/exchange-rates";
import type { ExchangeRatesApiResponse } from "../types";

export const getExchangeRates = async (): Promise<ExchangeRatesApiResponse> => {
	const response = await fetch(URL_API);
	if (!response.ok) {
		throw new Error("Failed to fetch exchange rates");
	}

	return await response.json();
};
