import clsx from "clsx";

import type { StyleProp, ViewStyle } from "react-native";
import { View, Pressable } from "react-native";
import { Field } from "@/components/shared";
import Ionicons from "@expo/vector-icons/Ionicons";

import { useState } from "react";
import { useThemeColor } from "@/core/hooks/useThemeColor";

export interface SupportMessageFieldProps {
	className?: string;
	style?: StyleProp<ViewStyle>;
	sendMessage: (text: string) => void;
}

export const SupportMessageField: React.FC<SupportMessageFieldProps> = ({
	className,
	style,
	sendMessage,
}) => {
	const backgroundColor = useThemeColor("toolbarBackground");
	const color = useThemeColor("primary");
	const [message, setMessage] = useState("");

	const onClick = () => {
		sendMessage(message);
		setMessage("");
	};

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
				value={message}
				onChange={(value) => setMessage(value)}
				placeholder="Enter your message"
			/>
			<Pressable
				className="ml-4"
				onPress={onClick}
				disabled={message.length <= 0}
			>
				<Ionicons name="send" size={28} color={color} />
			</Pressable>
		</View>
	);
};
