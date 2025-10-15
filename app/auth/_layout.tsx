import { KeyboardAvoidingView, Platform } from "react-native";
import { Container, ThemedSafeAreaView } from "@/components/shared";
import { useAuth } from "@/core/hooks/useAuth";
import { Slot, Redirect } from "expo-router";

const AuthLayout: React.FC = () => {
	const { user } = useAuth();

	if (user) {
		return <Redirect href="/(tabs)" />;
	}

	return (
		<ThemedSafeAreaView className="h-full w-full">
			<KeyboardAvoidingView
				className="h-full w-full"
				behavior={Platform.OS === "ios" ? "padding" : "height"}
			>
				<Container className="w-full h-full justify-center items-center">
					<Slot />
				</Container>
			</KeyboardAvoidingView>
		</ThemedSafeAreaView>
	);
};

export default AuthLayout;
