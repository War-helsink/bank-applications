import { Container, ThemedView, Toolbar, Text } from "@/components/shared";
import { CardTypeList } from "@/components/widgets/account";
import { useTailwind } from "tailwind-rn";

const AddAccountLayout: React.FC = () => {
	const tw = useTailwind();

	return (
		<ThemedView style={tw("h-full w-full pt-4")}>
			<Container style={tw("w-full h-full")}>
				<Toolbar style={tw("justify-center items-center py-6")}>
					<Text>Information for the user</Text>
				</Toolbar>

				<CardTypeList style={tw("pt-4")} />
			</Container>
		</ThemedView>
	);
};

export default AddAccountLayout;
