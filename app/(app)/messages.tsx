import { Container, ThemedSafeAreaView } from "@/shared/ui";

const MessagesScreen: React.FC = () => {
	return (
		<ThemedSafeAreaView className="h-full w-full" edges={["bottom"]}>
			<Container className="w-full h-full justify-center items-center"></Container>
		</ThemedSafeAreaView>
	);
};

export default MessagesScreen;
