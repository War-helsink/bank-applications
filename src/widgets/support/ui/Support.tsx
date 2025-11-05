import { View } from "react-native";
import type { StyleProp, ViewStyle } from "react-native";
import {
	SupportMessageField,
	SupportMessageHeader,
	SupportMessages,
} from "@/features/support";
import { useSupportMessages } from "@/entities/support";

export interface SupportProps {
	className?: string;
	style?: StyleProp<ViewStyle>;
}

export const Support: React.FC<SupportProps> = ({ className, style }) => {
	const messages = useSupportMessages();

	return (
		<View className="w-full h-full">
			<SupportMessageHeader />
			<View className={className} style={style}>
				<SupportMessages
					className="flex-1 pb-4"
					messages={messages.reverse()}
				/>
				<SupportMessageField />
			</View>
		</View>
	);
};
