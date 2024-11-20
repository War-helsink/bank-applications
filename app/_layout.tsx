import {
	DarkTheme,
	DefaultTheme,
	ThemeProvider,
} from "@react-navigation/native";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";

import { Toast } from "@/components/shared";
import { AuthProvider } from "@/core/providers/AuthProvider";
import { CardsProvider } from "@/core/providers/CardsProvider";
import { LoaderProvider } from "@/core/providers/LoaderProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { useEffect } from "react";
import { useFonts } from "expo-font";
import { useColorScheme } from "@/core/hooks/useColorScheme";

import "react-native-reanimated";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const queryClient = new QueryClient();

const RootLayout: React.FC = () => {
	const colorScheme = useColorScheme();

	const [loaded] = useFonts({
		SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
	});

	useEffect(() => {
		if (loaded) {
			SplashScreen.hideAsync();
		}
	}, [loaded]);

	if (!loaded) {
		return null;
	}

	return (
		<ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
			<QueryClientProvider client={queryClient}>
				<AuthProvider>
					<CardsProvider>
						<LoaderProvider>
							<Stack>
								<Stack.Screen name="(tabs)" options={{ headerShown: false }} />
								<Stack.Screen name="(app)" options={{ headerShown: false }} />
								<Stack.Screen name="auth" options={{ headerShown: false }} />

								<Stack.Screen name="+not-found" />
							</Stack>
						</LoaderProvider>
					</CardsProvider>
				</AuthProvider>
			</QueryClientProvider>
			<Toast />
		</ThemeProvider>
	);
};

export default RootLayout;
