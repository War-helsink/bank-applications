import { View } from "@/components/shared";
import type { Account } from "@/core/entities/account";

export interface AccountSlideProps {
	width: number;
	height: number;
	account: Account;
}

export const AccountSlide: React.FC<AccountSlideProps> = ({ account }) => {
	return <View></View>;
};
