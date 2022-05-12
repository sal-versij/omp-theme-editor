import App from "./App.svelte";

import {initializeApp} from "firebase/app";

const firebaseConfig = { // TODO: Replace with your own config
    apiKey: undefined,
    authDomain: undefined,
    projectId: undefined,
    storageBucket: undefined,
    messagingSenderId: undefined,
    appId: undefined,
};

const app = new App({
    target: document.body,
    props: {
        // app: initializeApp(firebaseConfig),
    },
});

export default app;
