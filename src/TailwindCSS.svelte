<style lang="scss" global>
  @tailwind utilities;
  @tailwind components;
  @tailwind base;
  html {
    @apply bg-white p-5;
    margin  : 0;
    padding : 0;
  }

  .card {
    @apply max-w-sm rounded rounded-lg overflow-hidden shadow-lg;
  }

  .btn {
    @apply rounded px-4 py-2 border;
  }

  .wrapper {
    @apply min-h-screen flex flex-col;

    header, footer {
      @apply flex-shrink;
    }

    main {
      @apply flex-grow
    }
  }
</style>