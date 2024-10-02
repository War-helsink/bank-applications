import { BaseFirestore, type BaseFirestoreData } from "@/core/entities/base";
import type { DocumentData } from "firebase/firestore";

import type { TypeCurrency, TypeName } from "@/core/types";

export interface AccountData extends BaseFirestoreData {
	uid: string;
	balance?: number;
	cardNumber?: number;
	currency?: TypeCurrency;
	name?: TypeName;
	createdAt?: Date;
}

export class Account extends BaseFirestore {
	static readonly collPath: string = "accounts";

	uid: string;
	balance: number;
	cardNumber: number;
	currency: TypeCurrency;
	name: TypeName;
	createdAt: Date;

	constructor(data: AccountData) {
		super(data);

		this.uid = data.uid;
		this.balance = data.balance ? data.balance : 0;
		this.cardNumber = data.cardNumber ? data.cardNumber : this.generateCardNumber();
		this.currency = data.currency ? data.currency : "UAH";
		this.name = data.name ? data.name : "Payment card";
		this.createdAt = data.createdAt ? new Date(data.createdAt) : new Date();
	}

	protected convertTimestampsFromFirestore(data: DocumentData) {
		super.convertTimestampsFromFirestore(data);

		data.createdAt = data.createdAt.toDate();
	}

	generateCardNumber(): number{
		return 0
	}

	setData(data: Omit<AccountData, "id" | "uid">) {
		Object.assign(this, data);
	}
}
