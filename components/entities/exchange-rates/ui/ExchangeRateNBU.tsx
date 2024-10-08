import { View } from "react-native";
import { Toolbar, Text } from "@/components/shared";

import { useThemeColor } from "@/core/hooks/useThemeColor";
import { useExchangeRates } from "../hooks/useExchangeRates";

import { CurrenciesIcon } from "../config/exchange-rates";

export const ExchangeRateNBU: React.FC = () => {
	const backgroundColor = useThemeColor("mainSurfaceSecondary");
	const color = useThemeColor("text");
	const { exchangeRates } = useExchangeRates();

	return (
		<Toolbar className="my-4 py-2">
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
					Buy
				</Text>
				<Text
					className="text-xs text-right font-semibold"
					style={{ color, flex: 2 }}
				>
					Sell
				</Text>
			</View>
			{exchangeRates.map((exchangeRate) => {
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
