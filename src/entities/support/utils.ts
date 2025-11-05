import type { SupportMessageType } from "./types";

export function generateSupportMessage(
	uid: string,
	text: string,
): Omit<SupportMessageType, "id"> {
	return {
		uid,
		text,
		support: false,
		createdAt: new Date(),
	};
}
