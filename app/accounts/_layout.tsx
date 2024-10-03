import { Container, ThemedView } from "@/components/shared";
import { useTailwind } from "tailwind-rn";

const AccountsLayout: React.FC = () => {
	const tw = useTailwind();

	return (
		<ThemedView style={tw("h-full w-full pt-16")}>
			<Container style={tw("w-full h-full justify-center items-center")}>
				
			</Container>
		</ThemedView>
	);
};

export default AccountsLayout;
