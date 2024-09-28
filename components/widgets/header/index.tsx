import { Container, ThemedText } from "@/components/shared/ui";
import { useTailwind } from "tailwind-rn";

export const Header: React.FC = () => {
	const tw = useTailwind();

	return (
		<Container style={tw("flex flex-row items-center")}>
			<ThemedText>Header</ThemedText>
		</Container>
	);
};
