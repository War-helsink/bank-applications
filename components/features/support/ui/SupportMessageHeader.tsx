import { View } from "react-native";
import { Container, Text } from "@/components/shared";
import BankSvg from "../../../../assets/icons/bank/bank.svg";

import { useThemeColor } from "@/core/hooks/useThemeColor";

export const SupportMessageHeader: React.FC = () => {
	const borderColor = useThemeColor("toolbarBorder");

	return (
		<Container className="py-4 flex-row border-b" style={{ borderColor }}>
			<View className="items-center justify-center">
				<BankSvg width={32} height={32} />
			</View>
			<View className="ml-2">
				<Text>Support</Text>
				<Text className="text-sm opacity-75">We are there 24/7</Text>
			</View>
		</Container>
	);
};
