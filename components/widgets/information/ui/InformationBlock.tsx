import { View, TouchableOpacity } from "react-native";
import { Toolbar, Text } from "@/components/shared";
import { ExchangeRatesBlock } from "@/components/entities/exchange-rates";
import Ionicons from "@expo/vector-icons/Ionicons";
import * as Haptics from "expo-haptics";

import { useRouter } from "expo-router";
import { useThemeColor } from "@/core/hooks/useThemeColor";

export const InformationBlock: React.FC = () => {
	const backgroundColor = useThemeColor("mainSurfaceSecondary");
	const colorMess = useThemeColor("tertiary");
	const colorSupport = useThemeColor("primary");
	const colorQuestions = useThemeColor("danger");
	const colorStatements = useThemeColor("warning");
	const colorTariffs = useThemeColor("success");
	const router = useRouter();

	return (
		<Toolbar className="py-4 rounded-2xl my-2">
			<Text>Information</Text>
			<ExchangeRatesBlock />

			<View className="mt-4 flex-row flex-wrap justify-between">
				<TouchableOpacity
					className="px-1 py-2 mb-4 rounded-2xl w-[48%] items-center justify-center"
					style={{ backgroundColor }}
					onPress={() => {
						Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Soft);
						router.push("/messages");
					}}
				>
					<Ionicons name="chatbubble-ellipses" size={30} color={colorMess} />
					<Text className="text-[10px] font-semibold">Message</Text>
				</TouchableOpacity>
				<TouchableOpacity
					className="px-1 py-2 mb-4 rounded-2xl w-[48%] items-center justify-center"
					style={{ backgroundColor }}
				>
					<Ionicons name="happy" size={30} color={colorSupport} />
					<Text className="text-[10px] font-semibold">Support service</Text>
				</TouchableOpacity>
				<TouchableOpacity
					className="px-1 py-2 mb-4 rounded-2xl w-[48%] items-center justify-center"
					style={{ backgroundColor }}
				>
						<Ionicons name="help-circle" size={30} color={colorQuestions} />
						<Text className="text-[10px] font-semibold">Frequently asked questions</Text>
				</TouchableOpacity>
				<TouchableOpacity
					className="px-1 py-2 mb-4 rounded-2xl w-[48%] items-center justify-center"
					style={{ backgroundColor }}
				>
						<Ionicons name="documents" size={30} color={colorStatements} />
						<Text className="text-[10px] font-semibold">Statements and references</Text>
				</TouchableOpacity>
				<TouchableOpacity
					className="px-1 py-2 mb-4 rounded-2xl w-[48%] items-center justify-center"
					style={{ backgroundColor }}
				>
						<Ionicons name="document-text" size={30} color={colorTariffs} />
						<Text className="text-[10px] font-semibold">Terms and tariffs</Text>
				</TouchableOpacity>
			</View>
		</Toolbar>
	);
};
