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
import { RouteController } from "@/components/features/navigation";

import { useEffect } from "react";
import { useFonts } from "expo-font";
import { useThemeColor } from "@/core/hooks/useThemeColor";
import { useColorScheme } from "@/core/hooks/useColorScheme";

import "react-native-reanimated";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const queryClient = new QueryClient();

export default function RootLayout() {
	const colorScheme = useColorScheme();
	const color = useThemeColor("text");

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
						<RouteController>
							<LoaderProvider>
								<Stack>
									<Stack.Screen
										name="(tabs)"
										options={{ headerShown: false }}
									/>
									<Stack.Screen
										name="add-card"
										options={{
											title: "Add a bank card",
											headerShown: true,
											headerBackTitleVisible: false,
											headerTintColor: color,
										}}
									/>
									<Stack.Screen name="auth" options={{ headerShown: false }} />
									<Stack.Screen
										name="card-creating"
										options={{
											title: "Creating a bank card",
											headerShown: true,
											headerBackTitleVisible: false,
											headerTintColor: color,
										}}
									/>
									<Stack.Screen
										name="cards"
										options={{
											title: "All cards",
											headerShown: true,
											headerBackTitleVisible: false,
											headerTintColor: color,
										}}
									/>
									<Stack.Screen
										name="exchange-rates"
										options={{
											title: "Exchange Rates",
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

									<Stack.Screen
										name="statistics"
										options={{
											title: "Statistics",
											headerShown: true,
											headerBackTitleVisible: false,
											headerTintColor: color,
										}}
									/>

									<Stack.Screen name="+not-found" />
								</Stack>
							</LoaderProvider>
						</RouteController>
					</CardsProvider>
				</AuthProvider>
			</QueryClientProvider>
			<Toast />
		</ThemeProvider>
	);
}
