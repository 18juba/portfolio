<script>
  import "./layout.css";
  import favicon from "$lib/assets/favicon.png";
  import { dev } from '$app/environment';
  import { injectAnalytics } from '@vercel/analytics/sveltekit';
  import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';
  import '@fontsource-variable/google-sans/wght.css';

  let { children } = $props();

  injectAnalytics({ mode: dev ? 'development' : 'production' });
  injectSpeedInsights();
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
</svelte:head>

{@render children()}
