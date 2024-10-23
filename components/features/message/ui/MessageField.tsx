import clsx from "clsx";

import type { StyleProp, ViewStyle } from "react-native";
import { View, Pressable } from "react-native";
import { Field } from "@/components/shared";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { useState } from "react";
import { useThemeColor } from "@/core/hooks/useThemeColor";

export interface MessageFieldProps {
	className?: string;
	style?: StyleProp<ViewStyle>;
}

export const MessageField: React.FC<MessageFieldProps> = ({
	className,
	style,
}) => {
	const backgroundColor = useThemeColor("toolbarBackground");
	const color = useThemeColor("primary");
	const [messages, setMessages] = useState("");

	return (
		<View
			className={clsx(
				"flex-row items-center justify-between py-2 px-4",
				className,
			)}
			style={[style, { backgroundColor }]}
		>
			<Field
				className="flex-1"
				multiline
				value={messages}
				onChange={(value) => setMessages(value)}
				placeholder="Enter your message"
			/>
			<Pressable className="ml-4">
				<MaterialCommunityIcons
					name="send-circle-outline"
					size={42}
					color={color}
				/>
			</Pressable>
		</View>
	);
};
