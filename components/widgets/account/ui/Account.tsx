import { Text } from "@/components/shared";

import { useAuth } from "@/core/hooks/useAuth";
import { useTailwind } from "tailwind-rn";

export const Account: React.FC = () => {
	const tw = useTailwind();
	const { profile } = useAuth();

	if (profile === null) {
		return;
	}

	return <Text>Account</Text>;
};
