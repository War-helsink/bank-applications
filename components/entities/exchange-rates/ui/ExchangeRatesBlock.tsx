import type React from "react";
import { View } from "react-native";
import { Toolbar, Text, Link, SkeletonLoader } from "@/components/shared";
import Ionicons from "@expo/vector-icons/Ionicons";

import { useThemeColor } from "@/core/hooks/useThemeColor";
import { CurrenciesIcon } from "../config/exchange-rates";

import type { ExchangeRatesSimplified } from "../model/types";

export interface ExchangeRatesBlockProps {
	title?: string;
	route?: boolean;
	oneRate?: boolean;
	isLoading: boolean;
	exchangeRates: ExchangeRatesSimplified[];
}

export const ExchangeRatesBlock: React.FC<ExchangeRatesBlockProps> = ({
	title = "EXCHANGE RATE",
	route = true,
	oneRate,
	isLoading,
	exchangeRates,
}) => {
	const backgroundColor = useThemeColor("mainSurfaceSecondary");
	const borderColor = useThemeColor("toolbarBorder");
	const successColor = useThemeColor("success");
	const dangerColor = useThemeColor("danger");

	return (
		<Toolbar className="py-4 rounded-2xl my-2 flex gap-2">
			<View className="flex-row justify-between">
				<Text className="text-xs">{title}</Text>

				{route && (
					<Link
						className="flex-row items-center gap-1"
						href="/(app)/exchange-rates"
					>
						<Text className="text-xs" style={{ color: dangerColor }}>
							SEE MORE
						</Text>
						<Ionicons
							name="chevron-forward-outline"
							size={12}
							color={dangerColor}
						/>
					</Link>
				)}
			</View>

			<View
				className="w-full flex-row justify-between items-center p-2 rounded-xl mt-2"
				style={{ backgroundColor }}
			>
				<Text className="text-xs font-semibold">Currency</Text>

				{oneRate ? (
					<Text className="text-xs text-right font-semibold">
						Exchange rate
					</Text>
				) : (
					<>
						<Text className="text-xs font-semibold">Buy</Text>
						<Text className="text-xs font-semibold">Sell</Text>
					</>
				)}
			</View>

			<View className="px-2 flex gap-4">
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

								{!oneRate && <SkeletonLoader width={64} height={18} />}

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
											<Text className="text-base font-semibold">
												{exchangeRate.code}
											</Text>
										</View>

										<Text className="text-xs opacity-75">
											{exchangeRate.text}
										</Text>
									</View>

									{oneRate ? (
										<Text className="text-sm  opacity-75">
											₴{exchangeRate.rate.toFixed(2)}
										</Text>
									) : (
										<>
											<View className="flex-row items-center gap-1">
												<Text className="text-sm opacity-75">
													₴{(exchangeRate.rate - 0.2).toFixed(2)}
												</Text>
												<Text style={{ color: successColor }}>↗</Text>
											</View>
											<View className="flex-row items-center gap-1">
												<Text className="text-sm opacity-75">
													₴{(exchangeRate.rate + 0.2).toFixed(2)}
												</Text>
												<Text style={{ color: dangerColor }}>↘</Text>
											</View>
										</>
									)}
								</View>
							);
						})}
			</View>
		</Toolbar>
	);
};
