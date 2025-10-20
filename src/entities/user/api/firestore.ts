import {
	collection,
	doc,
	getDoc,
	getDocs,
	or,
	query,
	setDoc,
	updateDoc,
	where,
} from "firebase/firestore";
import { USER_COLLECTION } from "../config";
import { firestore } from "@/shared/utils";
import { userConverter } from "../lib/converter";
import { intiUserData } from "../utils";
import type { CreateUserPayload, UserType } from "../types";

export async function getUser(uid: string): Promise<UserType | null> {
	const ref = doc(firestore, USER_COLLECTION, uid).withConverter(
		userConverter(),
	);
	const snap = await getDoc(ref);
	if (!snap.exists()) return null;
	return snap.data();
}

export async function getSearchUsers(searchValue: string): Promise<UserType[]> {
	const q = query(
		collection(firestore, USER_COLLECTION),
		or(
			where("firstName", "==", searchValue),
			where("secondName", "==", searchValue),
			where("lastName", "==", searchValue),
		),
	).withConverter(userConverter());

	return getDocs(q).then((querySnapshot) => {
		const documents: UserType[] = [];

		querySnapshot.forEach((doc) => {
			const document = doc.data();
			document.id = doc.id;

			documents.push(document);
		});

		return documents;
	});
}

export async function updateUser(
	uid: string,
	user: Partial<UserType>,
): Promise<void> {
	const ref = doc(firestore, USER_COLLECTION, uid).withConverter(
		userConverter(),
	);
	return await updateDoc(ref, { ...user, updatedAt: new Date() });
}

export async function createUser({
	uid,
	email,
	password,
}: CreateUserPayload): Promise<void> {
	const ref = doc(firestore, USER_COLLECTION, uid).withConverter(
		userConverter(),
	);
	return await setDoc(ref, intiUserData(uid, email, password));
}
