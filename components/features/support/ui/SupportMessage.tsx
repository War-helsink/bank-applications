import clsx from "clsx";
import { View } from "react-native";
import { Text } from "@/components/shared";
import type { Support } from "@/core/entities/support";

import { formatDateTime } from "@/core/helpers";
import { useThemeColor } from "@/core/hooks/useThemeColor";

export interface SupportMessageProps {
	message: Support;
}

export const SupportMessage: React.FC<SupportMessageProps> = ({ message }) => {
	const backgroundColor = useThemeColor("toolbarBackground");
	const color = useThemeColor("text");

	const myBackgroundColor = useThemeColor("primary");
	const myColor = useThemeColor("primaryContrast");

	return (
		<View
			className={clsx(
				"max-w-[95%] flex-row items-end rounded-lg my-2 py-2 px-3",
				message.support ? "self-start" : "self-end",
			)}
			style={{
				backgroundColor: message.support ? backgroundColor : myBackgroundColor,
			}}
		>
			<Text
				style={{
					color: message.support ? color : myColor,
				}}
				className="text-sm"
			>
				{message.text}
			</Text>
			<Text
				style={{
					color: message.support ? color : myColor,
					fontSize: 10,
				}}
				className="ml-2 opacity-75"
			>
				{formatDateTime(message.createdAt)}
			</Text>
		</View>
	);
};
