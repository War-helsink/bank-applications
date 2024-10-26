import { BaseFirestore, type BaseFirestoreData } from "@/core/entities/base";
import type { DocumentData } from "firebase/firestore";

export interface SupportData extends BaseFirestoreData {
	uid: string;
	text?: string;
	support?: boolean;
	createdAt?: Date;
}

export class Support extends BaseFirestore {
	static readonly collPath: string = "supports";

	uid: string;
	text: string;
	support: boolean;
	createdAt: Date;

	constructor(data: SupportData) {
		super(data);

		this.uid = data.uid;
		this.text = data.text ? data.text : "";
		this.support = data.support ? data.support : false;
		this.createdAt = data.createdAt ? new Date(data.createdAt) : new Date();
	}

	protected static convertTimestampsFromFirestore(data: DocumentData) {
		super.convertTimestampsFromFirestore(data);

		data.createdAt = data.createdAt.toDate();
	}
}
