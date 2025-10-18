import { ThemedSafeAreaView } from "@/shared/ui";
import { Support } from "@/widgets/support";
import { KeyboardAvoidingView, Platform } from "react-native";

const SupportScreen: React.FC = () => {
	return (
		<ThemedSafeAreaView className="h-full w-full" edges={["top"]}>
			<KeyboardAvoidingView
				className="h-full w-full"
				behavior={Platform.OS === "ios" ? "padding" : "height"}
			>
				<Support className="flex-1" />
			</KeyboardAvoidingView>
		</ThemedSafeAreaView>
	);
};

export default SupportScreen;
