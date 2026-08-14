<script>
  let { data, locale } = $props();

  const siteUrl = "https://jorge-lucas.vercel.app";

  const canonicalUrl = $derived(locale === "en" ? `${siteUrl}/en` : siteUrl);

  const alternatePtUrl = `${siteUrl}/`;
  const alternateEnUrl = `${siteUrl}/en`;

  const ogImage = "";

  const structuredData = $derived({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        name: "Jorge Lucas",
        url: siteUrl,
        jobTitle: "Computer Engineering Student",
        description: data.description,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Fortaleza",
          addressRegion: "CE",
          addressCountry: "BR",
        },
        sameAs: ["https://www.linkedin.com/in/jorge-lucas-silva"],
      },
      {
        "@type": "WebSite",
        name: "Jorge Lucas",
        url: siteUrl,
        inLanguage: locale === "en" ? "en" : "pt-BR",
      },
    ],
  });
</script>

<svelte:head>
  <title>{data.title}</title>

  <meta name="description" content={data.description} />

  <meta name="keywords" content={data.keywords} />

  <meta name="author" content="Jorge Lucas" />

  <meta
    name="robots"
    content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
  />

  <meta
    name="googlebot"
    content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
  />

  <link rel="canonical" href={canonicalUrl} />

  <link rel="alternate" hreflang="pt-BR" href={alternatePtUrl} />

  <link rel="alternate" hreflang="en" href={alternateEnUrl} />

  <link rel="alternate" hreflang="x-default" href={alternatePtUrl} />

  <meta property="og:type" content="website" />

  <meta property="og:site_name" content="Jorge Lucas" />

  <meta property="og:title" content={data.ogTitle} />

  <meta property="og:description" content={data.ogDescription} />

  <meta property="og:url" content={canonicalUrl} />

  <meta property="og:locale" content={locale === "en" ? "en_US" : "pt_BR"} />

  {#if locale === "en"}
    <meta property="og:locale:alternate" content="pt_BR" />
  {:else}
    <meta property="og:locale:alternate" content="en_US" />
  {/if}

  {#if ogImage}
    <meta property="og:image" content={ogImage} />
    <meta
      property="og:image:alt"
      content="Jorge Lucas - Portfólio profissional"
    />
  {/if}

  <meta
    name="twitter:card"
    content={ogImage ? "summary_large_image" : "summary"}
  />

  <meta name="twitter:title" content={data.ogTitle} />

  <meta name="twitter:description" content={data.ogDescription} />

  {#if ogImage}
    <meta name="twitter:image" content={ogImage} />
    <meta
      name="twitter:image:alt"
      content="Jorge Lucas - Portfólio profissional"
    />
  {/if}

  <script type="application/ld+json">
		{@html JSON.stringify(structuredData)}
  </script>
</svelte:head>
