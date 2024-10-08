import { View } from "react-native";
import { Toolbar, Text, SkeletonLoader } from "@/components/shared";

import { useThemeColor } from "@/core/hooks/useThemeColor";

import { CurrenciesIcon } from "../config/exchange-rates";
import { defaultCurrencies } from "../config/exchange-rates";

import type { ExchangeRatesSimplified } from "../model/types";

export interface BasicCoursesBlockProps {
	isLoading: boolean;
	exchangeRates: ExchangeRatesSimplified[];
}

export const BasicCoursesBlock: React.FC<BasicCoursesBlockProps> = ({
	exchangeRates,
	isLoading,
}) => {
	const backgroundColor = useThemeColor("mainSurfaceSecondary");
	const color = useThemeColor("mainSurfaceSecondaryColor");

	const filterExchangeRates = exchangeRates.filter((exchangeRate) =>
		defaultCurrencies.includes(exchangeRate.code),
	);

	return (
		<Toolbar className="my-4 py-2">
			<Text>Basic courses</Text>

			<View
				className="w-full flex-row justify-between items-center p-2 rounded-xl mt-2"
				style={{ backgroundColor }}
			>
				<Text className="text-xs font-semibold" style={{ color, flex: 1 }}>
					Currency
				</Text>
				<Text
					className="text-xs text-right font-semibold"
					style={{ color, flex: 2 }}
				>
					Buy
				</Text>
				<Text
					className="text-xs text-right font-semibold"
					style={{ color, flex: 2 }}
				>
					Sell
				</Text>
			</View>
			{isLoading
				? [...Array(2)].map((_, index) => (
						<View
							key={index}
							className="w-full flex-row justify-between items-center p-2 my-2"
						>
							<View style={{ flex: 1 }}>
								<SkeletonLoader width={70} height={25} radius={12} />
							</View>

							<View className="items-end" style={{ flex: 2 }}>
								<SkeletonLoader width={50} height={25} radius={12} />
							</View>
							<View className="items-end" style={{ flex: 2 }}>
								<SkeletonLoader width={50} height={25} radius={12} />
							</View>
						</View>
					))
				: filterExchangeRates.map((exchangeRate) => {
						const SVG = CurrenciesIcon[exchangeRate.code];
						return (
							<View
								key={exchangeRate.code}
								className="w-full flex-row justify-between p-2 my-2"
							>
								<View className="flex-row" style={{ flex: 1 }}>
									<View className="justify-center items-center pr-4">
										<SVG width={24} height={18} />
									</View>
									<Text className="text-xs">{exchangeRate.code}</Text>
								</View>

								<Text className="text-xs text-right" style={{ flex: 2 }}>
									{(exchangeRate.rate - 0.2).toFixed(2)}
								</Text>
								<Text className="text-xs text-right" style={{ flex: 2 }}>
									{(exchangeRate.rate + 0.2).toFixed(2)}
								</Text>
							</View>
						);
					})}
		</Toolbar>
	);
};
