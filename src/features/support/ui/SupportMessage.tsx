import type { Support } from "@/entities/support";
import { formatDateTime } from "@/shared/helpers";
import { useThemeColor } from "@/shared/hooks/useThemeColor";
import { Text } from "@/shared/ui";
import { cn } from "@/shared/utils";
import { View } from "react-native";

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
			className={cn(
				"max-w-[95%] flex-row items-end rounded-lg py-2 px-3",
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
