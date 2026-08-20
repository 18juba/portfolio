<script>
  import "./layout.css";
  import favicon from "$lib/assets/favicon.png";

  import '@fontsource-variable/google-sans/wght.css';

  let { children } = $props();
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
</svelte:head>

{@render children()}
