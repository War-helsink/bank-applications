import { KeyboardAvoidingView, Platform } from "react-native";
import { Support } from "@/widgets/support";
import { useSupport } from "@/entities/support";
import { ThemedSafeAreaView } from "@/shared/ui";

const SupportScreen: React.FC = () => {
	useSupport();

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
