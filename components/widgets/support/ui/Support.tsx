import clsx from "clsx";

import type { StyleProp, ViewStyle } from "react-native";
import { View } from "react-native";
import { MessageField, Messages } from "@/components/features/message";

export interface SupportProps {
	className?: string;
	style?: StyleProp<ViewStyle>;
}

export const Support: React.FC<SupportProps> = ({ className, style }) => {
	return (
		<View className={className} style={style}>
			<Messages className="flex-1" />
			<MessageField />
		</View>
	);
};
