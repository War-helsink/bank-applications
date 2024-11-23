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
	const borderColor = useThemeColor("toolbarBorder");
	const successColor = useThemeColor("success");
	const dangerColor = useThemeColor("danger");

	const filterExchangeRates = exchangeRates.filter((exchangeRate) =>
		defaultCurrencies.includes(exchangeRate.code),
	);

	return (
		<Toolbar className="my-4 py-2 rounded-md">
			<Text className="text-xs">BASIC COURSES</Text>

			<View
				className="w-full flex-row justify-between items-center p-2 rounded-xl mt-2"
				style={{ backgroundColor }}
			>
				<Text className="text-xs font-semibold">Currency</Text>
				<Text className="text-xs font-semibold">Buy</Text>
				<Text className="text-xs font-semibold">Sell</Text>
			</View>

			<View className="mt-4 px-2 flex gap-4">
				{isLoading
					? [...Array(2)].map((_, index) => (
							<View
								key={index}
								className="flex-row justify-between items-center pb-2 border-b"
								style={{ borderColor }}
							>
								<View className="justify-center items-center pr-4">
									<SkeletonLoader width={64} height={32} />
								</View>

								<SkeletonLoader width={64} height={18} />

								<SkeletonLoader width={64} height={18} />
							</View>
						))
					: filterExchangeRates.map((exchangeRate) => {
							const SVG = CurrenciesIcon[exchangeRate.code];
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

									<View className="flex-row items-center gap-1">
										<Text className="text-xs opacity-75">
											₴{(exchangeRate.rate - 0.2).toFixed(2)}
										</Text>
										<Text className="text-sm" style={{ color: successColor }}>
											↗
										</Text>
									</View>
									<View className="flex-row items-center gap-1">
										<Text className="text-xs opacity-75">
											₴{(exchangeRate.rate + 0.2).toFixed(2)}
										</Text>
										<Text className="text-sm" style={{ color: dangerColor }}>
											↘
										</Text>
									</View>
								</View>
							);
						})}
			</View>
		</Toolbar>
	);
};
