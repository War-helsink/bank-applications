import { Stack, useSegments, useRouter } from "expo-router";
import { useEffect } from "react";
import { useAuth } from "@/hooks/useAuth";

export const Navigation: React.FC = () => {
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
			<Stack.Screen name="auth" options={{ headerShown: false }} />

			<Stack.Screen name="+not-found" />
		</Stack>
	);
};
