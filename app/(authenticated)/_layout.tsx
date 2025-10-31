import { Redirect, Stack } from "expo-router";
import { CardsProvider } from "@/providers/card";
import { ButtonBack } from "@/features/navigation";
import { useSession } from "@/entities/session";

const AuthenticatedLayout: React.FC = () => {
	const { session } = useSession();

	if (!session) {
		return <Redirect href="/(unauthenticated)/welcome" />;
	}

	return (
		<CardsProvider>
			<Stack screenOptions={{ headerShown: false }}>
				<Stack.Screen name="(app)" />
				<Stack.Screen name="(tabs)" />
				<Stack.Screen name="camera" />
				<Stack.Screen
					name="crop"
					options={{
						title: "Crop",
						headerShown: true,
						headerLeft: () => <ButtonBack />,
					}}
				/>
				<Stack.Screen
					name="photo"
					options={{
						title: "Photo",
						headerShown: true,
						headerLeft: () => <ButtonBack />,
					}}
				/>
				<Stack.Screen
					name="profile"
					options={{
						presentation: "modal",
						title: "Profile",
						headerShown: true,
						headerLeft: () => <ButtonBack />,
					}}
				/>
			</Stack>
		</CardsProvider>
	);
};

export default AuthenticatedLayout;
