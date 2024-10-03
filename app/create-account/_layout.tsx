import { View } from "react-native";
import { Container, ThemedView, Toolbar, Text } from "@/components/shared";
import { useTailwind } from "tailwind-rn";

import { CartType } from "@/core/config/account";

const CreateAccountLayout: React.FC = () => {
	const tw = useTailwind();

	return (
		<ThemedView style={tw("h-full w-full pt-4")}>
			<Container style={tw("w-full h-full")}>
				<Toolbar style={tw("justify-center items-center py-6")}>
					<Text>Information for the user</Text>
				</Toolbar>

				<View>
					
				</View>
			</Container>
		</ThemedView>
	);
};

export default CreateAccountLayout;
