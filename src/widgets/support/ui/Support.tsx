import { View } from "react-native";
import {
	SupportMessageField,
	SupportMessageHeader,
	SupportMessages,
} from "@/features/support";
import { useSupportMessages } from "@/entities/support";

export const Support: React.FC = () => {
	const messages = useSupportMessages();

	return (
		<View className="w-full h-full">
			<SupportMessageHeader />
			<View className="flex-1">
				<SupportMessages
					className="flex-1 pb-4"
					messages={messages.reverse()}
				/>
				<SupportMessageField />
			</View>
		</View>
	);
};
