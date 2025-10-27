export type UserType = {
	id: string;

	firstName: string;
	secondName: string;
	lastName: string;

	avatarUrl: string | null;
	theme: string;

	password: string;
	email: string;
	phone: string;

	birthday: Date | null;
	updatedAt: Date | null;
	createdAt: Date;
};

export type CreateUserPayload = {
	uid: string;
	email: string;
	password: string;

	firstName: string;
	secondName: string;
	lastName: string;
	phone: string;
};
