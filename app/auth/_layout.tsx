import { Auth } from "./";
import { ThemedView } from "@/components/shared/ui";
import { useTailwind } from "tailwind-rn";

const AuthLayout: React.FC = () => {
	const tw = useTailwind();

	return (
		<ThemedView style={tw("h-full w-full pt-16")}>
			<ThemedView style={tw("mx-5 w-full h-full justify-center items-center")}>
				<Auth />
			</ThemedView>
		</ThemedView>
	);
};

export default AuthLayout;
