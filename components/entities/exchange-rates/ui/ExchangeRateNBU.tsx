import { View } from "react-native";
import { Toolbar, Text, SkeletonLoader } from "@/components/shared";

import { useThemeColor } from "@/core/hooks/useThemeColor";

import { CurrenciesIcon } from "../config/exchange-rates";

import type { ExchangeRatesSimplified } from "../model/types";

export interface ExchangeRateNBUProps {
	isLoading: boolean;
	exchangeRates: ExchangeRatesSimplified[];
}

export const ExchangeRateNBU: React.FC<ExchangeRateNBUProps> = ({
	exchangeRates,
	isLoading,
}) => {
	const backgroundColor = useThemeColor("mainSurfaceSecondary");
	const color = useThemeColor("mainSurfaceSecondaryColor");

	return (
		<Toolbar className="my-4 py-2 rounded-md">
			<Text>Courses NBU</Text>

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
					Exchange rate
				</Text>
			</View>

			{isLoading
				? [...Array(Object.keys(CurrenciesIcon).length)].map((_, index) => (
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
						</View>
					))
				: exchangeRates.map((exchangeRate) => {
						const SVG = CurrenciesIcon[exchangeRate.code];

						if (!SVG) {
							return null;
						}
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
									{exchangeRate.rate.toFixed(2)}
								</Text>
							</View>
						);
					})}
		</Toolbar>
	);
};
