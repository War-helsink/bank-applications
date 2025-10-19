export type SessionUser = {
	uid: string;
	email: string | null;
	displayName: string | null;
	photoURL: string | null;
};

export type SessionResponse = {
	idToken: string;
};

export type SessionResult = {
	ok: boolean;
	error?: string;
};
