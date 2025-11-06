import { useState } from "react";
import { Pressable, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useSendMessage } from "@/entities/support";
import { useThemeColor } from "@/shared/hooks/useThemeColor";
import { Field } from "@/shared/ui";

export const SupportMessageField: React.FC = () => {
	const backgroundColor = useThemeColor("toolbarBackground");
	const color = useThemeColor("primary");
	const [message, setMessage] = useState("");

	const { mutate: sendMessage } = useSendMessage();

	const onSendMessage = () => {
		setMessage("");

		if (message.trim().length <= 0) {
			return;
		}

		sendMessage(message);
	};

	return (
		<View
			className="flex-row items-center justify-between py-2 px-4"
			style={{ backgroundColor }}
		>
			<Field
				className="flex-1"
				multiline
				value={message}
				onChange={(value) => setMessage(value)}
				placeholder="Enter your message"
			/>
			<Pressable
				className="ml-4 w-8 h-8 items-center justify-center"
				onPress={onSendMessage}
			>
				<Ionicons name="send" size={28} color={color} />
			</Pressable>
		</View>
	);
};
