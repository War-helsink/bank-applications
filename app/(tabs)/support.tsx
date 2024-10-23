import { View } from "react-native";
import { ThemedView, Container, Text } from "@/components/shared";
import { Support } from "@/components/widgets/support";

import BankSvg from "../../assets/icons/bank/bank.svg";

const SupportScreen: React.FC = () => {
	return (
		<ThemedView className="h-full w-full pt-16">
			<Container className="pt-4 flex-row">
				<View className="items-center justify-center">
					<BankSvg width={32} height={32} />
				</View>
				<View className="ml-2">
					<Text>Support</Text>
					<Text className="text-sm opacity-75">We are there 24/7</Text>
				</View>
			</Container>
			<Support className="flex-1" />
		</ThemedView>
	);
};

export default SupportScreen;
