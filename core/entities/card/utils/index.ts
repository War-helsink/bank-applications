import { getRandomInt, validateLuhn } from "@/core/helpers";
import { PaymentNetwork } from "@/core/config/payment";

export function getPrefixPaymentNetwork(
	paymentNetwork: PaymentNetwork,
): string {
	if (paymentNetwork === PaymentNetwork.Visa) {
		return "4";
	}
	return "5";
}

export function generateCardNumber(paymentNetwork: PaymentNetwork): string {
	let cardNumber = "";
	const length = 16;
	const prefix = getPrefixPaymentNetwork(paymentNetwork);

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

export function generateExpirationDate(yearsToAdd = 5): string {
	const currentDate = new Date();
	const expirationDate = new Date(
		currentDate.getFullYear() + yearsToAdd,
		currentDate.getMonth(),
	);

	const month = (expirationDate.getMonth() + 1).toString().padStart(2, "0");
	const year = expirationDate.getFullYear().toString().slice(-2);

	return `${month}/${year}`;
}

export function generateCVC(): string {
	let cvv = "";
	for (let i = 0; i < 3; i++) {
		cvv += getRandomInt(0, 9).toString();
	}

	return cvv;
}
