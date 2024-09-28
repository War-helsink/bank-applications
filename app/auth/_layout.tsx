import { Auth } from "./";
import { View } from "@/components/shared/ui";
import { useTailwind } from "tailwind-rn";

const AuthLayout: React.FC = () => {
	const tw = useTailwind();

	return (
		<View style={tw("h-full w-full pt-16")}>
			<View style={tw("mx-5 w-full h-full justify-center items-center")}>
				<Auth />
			</View>
		</View>
	);
};

export default AuthLayout;
