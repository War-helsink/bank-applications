import type React from "react";
import { useRoute } from "@react-navigation/native";
import { KeyboardAvoidingView, Platform } from "react-native";
import { ThemedSafeAreaView } from "@/shared/ui";
import { ConfirmPhoneWidget } from "@/widgets/auth";

const ConfirmPhoneScreen: React.FC = () => {
	const route = useRoute();
	const { phone } = route.params as { phone: string };

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
				<ConfirmPhoneWidget phone={phone} />
			</KeyboardAvoidingView>
		</ThemedSafeAreaView>
	);
};

export default ConfirmPhoneScreen;
