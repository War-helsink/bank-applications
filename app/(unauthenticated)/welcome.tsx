import { useThemeColor } from "@/shared/hooks/useThemeColor";
import { ThemedSafeAreaView, Text, Link } from "@/shared/ui";
import { Image, View } from "react-native";

const WelcomeScreen: React.FC = () => {
	const backgroundColor = useThemeColor("dark");
	const color = useThemeColor("light");

	return (
		<ThemedSafeAreaView className="flex-1 px-4 py-8">
			<View className="flex-1 gap-2">
				<Text className="text-sm text-center font-medium">
					Welcome to Bank App
				</Text>
				<Text className="text-4xl font-bold text-center">
					Managing your finances has never been so easy
				</Text>
				<Image
					source={require("@assets/images/screen/welcome-to-smartbank.png")}
					className="mt-10 w-full max-w-full flex-1"
					resizeMode="contain"
				/>
			</View>
			<View className="justify-center items-center">
				<Link
					href="/(unauthenticated)/auth/login"
					button
					className="w-2/3 rounded-full px-6 py-4"
					style={{ backgroundColor }}
				>
					<Text className="text-lg font-semibold" style={{ color }}>
						Start
					</Text>
				</Link>
			</View>
		</ThemedSafeAreaView>
	);
};

export default WelcomeScreen;
