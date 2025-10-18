import type { UserType } from "./types";

export function intiUserData(
	uid: string,
	email: string,
	password: string,
): UserType {
	return {
		id: uid,
		email: email,
		password: password,

		firstName: "",
		secondName: "",
		lastName: "",

		theme: "os",
		phone: "",
		avatarUrl: null,

		birthday: null,
		updatedAt: null,
		createdAt: new Date(),
	};
}
