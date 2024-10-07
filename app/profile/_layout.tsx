import { Container, ThemedView } from "@/components/shared";
import { ProfileScreen } from "./";

const ProfileLayout: React.FC = () => {
	return (
		<ThemedView className="h-full w-full">
			<Container className="w-full h-full">
				<ProfileScreen />
			</Container>
		</ThemedView>
	);
};

export default ProfileLayout;
