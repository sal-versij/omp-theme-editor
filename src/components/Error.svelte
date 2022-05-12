<script lang="ts">
    export let error: Error;
    console.error(error);
</script>

<div class="alert alert-danger">
    {error.message}
</div>