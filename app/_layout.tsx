import {
	DarkTheme,
	DefaultTheme,
	ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";

import { ToastEl } from "@/components/shared/ui";
import { AuthProvider } from "@/core/providers/AuthProvider";
import { NavigationProvider } from "@/core/providers/NavigationProvider";
import { TailwindProvider } from "tailwind-rn";

import { useEffect } from "react";
import { useThemeColor } from "@/core/hooks/useThemeColor";
import { useColorScheme } from "@/core/hooks/useColorScheme";
import utilities from "@/tailwind.json";

import "react-native-reanimated";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

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
			<TailwindProvider utilities={utilities}>
				<AuthProvider>
					<NavigationProvider>
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
					</NavigationProvider>
				</AuthProvider>
			</TailwindProvider>
			<ToastEl />
		</ThemeProvider>
	);
}
