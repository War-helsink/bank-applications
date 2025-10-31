import type React from "react";
import { KeyboardAvoidingView, Platform } from "react-native";
import { LoginWidget } from "@/widgets/auth";
import { ThemedSafeAreaView } from "@/shared/ui";

const LoginScreen: React.FC = () => {
	return (
		<ThemedSafeAreaView className="h-full w-full">
			<KeyboardAvoidingView
				className="h-full w-full"
				behavior={Platform.OS === "ios" ? "padding" : "height"}
			>
				<LoginWidget />
			</KeyboardAvoidingView>
		</ThemedSafeAreaView>
	);
};

export default LoginScreen;
