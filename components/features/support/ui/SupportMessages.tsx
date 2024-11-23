import clsx from "clsx";

import { View, FlatList, StyleSheet, ImageBackground } from "react-native";
import { Container, Text } from "@/components/shared";
import { SupportMessage } from "./SupportMessage";

import { formatDateChat } from "@/core/helpers";

import { useMemo } from "react";
import { useThemeColor } from "@/core/hooks/useThemeColor";
import { useColorScheme } from "@/core/hooks/useColorScheme";

import type { StyleProp, ViewStyle } from "react-native";
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
	const backgroundColor = useThemeColor("toolbarBackground");
	const theme = useColorScheme() ?? "light";
	const isDark = theme === "dark";

	const groupedMessages = useMemo(
		() =>
			Object.entries(
				messages.reduce(
					(acc, message) => {
						const dateKey = formatDateChat(message.createdAt);
						if (!acc[dateKey]) {
							acc[dateKey] = [];
						}
						acc[dateKey].push(message);
						return acc;
					},
					{} as Record<string, Support[]>,
				),
			),
		[messages],
	);

	return (
		<ImageBackground
			source={
				isDark
					? require("@/assets/images/support/chat-bg-dark.png")
					: require("@/assets/images/support/chat-bg-light.png")
			}
			className="flex-1"
			resizeMode="repeat"
			style={isDark ? styles.backgroundColorDark : styles.backgroundColorLight}
			imageStyle={styles.image}
		>
			<Container className={clsx(className)} style={style}>
				<FlatList
					inverted
					contentContainerStyle={{ flexDirection: "column-reverse" }}
					data={groupedMessages}
					keyExtractor={([key]) => key}
					renderItem={({ item: [date, items] }) => {
						return (
							<View className="w-full flex gap-2 mt-2">
								<View className="w-full items-center">
									<View
										className="w-fit px-3 py-1 rounded-2xl"
										style={{ backgroundColor }}
									>
										<Text className="text-sm">{date}</Text>
									</View>
								</View>
								<View className="w-full flex gap-2">
									{items.map((message) => (
										<SupportMessage key={message.id} message={message} />
									))}
								</View>
							</View>
						);
					}}
				/>
			</Container>
		</ImageBackground>
	);
};

const styles = StyleSheet.create({
	backgroundColorLight: {
		backgroundColor: "#99ba92",
	},
	backgroundColorDark: {
		backgroundColor: "#121212",
	},
	image: {
		position: "absolute",
		top: 0,
		right: 0,
		height: "100%",
		width: 510,
	},
});
