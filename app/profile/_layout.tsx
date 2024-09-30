import { Container, View, Button, Field } from "@/components/shared/ui";
import { useAuth } from "@/core/hooks/useAuth";
import { useTailwind } from "tailwind-rn";

const ProfileLayout: React.FC = () => {
	const { profile, logout } = useAuth();
	const tw = useTailwind();

	
	return (
		<View style={tw("h-full w-full")}>
			<Container style={tw("w-full h-full")}>
				<Field placeholder="First name" />
				<Field placeholder="Second name" />
				<Field placeholder="Last name" />
				<Button onPress={logout}>Update Profile</Button>
				<Button color="danger" onPress={logout}>
					Logout
				</Button>
			</Container>
		</View>
	);
};

export default ProfileLayout;
