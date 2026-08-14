<script>
  let { data, locale } = $props();
</script>

<header class="flex justify-between items-center mb-4">
  <nav
    class="flex gap-6 font-bold text-slate-50"
    aria-label={data.ariaLabel}
  >
    <a
      href="/"
      aria-current={locale === "pt-BR" ? "page" : undefined}
      class="p-1 rounded-full cursor-pointer
      		aria-[current=page]:bg-neutral-700
      "
    >
      <img
        src="/icons/bra.png"
        alt={data.brazilAlt}
        class="w-10 h-10 object-contain"
      />
    </a>
    <a
      href="/en"
      aria-current={locale === "en" ? "page" : undefined}
      class="p-1 rounded-full cursor-pointer
        aria-[current=page]:bg-neutral-700
      "
    >
      <img
        src="/icons/usa.png"
        alt={data.englishAlt}
        class="w-10 h-10 object-contain"
      />
    </a>
  </nav>
</header>
