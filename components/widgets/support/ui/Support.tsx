import type { StyleProp, ViewStyle } from "react-native";
import { View } from "react-native";
import {
	SupportMessageHeader,
	SupportMessageField,
	SupportMessages,
} from "@/components/features/support";

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
			<SupportMessageHeader />
			<View className={className} style={style}>
				<SupportMessages
					className="flex-1 pb-4"
					messages={messages.reverse()}
				/>
				<SupportMessageField sendMessage={sendMessage} />
			</View>
		</View>
	);
};
