export function isMovingSection(selectedFrameSection: string): boolean {
	return (
		selectedFrameSection === "topmiddle" ||
		selectedFrameSection === "middleleft" ||
		selectedFrameSection === "middleright" ||
		selectedFrameSection === "middlemiddle" ||
		selectedFrameSection === "bottommiddle"
	);
}

export function isLeftTop(selectedFrameSection: string): {
	readonly isLeft: boolean;
	readonly isTop: boolean;
} {
	const isLeft = selectedFrameSection.endsWith("left");
	const isTop = selectedFrameSection.startsWith("top");

	return { isLeft, isTop };
}

export function clamp(value: number, min: number, max: number): number {
	return Math.min(Math.max(value, min), max);
}
