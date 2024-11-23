import { View } from "react-native";
import { Toolbar, Text, Link, SkeletonLoader } from "@/components/shared";
import Ionicons from "@expo/vector-icons/Ionicons";

import { useThemeColor } from "@/core/hooks/useThemeColor";
import {
	useExchangeRates,
	CurrenciesIcon,
	defaultCurrencies,
} from "@/components/entities/exchange-rates";

export const ExchangeRatesBlock: React.FC = () => {
	const dangerColor = useThemeColor("danger");
	const successColor = useThemeColor("success");
	const borderColor = useThemeColor("toolbarBorder");

	const { isLoading, exchangeRates } = useExchangeRates();

	const filterExchangeRates = exchangeRates.filter((exchangeRate) =>
		defaultCurrencies.includes(exchangeRate.code),
	);

	return (
		<Toolbar className="py-4 rounded-2xl my-2 flex gap-4">
			<View className="flex-row justify-between">
				<Text className="text-xs">EXCHANGE RATE</Text>

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
			</View>

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
				: filterExchangeRates.map((exchangeRate, index) => {
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
										<Text className="text-base font-semibold">
											{exchangeRate.code}
										</Text>
									</View>

									<Text className="text-xs opacity-75">
										{exchangeRate.text}
									</Text>
								</View>

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
							</View>
						);
					})}
		</Toolbar>
	);
};
