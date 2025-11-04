import {
	AUIcon,
	CAIcon,
	CHIcon,
	CZIcon,
	DKIcon,
	EUIcon,
	GBIcon,
	HUIcon,
	ILIcon,
	JPIcon,
	NOIcon,
	PLIcon,
	SEIcon,
	UAIcon,
	USIcon,
} from "@/shared/ui";
import type { SvgProps } from "react-native-svg";

import type { CurrencyType } from "../types";

export const URL_API =
	"https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json";

export const defaultCurrencies: CurrencyType[] = ["USD", "EUR"];

export const CurrenciesIcon: Record<string, React.FC<SvgProps>> = {
	AUD: AUIcon,
	CAD: CAIcon,
	CHF: CHIcon,
	CZK: CZIcon,
	DKK: DKIcon,
	EUR: EUIcon,
	GBP: GBIcon,
	HUF: HUIcon,
	ILS: ILIcon,
	JPY: JPIcon,
	NOK: NOIcon,
	PLN: PLIcon,
	SEK: SEIcon,
	UAH: UAIcon,
	USD: USIcon,
};
