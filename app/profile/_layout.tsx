import { Container, View } from "@/components/shared";
import { useTailwind } from "tailwind-rn";
import { ProfileScreen } from "./";

const ProfileLayout: React.FC = () => {
	const tw = useTailwind();

	return (
		<View style={tw("h-full w-full")}>
			<Container style={tw("w-full h-full")}>
				<ProfileScreen />
			</Container>
		</View>
	);
};

export default ProfileLayout;
