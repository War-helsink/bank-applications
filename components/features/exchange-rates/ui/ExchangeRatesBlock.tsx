import { View } from "react-native";
import { Text, Link, SkeletonLoader } from "@/components/shared";

import { useThemeColor } from "@/core/hooks/useThemeColor";
import {
	useExchangeRates,
	CurrenciesIcon,
	defaultCurrencies,
} from "@/components/entities/exchange-rates";

export const ExchangeRatesBlock: React.FC = () => {
	const backgroundColor = useThemeColor("mainSurfaceSecondary");
	const { isLoading, exchangeRates } = useExchangeRates();

	const filterExchangeRates = exchangeRates.filter((exchangeRate) =>
		defaultCurrencies.includes(exchangeRate.code),
	);

	return (
		<Link
			className="p-4 mt-4 rounded-2xl flex-row"
			style={{ backgroundColor }}
			href="/exchange-rates"
		>
			{isLoading
				? [...Array(2)].map((_, index) => (
						<View key={index} className="grow flex-row">
							<View className="justify-center items-center pr-4">
								<SkeletonLoader width={24} height={20} />
							</View>
							<View>
								<SkeletonLoader width={24} height={14} />
								<View className="mt-1">
									<SkeletonLoader width={75} height={14} />
								</View>
							</View>
						</View>
					))
				: filterExchangeRates.map((exchangeRate) => {
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
