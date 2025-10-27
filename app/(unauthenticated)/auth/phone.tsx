import type React from "react";
import { KeyboardAvoidingView, Platform } from "react-native";
import { ThemedSafeAreaView } from "@/shared/ui";
import { PhoneWidget } from "@/widgets/auth";

const PhoneScreen: React.FC = () => {
	return (
		<ThemedSafeAreaView
			className="flex-1 w-full"
			edges={["bottom", "left", "right"]}
		>
			<KeyboardAvoidingView
				className="h-full w-full"
				behavior={Platform.OS === "ios" ? "padding" : "height"}
				keyboardVerticalOffset={100}
			>
				<PhoneWidget />
			</KeyboardAvoidingView>
		</ThemedSafeAreaView>
	);
};

export default PhoneScreen;
