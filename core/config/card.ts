export enum CardType {
	Payment = "payment",
	Children = "children",
	White = "white",
	Black = "black",
}

export const CardTypeDisplayNames: Record<CardType, string> = {
	[CardType.Payment]: "Payment card",
	[CardType.Children]: "Children's",
	[CardType.White]: "White",
	[CardType.Black]: "Black",
};

export const CardTypeDescriptions: Record<CardType, string> = {
	[CardType.Payment]: "A modern and sleek payment card for everyday use.",
	[CardType.Children]: "A playful and minimalistic card designed for children.",
	[CardType.White]: "A clean and elegant white card for simplicity and style.",
	[CardType.Black]: "A premium black card with a sophisticated, high-end feel.",
};

export const CardTypeGradients: Record<CardType, { colors: string[] }> = {
	[CardType.Payment]: { colors: ["#4A00E0", "#8E2DE2"] },
	[CardType.Children]: { colors: ["#00F260", "#0575E6"] },
	[CardType.White]: { colors: ["#FFFFFF", "#EDEDED"] },
	[CardType.Black]: { colors: ["#000000", "#434343"] },
};
