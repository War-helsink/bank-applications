import { View, TouchableOpacity } from "react-native";
import { Text } from "@/components/shared";
import * as Haptics from "expo-haptics";

import { useThemeColor } from "@/core/hooks/useThemeColor";

import { Currency } from "@/core/config/currency";

export interface CurrencyProps {
	activeCurrency: Currency;
	setActiveCurrency: React.Dispatch<React.SetStateAction<Currency>>;
}

export const CardCurrency: React.FC<CurrencyProps> = ({
	activeCurrency,
	setActiveCurrency,
}) => {
	const activeBackgroundColor = useThemeColor("primary");
	const backgroundColor = useThemeColor("toolbarBackground");
	const borderColor = useThemeColor("toolbarBorder");
	const activeColor = useThemeColor("white");
	const color = useThemeColor("text");

	const currencies = Object.entries(Currency);

	return (
		<View className="pt-4">
			<Text>Card currency</Text>
			<View className="flex-row mt-4">
				{currencies.map(([key, value]) => (
					<TouchableOpacity
						key={key}
						className="w-24 h-12 mr-4 border border-solid rounded-full justify-center items-center"
						style={{
							backgroundColor:
								activeCurrency === value
									? activeBackgroundColor
									: backgroundColor,

							borderColor,
						}}
						onPress={() => {
							Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
							setActiveCurrency(value);
						}}
					>
						<Text
							className="text-xs"
							style={{ color: activeCurrency === value ? activeColor : color }}
						>
							{key}
						</Text>
					</TouchableOpacity>
				))}
			</View>
		</View>
	);
};
