import { firestore } from "@/core/utils/firebase";
import {
	collection,
	onSnapshot,
	doc,
	getDoc,
	setDoc,
	updateDoc,
	deleteDoc,
} from "firebase/firestore";
import type {
	Unsubscribe,
	DocumentData,
	SnapshotOptions,
	CollectionReference,
	QueryDocumentSnapshot,
	FirestoreDataConverter,
} from "firebase/firestore";
import _ from "lodash";

export interface BaseFirestoreData {
	id: string;
}

export class BaseFirestore {
	static readonly collPath: string = "base";

	protected collRef: CollectionReference<DocumentData, DocumentData>;
	protected unsubscribe: Unsubscribe | null;
	id: string;

	constructor(data: BaseFirestoreData) {
		this.collRef = collection(
			firestore,
			(this.constructor as typeof BaseFirestore).collPath,
		).withConverter(this.converter());
		this.unsubscribe = null;
		this.id = data.id;
	}

	async get(): Promise<this> {
		const docRef = doc(this.collRef, this.id);

		return getDoc(docRef)
			.then((docSnap) => {
				if (docSnap.exists()) {
					const data = docSnap.data();
					data.id = this.id;

					this.updateFromData(data);

					return this;
				}
				throw new Error("Error while creating.");
			})
			.catch(() => {
				throw new Error("Error while creating.");
			});
	}

	async create(): Promise<this> {
		const docRef = doc(this.collRef, this.id);
		const documentData = this.toData();

		return setDoc(docRef, documentData)
			.then(() => {
				return this;
			})
			.catch(() => {
				throw new Error("Error while creating.");
			});
	}

	async update(): Promise<this> {
		const docRef = doc(this.collRef, this.id);
		const documentData = this.toData();

		return updateDoc(docRef, documentData)
			.then(() => {
				return this;
			})
			.catch(() => {
				throw new Error("Error during update.");
			});
	}

	async delete(): Promise<this> {
		const docRef = doc(this.collRef, this.id);

		return deleteDoc(docRef)
			.then(() => {
				return this;
			})
			.catch(() => {
				throw new Error("Error while deleting.");
			});
	}

	subscribeDocumentChanged(callback: (data: this) => void): void {
		const docRef = doc(this.collRef, this.id);

		if (this.unsubscribe === null) {
			this.unsubscribe = onSnapshot(
				docRef,
				(docSnap) => {
					if (docSnap.exists()) {
						const cls = this.getClass();
						const documentNew = docSnap.data();
						documentNew.id = this.id;

						callback(new cls(documentNew));
					}
				},
				() => null,
			);
		}
	}

	unsubscribeDocumentChanged(): void {
		if (this.unsubscribe) {
			this.unsubscribe();
			this.unsubscribe = null;
		}
	}

	protected converter(): FirestoreDataConverter<DocumentData, DocumentData> {
		return {
			fromFirestore: (snapshot, options) =>
				this.fromFirestore(snapshot, options),
			toFirestore: (entityData) => this.toFirestore(entityData),
		};
	}

	protected fromFirestore(
		snapshot: QueryDocumentSnapshot<DocumentData, DocumentData>,
		options?: SnapshotOptions,
	) {
		const data = snapshot.data(options);
		this.convertTimestampsFromFirestore(data);

		const entity = Object.create(Object.getPrototypeOf(this));
		Object.assign(entity, data);

		return entity;
	}

	protected convertTimestampsFromFirestore(_data: DocumentData) {
		//
	}

	protected toFirestore(entityData: { [key: string]: unknown }): DocumentData {
		const {
			id: _id,
			collRef: _collRef,
			unsubscribe: _unsubscribe,
			...data
		} = entityData;
		return data;
	}

	protected updateFromData(data: { [key: string]: unknown }) {
		const cls = this.getClass();
		Object.assign(this, new cls(data));
	}

	protected getClass() {
		return this.constructor as any;
	}

	clone(): this {
		const cls = this.getClass();
		const newEntity = new cls(this);
		return newEntity;
	}

	toData(): object {
		return _.cloneDeep(this.clone());
	}
}
