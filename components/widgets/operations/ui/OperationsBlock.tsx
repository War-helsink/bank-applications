import { Toolbar, Text } from "@/components/shared";

import { useThemeColor } from "@/core/hooks/useThemeColor";

export const OperationsBlock: React.FC = () => {
	const color = useThemeColor("mainSurfaceSecondaryColor");

	return (
		<Toolbar className="py-4 h-72 justify-center items-center rounded-2xl my-2">
			<Text className="font-bold">Your statement will be here 🏄</Text>
			<Text className="text-center font-light" style={{ color }}>
				It's time to start using the card, for example, top up your mobile
				phone!
			</Text>
		</Toolbar>
	);
};
