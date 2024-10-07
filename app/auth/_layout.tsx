import { AuthScreen } from "./";
import { Container, ThemedView } from "@/components/shared";

const AuthLayout: React.FC = () => {
	return (
		<ThemedView className="h-full w-full pt-16">
			<Container className="w-full h-full justify-center items-center">
				<AuthScreen />
			</Container>
		</ThemedView>
	);
};

export default AuthLayout;
