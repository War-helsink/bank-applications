import type React from "react";
import { KeyboardAvoidingView, Platform } from "react-native";
import { LoginForm } from "@/features/auth";
import { Container, ThemedSafeAreaView } from "@/shared/ui";

const LoginScreen: React.FC = () => {
	return (
		<ThemedSafeAreaView className="h-full w-full">
			<KeyboardAvoidingView
				className="h-full w-full"
				behavior={Platform.OS === "ios" ? "padding" : "height"}
			>
				<Container className="w-full h-full justify-center items-center">
					<LoginForm />
				</Container>
			</KeyboardAvoidingView>
		</ThemedSafeAreaView>
	);
};

export default LoginScreen;
