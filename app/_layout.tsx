import { CardsProvider } from "@/providers/card";
import { LoaderProvider } from "@/providers/loader";
import { QueryProvider } from "@/providers/query";
import { SessionProvider } from "@/providers/session";
import { useColorScheme } from "@/shared/hooks/useColorScheme";
import { Toast } from "@/shared/ui";
import {
	DarkTheme,
	DefaultTheme,
	ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import "react-native-reanimated";
import "../global.css";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

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
			<QueryProvider>
				<SessionProvider>
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
				</SessionProvider>
			</QueryProvider>
			<StatusBar style="auto" />
			<Toast />
		</ThemeProvider>
	);
};

export default RootLayout;
