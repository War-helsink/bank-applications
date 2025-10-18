import { PaymentNetwork, PaymentNetworkImg } from "@/shared/config";
import * as Haptics from "expo-haptics";
import { TouchableOpacity, View } from "react-native";

import { useThemeColor } from "@/shared/hooks/useThemeColor";
import { Text } from "@/shared/ui";

export interface PaymentSystemProps {
	activePaymentSystem: PaymentNetwork;
	setActivePaymentSystem: React.Dispatch<React.SetStateAction<PaymentNetwork>>;
}

export const PaymentSystem: React.FC<PaymentSystemProps> = ({
	activePaymentSystem,
	setActivePaymentSystem,
}) => {
	const backgroundColor = useThemeColor("toolbarBackground");
	const activeBorderColor = useThemeColor("primary");
	const borderColor = useThemeColor("toolbarBorder");

	const paymentSystems = Object.entries(PaymentNetwork);

	return (
		<View className="pt-4">
			<Text>Payment system</Text>
			<View className="flex-row mt-4">
				{paymentSystems.map(([key, value]) => {
					const SVG = PaymentNetworkImg[value];
					return (
						<TouchableOpacity
							key={key}
							className="w-24 h-24 mr-4 border border-solid rounded-md justify-center items-center"
							style={{
								backgroundColor,
								borderColor:
									activePaymentSystem === value
										? activeBorderColor
										: borderColor,
							}}
							onPress={() => {
								Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
								setActivePaymentSystem(value);
							}}
						>
							<SVG width={48} height={48} />
							<Text className="text-xs">{key}</Text>
						</TouchableOpacity>
					);
				})}
			</View>
		</View>
	);
};
