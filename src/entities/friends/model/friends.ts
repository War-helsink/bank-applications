import { BaseFirestore, type BaseFirestoreData } from "@/shared/model";

export interface FriendsUserData {
	uid: string;
	firstName: string;
	secondName: string;
	lastName: string;
	avatarUrl: string | null;
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

	async addUsers(userData: FriendsUserData) {
		if (this.users.findIndex((user) => userData.uid === user.uid) === -1) {
			this.users.push(userData);
			return this.update();
		}
	}
}
