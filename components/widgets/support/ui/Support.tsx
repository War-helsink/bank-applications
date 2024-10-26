import type { StyleProp, ViewStyle } from "react-native";
import { View } from "react-native";
import { Container, Text } from "@/components/shared";
import {
	SupportMessageField,
	SupportMessages,
} from "@/components/features/support";
import BankSvg from "../../../../assets/icons/bank/bank.svg";

import { useAuth } from "@/core/hooks/useAuth";
import { useSupport } from "@/core/hooks/useSupport";

export interface SupportProps {
	className?: string;
	style?: StyleProp<ViewStyle>;
}

export const Support: React.FC<SupportProps> = ({ className, style }) => {
	const { user } = useAuth();
	const { messages, sendMessage } = useSupport(user?.uid);

	return (
		<View className="w-full h-full">
			<Container className="pt-4 flex-row">
				<View className="items-center justify-center">
					<BankSvg width={32} height={32} />
				</View>
				<View className="ml-2">
					<Text>Support</Text>
					<Text className="text-sm opacity-75">We are there 24/7</Text>
				</View>
			</Container>
			<View className={className} style={style}>
				<SupportMessages className="flex-1" messages={messages.reverse()} />
				<SupportMessageField sendMessage={sendMessage} />
			</View>
		</View>
	);
};
