import { useSession } from "@/entities/session";
import {
	SupportMessageField,
	SupportMessageHeader,
	SupportMessages,
} from "@/features/support";
import { useSupport } from "@/entities/support";
import type { StyleProp, ViewStyle } from "react-native";
import { View } from "react-native";

export interface SupportProps {
	className?: string;
	style?: StyleProp<ViewStyle>;
}

export const Support: React.FC<SupportProps> = ({ className, style }) => {
	const { session } = useSession();
	const { messages, sendMessage } = useSupport(session?.uid);

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
