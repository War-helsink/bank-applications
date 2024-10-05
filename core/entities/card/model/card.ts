import { BaseFirestore, type BaseFirestoreData } from "@/core/entities/base";
import type { DocumentData } from "firebase/firestore";

import { CardType } from "@/core/config/card";
import { Currency } from "@/core/config/currency";
import { PaymentNetwork } from "@/core/config/payment";
import {
	generateExpirationDate,
	generateCVC,
	generateCardNumber,
} from "../utils";

export interface CardData extends BaseFirestoreData {
	uid: string;
	balance?: number;
	cardNumber?: string;
	cardType?: CardType;
	currency?: Currency;
	createdAt?: Date;
	expirationDate?: string;
	paymentNetwork?: PaymentNetwork;
	cvc?: string;
}

export class Card extends BaseFirestore {
	// ==================== Class Properties ====================
	static readonly collPath: string = "cards";

	// ==================== Class Methods ====================
	protected static convertTimestampsFromFirestore(data: DocumentData) {
		super.convertTimestampsFromFirestore(data);

		data.createdAt = data.createdAt.toDate();
	}

	// ==================== Instance Properties ====================
	uid: string;
	balance: number;
	cardNumber: string;
	cardType: CardType;
	currency: Currency;
	createdAt: Date;
	expirationDate: string;
	paymentNetwork: PaymentNetwork;
	cvc: string;

	// ==================== Instance Methods ====================
	constructor(data: CardData) {
		super(data);

		this.uid = data.uid;
		this.balance = data.balance ? data.balance : 0;
		this.cardNumber = data.cardNumber ? data.cardNumber : this.id;
		this.currency = data.currency ? data.currency : Currency.UAH;
		this.cardType = data.cardType ? data.cardType : CardType.Payment;
		this.createdAt = data.createdAt ? new Date(data.createdAt) : new Date();
		this.expirationDate = data.expirationDate
			? data.expirationDate
			: generateExpirationDate();
		this.cvc = data.cvc ? data.cvc : generateCVC();
		this.paymentNetwork = data.paymentNetwork
			? data.paymentNetwork
			: PaymentNetwork.Mastercard;
	}

	protected getID() {
		return generateCardNumber(
			this.paymentNetwork ? this.paymentNetwork : PaymentNetwork.Mastercard,
		);
	}

	setData(data: Omit<CardData, "id" | "uid">) {
		Object.assign(this, data);
	}
}
