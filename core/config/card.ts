export const CARD_DEMO_NUMBER = "*** ***** ***** 1234";

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

export const CardTypeGradients: Record<
	CardType,
	{
		color: string;
		colors: [string, string];
		start: [number, number];
		end: [number, number];
	}
> = {
	[CardType.Payment]: {
		color: "#fff",
		colors: ["#4A00E0", "#8E2DE2"],
		start: [0, 0],
		end: [1, 1],
	},
	[CardType.Children]: {
		color: "#fff",
		colors: ["#76FF7A", "#0575E6"],
		start: [0, 0],
		end: [1, 1],
	},
	[CardType.White]: {
		color: "#000",
		colors: ["#F7F7F7", "#BDBDBD"],
		start: [0, 0],
		end: [1, 1],
	},
	[CardType.Black]: {
		color: "#fff",
		colors: ["#000000", "#434343"],
		start: [0, 0],
		end: [1, 1],
	},
};
