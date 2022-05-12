import type {FirebaseApp} from "firebase/app";
import type {Firestore} from "firebase/firestore";
import {collection, doc, getFirestore} from "firebase/firestore";
import Collection from "../models/Collection";
import Document from "../models/Document";

export default class fireStoreService {
    private readonly _app: FirebaseApp;

    public store: Firestore;

    constructor(app: FirebaseApp) {
        this._app = app;
        this.store = getFirestore(this._app);
    }

    collection(path: string, ...pathSegments: string[]): Collection {
        return new Collection(collection(this.store, path, ...pathSegments));
    }

    document(path: string, ...pathSegments: string[]) {
        return new Document(doc(this.store, path, ...pathSegments));
    }
}

