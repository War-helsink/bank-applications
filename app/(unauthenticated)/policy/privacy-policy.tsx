import { Container, Text, ThemedSafeAreaView } from "@/shared/ui";
import { ScrollView } from "react-native";

const PrivacyPolicyScreen: React.FC = () => {
	return (
		<ThemedSafeAreaView className="h-full w-full" edges={["bottom"]}>
			<ScrollView showsVerticalScrollIndicator={false}>
				<Container className="py-4">
					<Text className="opacity-70 mb-4">
						Last updated: {new Date().getFullYear()}
					</Text>
					<Text className="mb-3">
						We value your privacy. This Privacy Policy describes how we collect,
						use, and protect your information when you use the Bank App.
					</Text>
					<Text className="text-lg font-semibold mb-2">
						Information We Collect
					</Text>
					<Text className="mb-3">
						We may collect personal information such as your name, email
						address, phone number, and transaction details to provide core
						banking features.
					</Text>
					<Text className="text-lg font-semibold mb-2">
						How We Use Information
					</Text>
					<Text className="mb-3">
						Your information is used to operate the app, process transactions,
						prevent fraud, provide customer support, and improve our services.
					</Text>
					<Text className="text-lg font-semibold mb-2">Data Security</Text>
					<Text className="mb-3">
						We implement technical and organizational measures to protect your
						data. However, no method of transmission or storage is 100% secure.
					</Text>
					<Text className="text-lg font-semibold mb-2">Your Rights</Text>
					<Text className="mb-3">
						You can request access, correction, or deletion of your personal
						data within the app or by contacting support.
					</Text>
					<Text className="text-lg font-semibold mb-2">Contact Us</Text>
					<Text className="mb-8">
						If you have questions about this policy, please contact our support
						team from the Support section.
					</Text>
				</Container>
			</ScrollView>
		</ThemedSafeAreaView>
	);
};

export default PrivacyPolicyScreen;
