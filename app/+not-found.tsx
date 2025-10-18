import { Link, Stack } from "expo-router";
import type React from "react";
import { StyleSheet } from "react-native";

import { Text, ThemedSafeAreaView } from "@/shared/ui";

const NotFoundScreen: React.FC = () => {
	return (
		<>
			<Stack.Screen options={{ title: "Oops!" }} />
			<ThemedSafeAreaView style={styles.container}>
				<Text className="text-4xl font-bold">This screen doesn&apos;t exist.</Text>
				<Link href="/" style={styles.link}>
					<Text className="text-base">Go to home screen!</Text>
				</Link>
			</ThemedSafeAreaView>
		</>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		padding: 20,
	},
	link: {
		marginTop: 15,
		paddingVertical: 15,
	},
});

export default NotFoundScreen;
