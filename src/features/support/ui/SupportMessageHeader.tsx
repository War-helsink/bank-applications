import { useThemeColor } from "@/shared/hooks/useThemeColor";
import { BankIcon, Container, Text } from "@/shared/ui";
import { View } from "react-native";

export const SupportMessageHeader: React.FC = () => {
	const borderColor = useThemeColor("toolbarBorder");

	return (
		<Container className="py-4 flex-row border-b" style={{ borderColor }}>
			<View className="items-center justify-center">
				<BankIcon width={32} height={32} />
			</View>
			<View className="ml-2">
				<Text>Support</Text>
				<Text className="text-sm opacity-75">We are there 24/7</Text>
			</View>
		</Container>
	);
};
