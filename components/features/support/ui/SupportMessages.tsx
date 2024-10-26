import clsx from "clsx";

import type { StyleProp, ViewStyle } from "react-native";
import { ScrollView } from "react-native";
import { Container } from "@/components/shared";
import { SupportMessage } from "./SupportMessage";

import type { Support } from "@/core/entities/support";

export interface SupportMessagesProps {
	className?: string;
	style?: StyleProp<ViewStyle>;
	messages: Support[];
}

export const SupportMessages: React.FC<SupportMessagesProps> = ({
	className,
	style,
	messages,
}) => {
	return (
		<Container className={clsx(className)} style={style}>
			<ScrollView className="py-4">
				{messages.map((message) => (
					<SupportMessage message={message} key={message.id} />
				))}
			</ScrollView>
		</Container>
	);
};
