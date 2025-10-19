import {
	ExchangeRatesBlock,
	type ExchangeRatesBlockProps,
} from "./ExchangeRatesBlock";

import { useExchangeRates } from "../hooks/useExchangeRates";

import { defaultCurrencies } from "../config/exchange-rates";

export type ExchangeRatesProps = Omit<
	ExchangeRatesBlockProps,
	"isLoading" | "exchangeRates"
>;

export const ExchangeRates: React.FC<ExchangeRatesProps> = (props) => {
	const { isLoading, exchangeRates } = useExchangeRates();

	return (
		<ExchangeRatesBlock
			title="EXCHANGE RATE"
			isLoading={isLoading}
			exchangeRates={exchangeRates.filter((exchangeRate) =>
				defaultCurrencies.includes(exchangeRate.code),
			)}
			{...props}
		/>
	);
};
