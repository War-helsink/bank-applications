import { Container, Text, ThemedSafeAreaView } from "@/shared/ui";
import { ScrollView } from "react-native";

const TermsOfServiceScreen: React.FC = () => {
	return (
		<ThemedSafeAreaView className="h-full w-full" edges={["bottom"]}>
			<ScrollView showsVerticalScrollIndicator={false}>
				<Container className="py-4">
					<Text className="opacity-70 mb-4">
						Last updated: {new Date().getFullYear()}
					</Text>
					<Text className="mb-3">
						By using the Bank App, you agree to these Terms of Service. Please
						read them carefully before using our services.
					</Text>
					<Text className="text-lg font-semibold mb-2">Use of Service</Text>
					<Text className="mb-3">
						You agree to use the app only for lawful purposes and in accordance
						with applicable laws and regulations.
					</Text>
					<Text className="text-lg font-semibold mb-2">
						User Responsibilities
					</Text>
					<Text className="mb-3">
						You are responsible for maintaining the confidentiality of your
						account and for all activities that occur under your account.
					</Text>
					<Text className="text-lg font-semibold mb-2">
						Limitation of Liability
					</Text>
					<Text className="mb-3">
						To the maximum extent permitted by law, the Bank is not liable for
						any indirect, incidental, or consequential damages arising from your
						use of the app.
					</Text>
					<Text className="text-lg font-semibold mb-2">Changes to Terms</Text>
					<Text className="mb-3">
						We may update these Terms from time to time. Continued use of the
						app after changes constitutes acceptance of the updated Terms.
					</Text>
					<Text className="text-lg font-semibold mb-2">Contact Us</Text>
					<Text className="mb-8">
						If you have any questions about these Terms, please contact our
						support team from the Support section.
					</Text>
				</Container>
			</ScrollView>
		</ThemedSafeAreaView>
	);
};

export default TermsOfServiceScreen;
