import { View, TouchableOpacity } from "react-native";
import { Text } from "@/components/shared";
import * as Haptics from "expo-haptics";

import { useRouter } from "expo-router";
import { useThemeColor } from "@/core/hooks/useThemeColor";
import { useExchangeRates } from "../hooks/useExchangeRates";

export const ExchangeRatesBlock: React.FC = () => {
	const router = useRouter();
	const backgroundColor = useThemeColor("mainSurfaceSecondary");
	const { exchangeRates } = useExchangeRates();

	return (
		<TouchableOpacity
			className="p-4 mt-4 rounded-2xl flex-row"
			style={{ backgroundColor }}
			onPress={() => {
				Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Soft);
				router.push("/exchange-rates");
			}}
		>
			{exchangeRates.map((exchangeRate) => (
				<View key={exchangeRate.code} className="grow">
					<Text className="text-xs">{exchangeRate.code}</Text>
					<Text className="text-xs font-bold">{`${(exchangeRate.rate - 0.2).toFixed(2)} / ${(exchangeRate.rate + 0.2).toFixed(2)}`}</Text>
				</View>
			))}
		</TouchableOpacity>
	);
};
