import { Container, View } from "@/components/shared";
import { useTailwind } from "tailwind-rn";

const AccountLayout: React.FC = () => {
	const tw = useTailwind();

	return (
		<View style={tw("h-full w-full pt-16")}>
			<Container style={tw("w-full h-full justify-center items-center")}>
				
			</Container>
		</View>
	);
};

export default AccountLayout;
