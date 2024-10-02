import diff from "microdiff";

export function hasObjectChanged(obj1: object, obj2: object): boolean {
	const differences = diff(obj1, obj2);
	return differences.length > 0;
}

export function getRandomInt(min: number, max: number) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function validateLuhn(cardNumber: string) {
	let sum = 0;
	let shouldDouble = false;

	for (let i = cardNumber.length - 1; i >= 0; i--) {
		let digit = Number.parseInt(cardNumber[i], 10);

		if (shouldDouble) {
			digit *= 2;
			if (digit > 9) {
				digit -= 9;
			}
		}

		sum += digit;
		shouldDouble = !shouldDouble;
	}

	return sum % 10 === 0;
}
