import type React from "react";
import { KeyboardAvoidingView, Platform } from "react-native";
import { SignUpForm } from "@/features/auth";
import { Container, ThemedSafeAreaView } from "@/shared/ui";

const SignUpScreen: React.FC = () => {
	return (
		<ThemedSafeAreaView className="h-full w-full">
			<KeyboardAvoidingView
				className="h-full w-full"
				behavior={Platform.OS === "ios" ? "padding" : "height"}
			>
				<Container className="w-full h-full justify-center items-center">
					<SignUpForm />
				</Container>
			</KeyboardAvoidingView>
		</ThemedSafeAreaView>
	);
};

export default SignUpScreen;
