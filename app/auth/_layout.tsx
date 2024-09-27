import { Auth } from "./";
import { View } from "react-native";
import { useTailwind } from "tailwind-rn";

const AuthLayout: React.FC = () => {
	const tw = useTailwind();

	return (
		<View style={tw("h-full w-full bg-white pt-16")}>
			<View style={tw("mx-5 w-full h-full justify-center items-center")}>
				<Auth />
			</View>
		</View>
	);
};

export default AuthLayout;
