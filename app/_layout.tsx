import {
	DarkTheme,
	DefaultTheme,
	ThemeProvider,
} from "@react-navigation/native";
import { AuthProvider } from "@/providers/AuthProvider";
import { useFonts } from "expo-font";
import { TailwindProvider } from "tailwind-rn";

import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

import { Navigation } from "@/navigation";

import { useColorScheme } from "@/hooks/useColorScheme";
import utilities from '@/tailwind.json';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
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
			<TailwindProvider utilities={utilities}>
				<AuthProvider>
					<Navigation />
				</AuthProvider>
			</TailwindProvider>
		</ThemeProvider>
	);
}
