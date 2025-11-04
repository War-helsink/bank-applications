import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { FRIENDS_COLLECTION } from "../config";
import { firestore } from "@/shared/utils";
import { friendsConverter } from "../lib/converter";
import type { FriendsData, FriendsUserData } from "../types";

export async function getFriends(uid: string): Promise<FriendsData | null> {
	const ref = doc(firestore, FRIENDS_COLLECTION, uid).withConverter(
		friendsConverter(),
	);
	const snap = await getDoc(ref);
	if (!snap.exists()) return null;
	return snap.data();
}

export async function createFriends(
	uid: string,
	friend: FriendsUserData,
): Promise<FriendsData> {
	const ref = doc(firestore, FRIENDS_COLLECTION, uid).withConverter(
		friendsConverter(),
	);
	const friendsData: FriendsData = { id: uid, users: [friend] };
	return await setDoc(ref, friendsData).then(() => friendsData);
}

export async function addFriend(
	uid: string,
	friendsData: FriendsData,
	friend: FriendsUserData,
): Promise<FriendsData> {
	const ref = doc(firestore, FRIENDS_COLLECTION, uid).withConverter(
		friendsConverter(),
	);
	const newFriendsData: FriendsData = {
		id: uid,
		users: [...friendsData.users, friend],
	};
	return await updateDoc(ref, { users: newFriendsData.users }).then(
		() => newFriendsData,
	);
}
