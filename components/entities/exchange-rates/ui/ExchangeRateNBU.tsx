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
	const borderColor = useThemeColor("toolbarBorder");

	return (
		<Toolbar className="my-4 py-2 rounded-md">
			<Text className="text-xs">COURSES NBU</Text>

			<View
				className="w-full flex-row justify-between items-center p-2 rounded-xl mt-2"
				style={{ backgroundColor }}
			>
				<Text className="text-xs font-semibold">Currency</Text>
				<Text className="text-xs text-right font-semibold">Exchange rate</Text>
			</View>
			<View className="mt-4 px-2 flex gap-4">
				{isLoading
					? [...Array(Object.keys(CurrenciesIcon).length)].map((_, index) => (
							<View
								key={index}
								className="flex-row justify-between items-center pb-2 border-b"
								style={{ borderColor }}
							>
								<View className="justify-center items-center pr-4">
									<SkeletonLoader width={64} height={32} />
								</View>

								<SkeletonLoader width={64} height={18} />
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
									className="flex-row justify-between items-center pb-2 border-b"
									style={{ borderColor }}
								>
									<View className="flex gap-1">
										<View className="flex-row gap-2 items-center">
											<SVG width={24} height={18} />
											<Text className="text-sm font-semibold">
												{exchangeRate.code}
											</Text>
										</View>

										<Text className="text-[10px] opacity-75">
											{exchangeRate.text}
										</Text>
									</View>

									<Text className="text-sm  opacity-75">
										₴{exchangeRate.rate.toFixed(2)}
									</Text>
								</View>
							);
						})}
			</View>
		</Toolbar>
	);
};
