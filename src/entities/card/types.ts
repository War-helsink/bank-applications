import type { CardType } from "./config/card";
import type { Currency, PaymentNetwork } from "@/shared/config";

export interface Card {
	id: string;
	uid: string;
	balance: number;
	cardNumber: string;
	cardType: CardType;
	currency: Currency;
	createdAt: Date;
	expirationDate: string;
	paymentNetwork: PaymentNetwork;
	cvc: string;
}

export interface CreateCardProps {
	uid: string;
	cardType: CardType;
	paymentNetwork: PaymentNetwork;
	currency: Currency;
}
