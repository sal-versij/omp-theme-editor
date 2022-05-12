import type FireStoreService from '../../services/FireStoreService';
import type Collection from '../Collection';
import type Document from '../Document';

export default abstract class BaseDocument<T> {
    protected fireStoreService: FireStoreService
    protected collection: Collection;
    protected doc: Document<T>;
    public id?: string;

    constructor(fireStoreService: FireStoreService, id?: string) {
        this.fireStoreService = fireStoreService;
        this.id = id;
    }

    public abstract get __store_collectionPath(): string;

    public abstract get __store_data(): T;

    public get __store_documentPath(): string {
        return this.__store_collectionPath + '/' + this.id;
    }

    public get __store_collection(): Collection {
        if (!this.collection) {
            this.collection = this.fireStoreService.collection(this.__store_collectionPath);
        }
        return this.collection;
    }

    public get __store_document(): Document<T> {
        if (!this.doc) {
            this.doc = this.fireStoreService.document(this.__store_documentPath) as Document<T>;
        }
        return this.doc;
    }

    async writeToStore(): Promise<void> {
        if (this.id) {
            await this.__store_document.set(this.__store_data);
        } else {
            const doc = await this.__store_collection.add(this.__store_data);
            this.id = doc.reference.id;
        }
    }

    async readFromStore(): Promise<T> {
        const docSnap = await this.__store_document.get()
        if (docSnap.exists()) {
            return docSnap.data() as T;
        }
    }

    abstract updateFromStore(): Promise<void>;
}