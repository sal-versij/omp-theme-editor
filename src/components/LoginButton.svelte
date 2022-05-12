<script lang="ts">
    import type {User} from "firebase/auth";
    import type AuthService from "../services/AuthService.ts";

    export let authService: AuthService;
    let user: User;

    authService.addAuthStateChangedListener(u => {
        user = u;
    });
</script>

{#if user}
    <button type="button"
            class="btn border border-gray-400 text-gray-400 hover:bg-gray-600 hover:text-gray-100 flex items-center"
            on:click={authService.logoutBind}>
        <img src="{user.photoURL}" alt="{user.displayName}" class="rounded rounded-full mr-2" width="30" height="30"/>
        {user.displayName}
    </button>
{:else}
    <button type="button"
            class="btn border border-gray-400 text-gray-400 hover:bg-gray-600 hover:text-gray-100"
            on:click={authService.loginBind}>
        Login
    </button>
{/if}

