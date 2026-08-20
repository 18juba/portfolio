<script>
  import { browser } from "$app/environment";

  import TechnologyBadge from "$lib/components/TechnologyBadge.svelte";
  import Experience from "$lib/components/Experience.svelte";
  import ProjectCard from "$lib/components/projects/ProjectCard.svelte";
  import Education from "$lib/components/Education.svelte";
  import Header from "$lib/components/Header.svelte";
  import Hero from "$lib/components/Hero.svelte";
  import Metadata from "$lib/components/Metadata.svelte";

  let { data } = $props();

  const locale = $derived(data.locale);
  const t = $derived(data.translations);


  $effect(() => {
    if (browser) {
      document.documentElement.lang = locale;
    }
  });
</script>

<Metadata data={t.meta} locale/>

<div class="w-full py-4 px-4 sm:px-12 md:px-18 lg:px-24 xl:px-36 2xl:px-48">
  <Header data={t.ui.navigation} {locale} />

  <Hero data={t.hero} common={t.ui.common} />

  <section id="projects" class="mb-12" aria-labelledby="projects-title">
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
      {#each t.projects as project, index (project.id)}
        <ProjectCard
          {...project}
          priority={index === 0}
          labels={{
            ...t.ui.projectCard,
            newTabSuffix: t.ui.common.newTabSuffix,
          }}
        />
      {/each}
    </div>
  </section>

  <section id="technologies" class="mb-12" aria-labelledby="technologies-title">
    <h2 id="technologies-title" class="text-2xl font-bold mb-4">
      {t.sections.technology}
    </h2>
    <div class="flex flex-wrap gap-4">
      {#each t.technologies as technology}
        <TechnologyBadge {...technology} />
      {/each}
    </div>
  </section>

  <section id="experience" class="mb-12" aria-labelledby="experiences-title">
    <h2 id="experiences-title" class="text-2xl font-bold mb-4">
      {t.sections.experience}
    </h2>
    {#each t.experiences as experience}
      <Experience
        {...experience}
        labels={{ ...t.ui.experience, newTabSuffix: t.ui.common.newTabSuffix }}
      />
    {/each}
  </section>

  <section id="education" class="mb-12" aria-labelledby="education-title">
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
