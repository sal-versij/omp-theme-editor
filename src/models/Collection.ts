import type {CollectionReference, DocumentData} from "firebase/firestore";
import {addDoc, collection, doc, getDocs} from "firebase/firestore";
import type Query from "./Query";
import Document from "./Document";

export default class Collection {
    public reference: CollectionReference;

    constructor(reference: CollectionReference) {
        this.reference = reference;
    }

    collection(path: string, ...pathSegments: string[]): Collection {
        return new Collection(collection(this.reference, path, ...pathSegments));
    }

    document(path: string, ...pathSegments: string[]) {
        return new Document<{}>(doc(this.reference, path, ...pathSegments));
    }

    async add(data: DocumentData): Promise<Document<DocumentData>> {
        return new Document<DocumentData>(await addDoc(this.reference, data));
    }

    async get<T>(query: Query): Promise<T[]> {
        const response = await getDocs(query.build(this.reference));

        return response.docs
            .filter(doc => doc.exists())
            .map(doc => doc.data() as T);
    }
}