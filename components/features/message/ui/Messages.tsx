import clsx from "clsx";

import type { StyleProp, ViewStyle } from "react-native";
import { ScrollView } from "react-native";
import { Text, Container } from "@/components/shared";

export interface MessagesProps {
	className?: string;
	style?: StyleProp<ViewStyle>;
}

export const Messages: React.FC<MessagesProps> = ({ className, style }) => {
	return (
		<Container className={clsx(className)} style={style}>
			<ScrollView>
				
			</ScrollView>
		</Container>
	);
};
