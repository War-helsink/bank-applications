import { BaseFirestore, type BaseFirestoreData } from "@/core/entities/base";

export interface FriendsUserData {
	uid: string;
	firstName: string;
	secondName: string;
	lastName: string;
	avatarUrl: string;
}

export interface FriendsData extends BaseFirestoreData {
	users?: FriendsUserData[];
}

export class Friends extends BaseFirestore {
	static readonly collPath: string = "friends";

	users: FriendsUserData[];

	constructor(data: FriendsData) {
		super(data);

		this.users = data.users ? data.users : [];
	}
}
