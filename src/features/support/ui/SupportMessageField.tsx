import { useThemeColor } from "@/shared/hooks/useThemeColor";
import { Field } from "@/shared/ui";
import Ionicons from "@expo/vector-icons/Ionicons";
import clsx from "clsx";
import { useState } from "react";
import type { StyleProp, ViewStyle } from "react-native";
import { Pressable, View } from "react-native";

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
