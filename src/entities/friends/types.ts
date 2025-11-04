export interface FriendsUserData {
	uid: string;
	firstName: string;
	secondName: string;
	lastName: string;
	avatarUrl: string | null;
}

export interface FriendsData {
	id: string;
	users: FriendsUserData[];
}
