import { firestore } from "@/core/utils/firebase";
import {
	collection,
	onSnapshot,
	doc,
	query,
	where,
	getDoc,
	setDoc,
	getDocs,
	updateDoc,
	deleteDoc,
} from "firebase/firestore";
import type {
	FieldPath,
	Unsubscribe,
	DocumentData,
	WhereFilterOp,
	SnapshotOptions,
	CollectionReference,
	QueryDocumentSnapshot,
	FirestoreDataConverter,
} from "firebase/firestore";
import _ from "lodash";

export interface BaseFirestoreData {
	id?: string;
}

export class BaseFirestore {
	// ==================== Class Properties ====================
	static readonly collPath: string = "base";

	// ==================== Class Methods ====================
	protected static converter(): FirestoreDataConverter<
		DocumentData,
		DocumentData
	> {
		return {
			fromFirestore: (snapshot, options) =>
				this.fromFirestore(snapshot, options),
			toFirestore: (entityData) => this.toFirestore(entityData),
		};
	}

	protected static fromFirestore(
		snapshot: QueryDocumentSnapshot<DocumentData, DocumentData>,
		options?: SnapshotOptions,
	) {
		const data = snapshot.data(options);
		this.convertTimestampsFromFirestore(data);

		const entity = new this(data);

		return entity;
	}

	protected static convertTimestampsFromFirestore(_data: DocumentData) {
		//
	}

	protected static toFirestore(entityData: {
		[key: string]: unknown;
	}): DocumentData {
		const {
			id: _id,
			collRef: _collRef,
			unsubscribe: _unsubscribe,
			...data
		} = entityData;
		return data;
	}

	static async get(id: string) {
		const docRef = doc(collection(firestore, this.collPath), id).withConverter(
			this.converter(),
		);

		return getDoc(docRef)
			.then((docSnap) => {
				if (docSnap.exists()) {
					const data = docSnap.data();
					return new this({ ...data, id });
				}
				throw new Error("Error while creating.");
			})
			.catch(() => {
				throw new Error("Error while creating.");
			});
	}

	static async getAll() {
		return getDocs(
			collection(firestore, this.collPath).withConverter(this.converter()),
		)
			.then((querySnapshot) => {
				const documents: DocumentData[] = [];

				querySnapshot.forEach((doc) => {
					const document = doc.data();
					document.id = doc.id;

					documents.push(document);
				});

				return documents;
			})
			.catch(() => {
				throw new Error("Error while receiving data.");
			});
	}

	static async getAllQuery(
		fieldPath: string | FieldPath,
		opStr: WhereFilterOp,
		value: unknown,
	) {
		const q = query(
			collection(firestore, this.collPath),
			where(fieldPath, opStr, value),
		).withConverter(this.converter());

		return getDocs(q)
			.then((querySnapshot) => {
				const documents: DocumentData[] = [];

				querySnapshot.forEach((doc) => {
					const document = doc.data();
					document.id = doc.id;

					documents.push(document);
				});

				return documents;
			})
			.catch(() => {
				throw new Error("Error while receiving data.");
			});
	}

	static getCollectionRef() {
		return collection(firestore, this.collPath).withConverter(this.converter());
	}

	static getQueryCollectionRef(
		fieldPath: string | FieldPath,
		opStr: WhereFilterOp,
		value: unknown,
	) {
		return query(
			collection(firestore, this.collPath),
			where(fieldPath, opStr, value),
		).withConverter(this.converter());
	}

	// ==================== Instance Properties ====================
	protected collRef: CollectionReference<DocumentData, DocumentData>;
	protected unsubscribe: Unsubscribe | null;
	protected id: string;

	// ==================== Instance Methods ====================
	constructor(data: BaseFirestoreData) {
		const cls = this.getClass();

		this.id = data.id ? data.id : this.getID();
		this.collRef = collection(firestore, cls.collPath).withConverter(
			cls.converter(),
		);
		this.unsubscribe = null;
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

	protected getID() {
		return doc(this.collRef).id;
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
		const { collRef, unsubscribe, ...data } = this.clone();
		return _.cloneDeep(data);
	}
}
