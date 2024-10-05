import { View, TouchableOpacity } from "react-native";
import { Text } from "@/components/shared";

import { useTailwind } from "tailwind-rn";
import { useThemeColor } from "@/core/hooks/useThemeColor";

import { Currency } from "@/core/config/currency";

export interface CardCurrencyProps {
	activeCurrency: Currency;
	setActiveCurrency: React.Dispatch<React.SetStateAction<Currency>>;
}

export const CardCurrency: React.FC<CardCurrencyProps> = ({
	activeCurrency,
	setActiveCurrency,
}) => {
	const tw = useTailwind();
	const activeBackgroundColor = useThemeColor("primary");
	const backgroundColor = useThemeColor("toolbarBackground");
	const borderColor = useThemeColor("toolbarBorder");
	const color = useThemeColor("white");

	const currencies = Object.entries(Currency);

	return (
		<View style={tw("pt-4")}>
			<Text>Card currency</Text>
			<View style={tw("flex-row mt-4")}>
				{currencies.map(([key, value]) => (
					<TouchableOpacity
						key={key}
						style={[
							{
								backgroundColor:
									activeCurrency === value
										? activeBackgroundColor
										: backgroundColor,

								borderColor,
							},
							tw(
								"w-24 h-12 mr-4 border border-solid rounded-full justify-center items-center",
							),
						]}
						onPress={() => setActiveCurrency(value)}
					>
						<Text style={[tw("text-xs"), { color }]}>{key}</Text>
					</TouchableOpacity>
				))}
			</View>
		</View>
	);
};
