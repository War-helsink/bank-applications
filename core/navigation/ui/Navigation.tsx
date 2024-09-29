import { Stack, useSegments, useRouter } from "expo-router";
import { useEffect } from "react";
import { useAuth } from "@/core/hooks/useAuth";

export const Navigation: React.FC = () => {
	const segments = useSegments();
	const router = useRouter();
	const { user } = useAuth();

	useEffect(() => {
		if (user === null && router) {
			return router.replace("/auth");
		}
		if (segments[0] === "auth") {
			return router.replace("/(tabs)");
		}
	}, [user, router, segments]);

	return (
		<Stack>
			<Stack.Screen name="(tabs)" options={{ headerShown: false }} />
			<Stack.Screen name="statistics" options={{ headerShown: true }} />
			<Stack.Screen name="messages" options={{ headerShown: true }} />
			<Stack.Screen name="profile" options={{ headerShown: true }} />
			<Stack.Screen name="auth" options={{ headerShown: false }} />

			<Stack.Screen name="+not-found" />
		</Stack>
	);
};
