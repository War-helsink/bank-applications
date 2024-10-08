import { View } from "react-native";
import { Text, Link } from "@/components/shared";

import { useThemeColor } from "@/core/hooks/useThemeColor";
import { useExchangeRates } from "../hooks/useExchangeRates";

import { CurrenciesIcon } from "../config/exchange-rates";
import { defaultCurrencies } from "../config/exchange-rates";

export const ExchangeRatesBlock: React.FC = () => {
	const backgroundColor = useThemeColor("mainSurfaceSecondary");
	const { exchangeRates } = useExchangeRates();

	const filterExchangeRates = exchangeRates.filter((exchangeRate) =>
		defaultCurrencies.includes(exchangeRate.code),
	);

	return (
		<Link
			className="p-4 mt-4 rounded-2xl flex-row"
			style={{ backgroundColor }}
			href="/exchange-rates"
		>
			{filterExchangeRates.map((exchangeRate) => {
				const SVG = CurrenciesIcon[exchangeRate.code];

				return (
					<View key={exchangeRate.code} className="grow flex-row">
						<View className="justify-center items-center pr-4">
							<SVG width={24} height={18} />
						</View>
						<View>
							<Text className="text-xs">{exchangeRate.code}</Text>
							<Text className="text-xs font-bold">{`${(exchangeRate.rate - 0.2).toFixed(2)} / ${(exchangeRate.rate + 0.2).toFixed(2)}`}</Text>
						</View>
					</View>
				);
			})}
		</Link>
	);
};
