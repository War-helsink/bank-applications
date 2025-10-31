export function formatDateTime(date: Date): string {
	const hours = String(date.getHours()).padStart(2, "0");
	const minutes = String(date.getMinutes()).padStart(2, "0");

	return `${hours}:${minutes}`;
}

export function formatDateChat(date: Date): string {
	const today = new Date();
	if (date.getFullYear() !== today.getFullYear()) {
		return date.toLocaleDateString("en-US", {
			year: "numeric",
			month: "long",
			day: "numeric",
		});
	}
	if (
		date.getDate() !== today.getDate() ||
		date.getMonth() !== today.getMonth()
	) {
		return date.toLocaleDateString("en-US", {
			month: "long",
			day: "numeric",
		});
	}
	return "Today";
}

export function formatPhoneNumber(phone: string): string {
	return `+380 ${phone.slice(0, 2)} ${phone.slice(2, 5)}-${phone.slice(5)}`;
}
