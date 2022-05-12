<script lang="ts">
    import {Router, Link, Route} from "svelte-routing";
    import TailwindCSS from "./TailwindCSS.svelte";

    import NotFound from "./pages/NotFound.svelte";
    import LoginButton from "./components/LoginButton.svelte";
    import Home from "./pages/Home.svelte";

    import type {FirebaseApp} from "firebase/app";

    import AuthService from './services/AuthService.ts';
    import FireStoreService from './services/FireStoreService.ts';
    import type {User as AuthUser} from "firebase/auth";

    export let app: FirebaseApp;

    // let authUser: AuthUser;
    //
    // const authService = new AuthService();
    // const fireStoreService = new FireStoreService(app);
    //
    // authService.addAuthStateChangedListener(user => authUser = user);
</script>
<TailwindCSS/>
<Router>
    <section class="wrapper">
        <header>
            <nav class="bg-stone-700">
                <div class="container mx-auto">
                    <div class="sm:flex">
                        <Link class="text-white text-3xl font-bold p-3" to="/">Template</Link>
                        <!-- Menus -->
                        <div class="flex-grow p-3">
                            <ul class="text-white sm:self-center text-2xl">
                                <li class="sm:inline-block">
                                    <Link class="p-3 hover:text-black-300" to="/">Home</Link>
                                </li>
                                <!--{#if (authUser)}-->
                                <!--{/if}-->
                            </ul>
                        </div>
                        <div class="p-3">
                            <!--                    <LoginButton {authService}/>-->
                        </div>
                    </div>
                </div>
            </nav>
        </header>
        <main>
            <div class="container mx-auto my-3 px-3">
                <Route path="/" component={Home}/>
                <!--{#if (authUser)}-->
                <!--{/if}-->
                <Route component={NotFound}></Route>
            </div>
        </main>
        <footer class="bg-stone-700 text-white py-3">
            <div class="container mx.auto">
                <div class="flex justify-center">
                    <p class="text-center">
                        © {new Date().getFullYear()} Template
                    </p>
                </div>
            </div>
        </footer>
    </section>
</Router>