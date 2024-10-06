import { View, TouchableOpacity } from "react-native";
import { Text } from "@/components/shared";
import * as Haptics from "expo-haptics";

import { useTailwind } from "tailwind-rn";
import { useThemeColor } from "@/core/hooks/useThemeColor";

import { PaymentNetwork, PaymentNetworkImg } from "@/core/config/payment";

export interface PaymentSystemProps {
	activePaymentSystem: PaymentNetwork;
	setActivePaymentSystem: React.Dispatch<React.SetStateAction<PaymentNetwork>>;
}

export const PaymentSystem: React.FC<PaymentSystemProps> = ({
	activePaymentSystem,
	setActivePaymentSystem,
}) => {
	const tw = useTailwind();
	const backgroundColor = useThemeColor("toolbarBackground");
	const activeBorderColor = useThemeColor("primary");
	const borderColor = useThemeColor("toolbarBorder");

	const paymentSystems = Object.entries(PaymentNetwork);

	return (
		<View style={tw("pt-4")}>
			<Text>Payment system</Text>
			<View style={tw("flex-row mt-4")}>
				{paymentSystems.map(([key, value]) => {
					const SVG = PaymentNetworkImg[value];
					return (
						<TouchableOpacity
							key={key}
							style={[
								{
									backgroundColor,
									borderColor:
										activePaymentSystem === value
											? activeBorderColor
											: borderColor,
								},
								tw(
									"w-24 h-24 mr-4 border border-solid rounded-md justify-center items-center",
								),
							]}
							onPress={() => {
								Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
								setActivePaymentSystem(value);
							}}
						>
							<SVG width={48} height={48} />
							<Text style={tw("text-xs")}>{key}</Text>
						</TouchableOpacity>
					);
				})}
			</View>
		</View>
	);
};
