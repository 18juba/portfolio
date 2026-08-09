<script>
  import { browser } from "$app/environment";

  import TechnologyBadge from "$lib/components/TechnologyBadge.svelte";
  import Experience from "$lib/components/Experience.svelte";
  import ProjectCard from "$lib/components/ProjectCard.svelte";
  import Education from "$lib/components/Education.svelte";

  let { data } = $props();

  const locale = $derived(data.locale);
  const t = $derived(data.translations);

  $effect(() => {
    if (browser) {
      document.documentElement.lang = locale;
    }
  });
</script>

<svelte:head>
  <title>{t.meta.title}</title>

  <meta name="description" content={t.meta.description} />
</svelte:head>

<div class="w-full py-8 px-4 sm:px-12 md:px-18 lg:px-24 xl:px-36 2xl:px-48">
  <header class="flex justify-between items-center mb-4">
    <nav
      class="flex gap-6 font-bold text-slate-50"
      aria-label={t.ui.navigation.ariaLabel}
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
          alt={t.ui.navigation.brazilAlt}
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
          alt={t.ui.navigation.englishAlt}
          class="w-10 h-10 object-contain"
        />
      </a>
    </nav>
  </header>
  <section
    class="
		mb-12 grid w-full items-center gap-8
		rounded-2xl border border-neutral-800
		bg-neutral-900 p-6
		sm:p-8
		lg:grid-cols-[1fr_auto]
		lg:gap-12 lg:p-10
	"
    aria-labelledby="hero-title"
  >
    <div class="max-w-3xl">
      <p
        class="
				mb-3 text-sm font-semibold
				uppercase tracking-wider
				text-sky-400
			"
      >
        {t.hero.greeting}
      </p>

      <h1
        id="hero-title"
        class="
				text-4xl font-bold tracking-tight
				text-neutral-100
				sm:text-5xl
				lg:text-6xl
			"
      >
        Jorge Lucas
      </h1>

      <p
        class="
				mt-3 text-xl font-medium
				text-neutral-300
				sm:text-2xl
			"
      >
        {t.hero.title}
      </p>

      <p class="mt-2 text-sm text-neutral-500">
        {t.hero.location}
        <span aria-hidden="true"> · </span>
        {t.hero.available}
      </p>

      <p
        class="
				mt-6 max-w-2xl
				text-base leading-relaxed
				text-neutral-400
				sm:text-lg
			"
      >
        {t.hero.about}
      </p>

      <div class="mt-7 flex flex-wrap gap-3">
        <a
          href={t.hero.resume_url}
          download
          class="
					inline-flex min-h-11 items-center
					justify-center gap-2
					rounded-lg bg-sky-600
					px-5 py-2.5
					font-bold
					transition-colors
					hover:bg-sky-700
				"
        >
          {t.hero.resume}
        </a>

        <a
          href="https://www.linkedin.com/in/jorge-lucas-silva"
          target="_blank"
          rel="noopener noreferrer"
          class="
					inline-flex min-h-11 items-center
					justify-center gap-2
					rounded-lg
					bg-neutral-700
					px-5 py-2.5
					font-bold
					transition-colors
					hover:bg-neutral-800
				"
        >
          <img
            src="/icons/linkedin.png"
              alt={t.ui.common.linkedinAlt}
            class="w-7 h-7 object-contain"
          />
          {t.ui.common.linkedin}

          <span class="sr-only">{t.ui.common.newTabSuffix}</span>
        </a>
      </div>
    </div>

    <!-- <figure
      class="
			mx-auto shrink-0
			lg:mx-0
		"
    >
      <img
        src="https://hqscomcafe.com.br/wp-content/uploads/2023/12/Zeca-urubu.webp"
      alt={t.ui.common.profileAlt}
        width="320"
        height="320"
        class="
				size-52 rounded-2xl
				border border-neutral-700
				bg-neutral-800
				object-cover object-center
				shadow-xl shadow-black/20
				sm:size-64
				lg:size-72
			"
      />
    </figure> -->
  </section>

  <section class="mb-12" aria-labelledby="technologies-title">
    <h2 id="technologies-title" class="text-2xl font-bold mb-4">
      {t.sections.technology}
    </h2>
    <div class="flex flex-wrap gap-4">
      {#each t.technologies as technology}
        <TechnologyBadge {...technology} />
      {/each}
    </div>
  </section>

  <section class="mb-12" aria-labelledby="projects-title">
    <h2 id="projects-title" class="text-2xl font-bold text-neutral-100 mb-6">
      {t.sections.projects}
    </h2>

    <div
      class="
			grid items-start gap-6
			md:grid-cols-2
			xl:grid-cols-3
		"
    >
      {#each t.projects as project (project.id)}
        <ProjectCard {...project} labels={{ ...t.ui.projectCard, newTabSuffix: t.ui.common.newTabSuffix }} />
      {/each}
    </div>
  </section>

  <section class="mb-12" aria-labelledby="experiences-title">
    <h2 id="experiences-title" class="text-2xl font-bold mb-4">
      {t.sections.experience}
    </h2>
    {#each t.experiences as experience}
      <Experience {...experience} labels={{ ...t.ui.experience, newTabSuffix: t.ui.common.newTabSuffix }} />
    {/each}
  </section>

  <section class="mb-12" aria-labelledby="education-title">
    <h2 id="education-title" class="mb-6 text-2xl font-bold">
      {t.sections.education}
    </h2>

    <div class="flex flex-col gap-4">
      {#each t.educationItems as education}
        <Education {...education} labels={t.ui.education} />
      {/each}
    </div>
  </section>
</div>
