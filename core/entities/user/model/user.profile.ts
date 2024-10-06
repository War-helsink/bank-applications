import { BaseFirestore, type BaseFirestoreData } from "@/core/entities/base";
import type { DocumentData } from "firebase/firestore";

export interface UserProfileData extends BaseFirestoreData {
	firstName?: string;
	secondName?: string;
	lastName?: string;
	email?: string;
	phone?: string;
	createdAt?: Date;
}

export class UserProfile extends BaseFirestore {
	static readonly collPath: string = "users";

	firstName: string;
	secondName: string;
	lastName: string;
	email: string;
	phone: string;
	createdAt: Date;

	constructor(data: UserProfileData) {
		super(data);

		this.firstName = data.firstName ? data.firstName : "";
		this.secondName = data.secondName ? data.secondName : "";
		this.lastName = data.lastName ? data.lastName : "";
		this.email = data.email ? data.email : "";
		this.phone = data.phone ? data.phone : "";
		this.createdAt = data.createdAt ? new Date(data.createdAt) : new Date();
	}

	protected static convertTimestampsFromFirestore(data: DocumentData) {
		super.convertTimestampsFromFirestore(data);

		data.createdAt = data.createdAt.toDate();
	}

	setData(data: Omit<UserProfileData, "id">) {
		Object.assign(this, data);
	}
}
