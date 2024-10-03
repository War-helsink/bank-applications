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
