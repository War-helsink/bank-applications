import { BaseFirestore, type BaseFirestoreData } from "@/core/entities/base";
import type { DocumentData } from "firebase/firestore";

export interface UserProfileData extends BaseFirestoreData {
	firstName?: string;
	secondName?: string;
	lastName?: string;

	avatarUrl?: string | null;
	theme?: string;

	password?: string;
	email?: string;
	phone?: string;

	birthday?: Date;
	updatedAt?: Date;
	createdAt?: Date;
}

export class UserProfile extends BaseFirestore {
	static readonly collPath: string = "users";

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

	constructor(data: UserProfileData) {
		super(data);

		this.firstName = data.firstName ? data.firstName : "";
		this.secondName = data.secondName ? data.secondName : "";
		this.lastName = data.lastName ? data.lastName : "";

		this.avatarUrl = data.avatarUrl ? data.avatarUrl : null;
		this.theme = data.theme ? data.theme : "os";

		this.password = data.password ? data.password : "";
		this.email = data.email ? data.email : "";
		this.phone = data.phone ? data.phone : "";

		this.birthday = data.birthday ? new Date(data.birthday) : null;
		this.updatedAt = data.updatedAt ? new Date(data.updatedAt) : null;
		this.createdAt = data.createdAt ? new Date(data.createdAt) : new Date();
	}

	protected static convertTimestampsFromFirestore(data: DocumentData) {
		super.convertTimestampsFromFirestore(data);

		if (data.birthday) {
			data.birthday = data.birthday.toDate();
		}
		if (data.updatedAt) {
			data.updatedAt = data.updatedAt.toDate();
		}
		data.createdAt = data.createdAt.toDate();
	}

	setData(data: Omit<UserProfileData, "id" | "updatedAt">) {
		Object.assign(this, { ...data, updatedAt: new Date() });
	}
}
