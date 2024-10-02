import { Account } from "@/core/entities/account";
import { useEffect, useState } from "react";

export const useAccounts = (uid: string) => {
	const [accounts, setAccounts] = useState<Account[]>([]);

	useEffect(() => {
		Account.getAllQuery("uid", "==", uid).then((accounts) =>
			setAccounts(accounts as Account[]),
		);
	}, [uid]);

	return accounts;
};
