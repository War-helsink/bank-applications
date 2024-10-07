import { View, TouchableOpacity } from "react-native";
import { Text } from "@/components/shared";
import * as Haptics from "expo-haptics";

import { useRouter } from "expo-router";
import { useTailwind } from "tailwind-rn";
import { useThemeColor } from "@/core/hooks/useThemeColor";
import { useExchangeRates } from "../hooks/useExchangeRates";

export const ExchangeRatesBlock: React.FC = () => {
	const tw = useTailwind();
	const router = useRouter();
	const backgroundColor = useThemeColor("mainSurfaceSecondary");
	const { exchangeRates } = useExchangeRates();

	return (
		<TouchableOpacity
			style={[{ backgroundColor }, tw("p-4 mt-4 rounded-2xl flex-row")]}
			onPress={() => {
				Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Soft);
				router.push("/exchange-rates");
			}}
		>
			{exchangeRates.map((exchangeRate) => (
				<View key={exchangeRate.code} style={tw("grow")}>
					<Text style={tw("text-xs")}>{exchangeRate.code}</Text>
					<Text
						style={tw("text-xs font-bold")}
					>{`${(exchangeRate.rate - 0.2).toFixed(2)} / ${(exchangeRate.rate + 0.2).toFixed(2)}`}</Text>
				</View>
			))}
		</TouchableOpacity>
	);
};
