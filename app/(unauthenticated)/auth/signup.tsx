import type React from "react";
import { KeyboardAvoidingView, Platform } from "react-native";
import { SignUpWidget } from "@/widgets/auth";
import { ThemedSafeAreaView } from "@/shared/ui";

const SignUpScreen: React.FC = () => {
	return (
		<ThemedSafeAreaView className="h-full w-full">
			<KeyboardAvoidingView
				className="h-full w-full"
				behavior={Platform.OS === "ios" ? "padding" : "height"}
				keyboardVerticalOffset={100}
			>
				<SignUpWidget />
			</KeyboardAvoidingView>
		</ThemedSafeAreaView>
	);
};

export default SignUpScreen;
