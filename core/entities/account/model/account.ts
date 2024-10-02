import { BaseFirestore, type BaseFirestoreData } from "@/core/entities/base";
import type { DocumentData } from "firebase/firestore";
import { getRandomInt, validateLuhn } from "@/core/helpers";

import type { TypeCurrency, TypeName } from "@/core/types";

export interface AccountData extends BaseFirestoreData {
	uid: string;
	balance?: number;
	cardNumber?: string;
	currency?: TypeCurrency;
	name?: TypeName;
	createdAt?: Date;
}

export class Account extends BaseFirestore {
	// ==================== Class Properties ====================
	static readonly collPath: string = "accounts";

	// ==================== Class Methods ====================
	protected static convertTimestampsFromFirestore(data: DocumentData) {
		super.convertTimestampsFromFirestore(data);

		data.createdAt = data.createdAt.toDate();
	}

	protected static generateCardNumber(): string {
		let cardNumber: string;
		const prefix = "4000";
		const length = 16;

		do {
			cardNumber = prefix;

			for (let i = 0; i < length - prefix.length - 1; i++) {
				cardNumber += getRandomInt(0, 9).toString();
			}

			for (let i = 0; i <= 9; i++) {
				const candidate = cardNumber + i.toString();
				if (validateLuhn(candidate)) {
					cardNumber = candidate;
					break;
				}
			}
		} while (!validateLuhn(cardNumber));

		return cardNumber;
	}

	// ==================== Instance Properties ====================
	uid: string;
	balance: number;
	cardNumber: string;
	currency: TypeCurrency;
	name: TypeName;
	createdAt: Date;

	// ==================== Instance Methods ====================
	constructor(data: AccountData) {
		super(data);

		this.uid = data.uid;
		this.balance = data.balance ? data.balance : 0;
		this.cardNumber = data.cardNumber ? data.cardNumber : this.id;
		this.currency = data.currency ? data.currency : "UAH";
		this.name = data.name ? data.name : "Payment card";
		this.createdAt = data.createdAt ? new Date(data.createdAt) : new Date();
	}

	protected getID() {
		const cls = this.getClass();
		return cls.generateCardNumber();
	}

	setData(data: Omit<AccountData, "id" | "uid">) {
		Object.assign(this, data);
	}
}
