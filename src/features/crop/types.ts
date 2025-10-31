export interface Dimensions {
	readonly width: number;
	readonly height: number;
}

export interface Position {
	readonly x: number;
	readonly y: number;
}

export interface Translation {
	readonly translationX: number;
	readonly translationY: number;
}

export type Bounds = Dimensions & Position;
