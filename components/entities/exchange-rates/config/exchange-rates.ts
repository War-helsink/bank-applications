import type { CurrencyType } from "../model/types";
import type { SvgProps } from "react-native-svg";

import AU from "../../../../assets/icons/flag/AU.svg";
import CA from "../../../../assets/icons/flag/CA.svg";
import CH from "../../../../assets/icons/flag/CH.svg";
import CZ from "../../../../assets/icons/flag/CZ.svg";
import DK from "../../../../assets/icons/flag/DK.svg";
import EU from "../../../../assets/icons/flag/EU.svg";
import GB from "../../../../assets/icons/flag/GB.svg";
import HU from "../../../../assets/icons/flag/HU.svg";
import IL from "../../../../assets/icons/flag/IL.svg";
import JP from "../../../../assets/icons/flag/IL.svg";
import NO from "../../../../assets/icons/flag/NO.svg";
import PL from "../../../../assets/icons/flag/PL.svg";
import SE from "../../../../assets/icons/flag/SE.svg";
import UA from "../../../../assets/icons/flag/UA.svg";
import US from "../../../../assets/icons/flag/US.svg";

export const MINUTE = 1000 * 60;
export const URL_API =
	"https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json";

export const defaultCurrencies: CurrencyType[] = ["USD", "EUR"];

export const CurrenciesIcon: Record<string, React.FC<SvgProps>> = {
	AUD: AU,
	CAD: CA,
	CHF: CH,
	CZK: CZ,
	DKK: DK,
	EUR: EU,
	GBP: GB,
	HUF: HU,
	ILS: IL,
	JPY: JP,
	NOK: NO,
	PLN: PL,
	SEK: SE,
	UAH: UA,
	USD: US,
};
