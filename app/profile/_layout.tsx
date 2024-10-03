import { Container, ThemedView } from "@/components/shared";
import { useTailwind } from "tailwind-rn";
import { ProfileScreen } from "./";

const ProfileLayout: React.FC = () => {
	const tw = useTailwind();

	return (
		<ThemedView style={tw("h-full w-full")}>
			<Container style={tw("w-full h-full")}>
				<ProfileScreen />
			</Container>
		</ThemedView>
	);
};

export default ProfileLayout;
