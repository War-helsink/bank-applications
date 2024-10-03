import { AuthScreen } from "./";
import { Container, ThemedView } from "@/components/shared";
import { useTailwind } from "tailwind-rn";

const AuthLayout: React.FC = () => {
	const tw = useTailwind();

	return (
		<ThemedView style={tw("h-full w-full pt-16")}>
			<Container style={tw("w-full h-full justify-center items-center")}>
				<AuthScreen />
			</Container>
		</ThemedView>
	);
};

export default AuthLayout;
