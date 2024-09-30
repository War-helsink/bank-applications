import { Stack, useSegments, useRouter } from "expo-router";
import { useThemeColor } from "@/core/hooks/useThemeColor";
import { useAuth } from "@/core/hooks/useAuth";
import { useEffect } from "react";

export const Navigation: React.FC = () => {
	const color = useThemeColor("text");
	const segments = useSegments();
	const router = useRouter();
	const { user } = useAuth();

	useEffect(() => {
		if (user === null && router) {
			return router.replace("/auth");
		}
		if (segments[0] === "auth") {
			return router.replace("/");
		}
	}, [user, router, segments]);

	return (
		<Stack>
			<Stack.Screen name="(tabs)" options={{ headerShown: false }} />
			<Stack.Screen
				name="statistics"
				options={{
					title: "Statistics",
					headerShown: true,
					headerBackTitleVisible: false,
					headerTintColor: color,
				}}
			/>
			<Stack.Screen
				name="messages"
				options={{
					title: "Messages",
					headerShown: true,
					headerBackTitleVisible: false,
					headerTintColor: color,
				}}
			/>
			<Stack.Screen
				name="profile"
				options={{
					title: "Profile",
					headerShown: true,
					headerBackTitleVisible: false,
					headerTintColor: color,
				}}
			/>
			<Stack.Screen name="auth" options={{ headerShown: false }} />

			<Stack.Screen name="+not-found" />
		</Stack>
	);
};
