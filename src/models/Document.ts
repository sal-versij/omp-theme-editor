import Collection from "./Collection";
import {collection, doc, setDoc, getDoc} from "firebase/firestore";
import type {
    DocumentReference,
    DocumentData,
    PartialWithFieldValue,
    SetOptions,
    WithFieldValue,
    DocumentSnapshot
} from "firebase/firestore";

export default class Document<T> {
    public reference: DocumentReference<T>;

    constructor(reference: DocumentReference<T>) {
        this.reference = reference;
    }

    collection(path: string, ...pathSegments: string[]): Collection {
        return new Collection(collection(this.reference, path, ...pathSegments));
    }

    document(path: string, ...pathSegments: string[]): Document<DocumentData> {
        return new Document<DocumentData>(doc(this.reference, path, ...pathSegments));
    }

    async set(data: WithFieldValue<T>): Promise<void> {
        await setDoc(this.reference, data)
    }

    async partialSet(data: PartialWithFieldValue<T>, options: SetOptions): Promise<void> {
        return await setDoc(this.reference, data, options);
    }

    async get(): Promise<DocumentSnapshot<{}>> {
        return await getDoc(this.reference);
    }
}