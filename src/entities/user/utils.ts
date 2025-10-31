import type { UserType } from "./types";

export function intiUserData(data: Partial<UserType>): UserType {
	return {
		id: "",
		email: "",
		password: "",

		firstName: "",
		secondName: "",
		lastName: "",

		theme: "os",
		phone: "",
		avatarUrl: null,

		birthday: null,
		updatedAt: null,
		createdAt: new Date(),
		...data,
	};
}
