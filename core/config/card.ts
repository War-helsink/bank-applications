export enum Currency {
	UAH = "UAH",
	USD = "USD",
	EUR = "EUR",
}

export enum CartType {
	Payment = "payment",
	Children = "children",
	White = "white",
	Black = "black",
}

export const CartTypeDisplayNames: Record<CartType, string> = {
	[CartType.Payment]: "Payment card",
	[CartType.Children]: "Children's",
	[CartType.White]: "White",
	[CartType.Black]: "Black",
};

export const CartTypeDescriptions: Record<CartType, string> = {
	[CartType.Payment]: "A modern and sleek payment card for everyday use.",
	[CartType.Children]: "A playful and minimalistic card designed for children.",
	[CartType.White]: "A clean and elegant white card for simplicity and style.",
	[CartType.Black]: "A premium black card with a sophisticated, high-end feel.",
};

export const CartTypeGradients: Record<CartType, { colors: string[] }> = {
	[CartType.Payment]: { colors: ["#4A00E0", "#8E2DE2"] },
	[CartType.Children]: { colors: ["#00F260", "#0575E6"] },
	[CartType.White]: { colors: ["#FFFFFF", "#EDEDED"] },
	[CartType.Black]: { colors: ["#000000", "#434343"] },
};
