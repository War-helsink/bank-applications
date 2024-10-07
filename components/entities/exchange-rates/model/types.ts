export type ExchangeRatesApiResponse = ExchangeRates[];

export interface ExchangeRates {
	cc: CurrencyType;
	exchangedate: string;
	r030: number;
	rate: number;
	txt: string;
}

export interface ExchangeRatesSimplified {
	code: CurrencyType;
	rate: number;
}

export type CurrencyType =
	| "AUD"
	| "CAD"
	| "CNY"
	| "CZK"
	| "DKK"
	| "HKD"
	| "HUF"
	| "INR"
	| "IDR"
	| "ILS"
	| "JPY"
	| "KZT"
	| "KRW"
	| "MXN"
	| "MDL"
	| "NZD"
	| "NOK"
	| "RUB"
	| "SGD"
	| "ZAR"
	| "SEK"
	| "CHF"
	| "EGP"
	| "GBP"
	| "USD"
	| "BYN"
	| "AZN"
	| "RON"
	| "TRY"
	| "XDR"
	| "BGN"
	| "EUR"
	| "PLN"
	| "DZD"
	| "BDT"
	| "AMD"
	| "DOP"
	| "IRR"
	| "IQD"
	| "KGS"
	| "LBP"
	| "LYD"
	| "MYR"
	| "MAD"
	| "PKR"
	| "SAR"
	| "VND"
	| "THB"
	| "AED"
	| "TND"
	| "UZS"
	| "TWD"
	| "TMT"
	| "RSD"
	| "UAH";
