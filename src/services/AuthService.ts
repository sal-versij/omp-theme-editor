import {
    getAuth,
    GoogleAuthProvider,
    signInWithPopup,
    signOut,
    onAuthStateChanged,
    Auth,
    User,
    NextOrObserver
} from "firebase/auth";

export default class AuthService {
    private _auth: Auth;
    private _provider: GoogleAuthProvider;

    constructor() {
    }

    get auth(): Auth {
        console.log(this._auth);
        if (!this._auth) {
            this._auth = getAuth();
            this._auth.useDeviceLanguage();
        }

        return this._auth;
    }

    get provider(): GoogleAuthProvider {
        if (!this._provider) {
            this._provider = new GoogleAuthProvider();
        }

        return this._provider;
    }

    addAuthStateChangedListener(fn: NextOrObserver<User>): AuthService {
        onAuthStateChanged(this.auth, fn);
        return this;
    }

    async login() {
        const result = await signInWithPopup(this.auth, this.provider);

        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log(user, token);
    }

    get loginBind() {
        return this.login.bind(this);
    }

    async logout() {
        return await signOut(this.auth);
    }

    get logoutBind() {
        return this.logout.bind(this);
    }
}