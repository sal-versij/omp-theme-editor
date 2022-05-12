import type FireStoreService from 'src/services/FireStoreService';
import type {CollectionReference, FieldPath, QueryConstraint} from "firebase/firestore";
import {query, where} from 'firebase/firestore';

export default class Query {
    private fireStoreService: FireStoreService;
    private constrains: QueryConstraint[] = [];

    constructor(fireStoreService: FireStoreService) {
        this.fireStoreService = fireStoreService;
    }

    public lt(field: string | FieldPath, value: unknown): Query {
        this.constrains.push(where(field, '<', value));
        return this;
    }

    public leq(field: string | FieldPath, value: unknown): Query {
        this.constrains.push(where(field, '<=', value));
        return this;
    }

    public eq(field: string | FieldPath, value: unknown): Query {
        this.constrains.push(where(field, '==', value));
        return this;
    }

    public gt(field: string | FieldPath, value: unknown): Query {
        this.constrains.push(where(field, '>', value));
        return this;
    }

    public geq(field: string | FieldPath, value: unknown): Query {
        this.constrains.push(where(field, '>=', value));
        return this;
    }

    public neq(field: string | FieldPath, value: unknown): Query {
        this.constrains.push(where(field, '!=', value));
        return this;
    }

    public arrayContains(field: string | FieldPath, value: unknown): Query {
        this.constrains.push(where(field, 'array-contains', value));
        return this;
    }

    public arrayContainsAny(field: string | FieldPath, value: unknown): Query {
        this.constrains.push(where(field, 'array-contains-any', value));
        return this;
    }

    public in(field: string | FieldPath, value: unknown): Query {
        this.constrains.push(where(field, 'in', value));
        return this;
    }

    public notIn(field: string | FieldPath, value: unknown): Query {
        this.constrains.push(where(field, 'not-in', value));
        return this;
    }

    public build(ref: CollectionReference) {
        return query(ref, ...this.constrains);
    }
}