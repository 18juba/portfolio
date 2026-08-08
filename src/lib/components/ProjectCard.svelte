<script>
  import { tick } from "svelte";

  let {
    id,
    title,
    description,
    banner,
    technologies = [],
    status,
    period,
    role,
    links,
    more,
    labels,
  } = $props();

  let dialog;
  let openButton;

  const cardTitleId = `project-card-title-${id}`;
  const dialogTitleId = `project-dialog-title-${id}`;
  const dialogDescriptionId = `project-dialog-description-${id}`;

  const technologyLabels = {
    svelte: "Svelte",
    sveltekit: "SvelteKit",
    golang: "Go",
    go: "Go",
    postgresql: "PostgreSQL",
    docker: "Docker",
    mqtt: "MQTT",
    gorm: "GORM",
    python: "Python",
    laravel: "Laravel",
    typescript: "TypeScript",
    javascript: "JavaScript",
    tailwind: "Tailwind CSS",
	nextjs: "Next.js",
	php: "PHP",
	chartjs: "Chart.js",
	figma: "Figma",
  };

  function getTechnologyLabel(technology) {
    return technologyLabels[technology.toLowerCase()] ?? technology;
  }

  function getInitials(projectTitle) {
    return projectTitle
      .split(/\s+/)
      .slice(0, 2)
      .map((word) => word[0])
      .join("")
      .toUpperCase();
  }

  async function openModal() {
    if (!dialog.open) {
      dialog.showModal();
    }

    await tick();

    dialog.querySelector("[data-close-button]")?.focus();
  }

  function closeModal() {
    dialog.close();
  }

  function handleDialogClose() {
    openButton?.focus();
  }

  function handleDialogClick(event) {
    if (event.target === dialog) {
      closeModal();
    }
  }
</script>

<article
  aria-labelledby={cardTitleId}
  class="
		flex h-full flex-col overflow-hidden
		rounded-2xl border border-neutral-800
		bg-neutral-900
	"
>
  {#if banner?.src}
    <div class="aspect-video overflow-hidden bg-neutral-950">
      <img
        src={banner.src}
        alt={banner.alt ?? ""}
        width={banner.width ?? 1280}
        height={banner.height ?? 720}
        loading="lazy"
        decoding="async"
        draggable="false"
        class="
					h-full w-full object-cover
					transition-transform duration-300
					pointer-events-none select-none
				"
      />
    </div>
  {:else}
    <div
      aria-hidden="true"
      class="
				flex aspect-video items-center justify-center
				bg-neutral-950
				text-4xl font-bold text-neutral-700
			"
    >
      {getInitials(title)}
    </div>
  {/if}

  <div class="flex flex-1 flex-col p-5">
    <header>
      <div class="flex flex-wrap items-start justify-between gap-2">
        <h3
          id={cardTitleId}
          class="text-xl font-bold leading-tight text-neutral-100"
        >
          {title}
        </h3>
      </div>

      {#if period || role}
        <p class="mt-2 text-sm font-medium text-neutral-400">
          {#if role}
            <span>{role}</span>
          {/if}

          {#if role && period}
            <span aria-hidden="true"> · </span>
          {/if}

          {#if period}
            <span>{period}</span>
          {/if}
        </p>
      {/if}
    </header>

    <p class="mt-3 flex-1 leading-relaxed text-neutral-400">
      {description}
    </p>

    {#if technologies.length > 0}
      <ul
        aria-label={`${labels?.usedIn ?? "Tecnologias utilizadas em"} ${title}`}
        class="mt-5 flex list-none flex-wrap gap-2 p-0"
      >
        {#each technologies as technology}
          <li
            class="
							inline-flex items-center gap-1.5
							rounded-full
							bg-neutral-800 px-2.5 py-1
							text-xs font-medium text-neutral-300
						"
          >
            <img
              src={`/icons/${technology}.png`}
              alt=""
              width="16"
              height="16"
              loading="lazy"
              decoding="async"
              draggable="false"
              class="size-4 object-contain pointer-events-none select-none"
            />

            <span>{getTechnologyLabel(technology)}</span>
          </li>
        {/each}
      </ul>
    {/if}

    <footer class="mt-6 flex flex-wrap items-center gap-3">
      <button
        bind:this={openButton}
        type="button"
        onclick={openModal}
        class="
					items-center justify-center
					rounded-lg bg-sky-600 px-4 py-2
					font-bold
					transition-colors
					hover:bg-sky-700
					cursor-pointer
				"
      >
        {labels?.details ?? "Ver detalhes"}
      </button>
      {#if links?.demo}
        <a
          href={links.demo}
          target="_blank"
          rel="noopener noreferrer"
          class="
						inline-flex min-h-11 items-center
						font-bold text-sky-400
						underline-offset-4
						hover:text-sky-300 hover:underline
					"
        >
          {labels?.accessProject ?? "Acessar projeto"}
          <span class="sr-only">{labels?.newTabSuffix ?? ", abre em uma nova aba"}</span>
        </a>
      {/if}
    </footer>
  </div>
</article>

<dialog
  bind:this={dialog}
  aria-labelledby={dialogTitleId}
  aria-describedby={dialogDescriptionId}
  onclose={handleDialogClose}
  onclick={handleDialogClick}
  class="
		m-auto max-h-[90dvh]
		w-[min(94vw,72rem)]
		overflow-hidden
		rounded-2xl border border-neutral-700
		bg-neutral-900 p-0
		text-neutral-100
		shadow-2xl
		backdrop:bg-black/80
		backdrop:backdrop-blur-sm
	"
>
  <div class="max-h-[90dvh] overflow-y-auto">
    <header
      class="
				sticky top-0 z-10
				flex items-start justify-between gap-4
				border-b border-neutral-800
				bg-neutral-900/95 p-5
				backdrop-blur
				sm:p-6
			"
    >
      <div>
        <h2 id={dialogTitleId} class="text-2xl font-bold text-neutral-100">
          {title}
        </h2>

        <p id={dialogDescriptionId} class="mt-1 text-neutral-400">
          {description}
        </p>
      </div>

      <button
        data-close-button
        type="button"
        onclick={closeModal}
        aria-label={`${labels?.closeDetails ?? "Fechar detalhes do projeto"} ${title}`}
		class="cursor-pointer select-none"
      >
		<img aria-hidden="true" src="/icons/close.png" alt="" class="w-10 h-10"/>
      </button>
    </header>

    <div class="space-y-6 p-5 sm:p-6 lg:p-8">
      {#if banner?.src}
        <figure>
          <img
            src={banner.src}
            alt={banner.alt ?? ""}
            width={banner.width ?? 1280}
            height={banner.height ?? 720}
            class="
							aspect-video w-full rounded-xl
							border border-neutral-800
							bg-neutral-950 object-cover
							pointer-events-none select-none
						"
          />
        </figure>
      {/if}

      <div class="flex flex-wrap gap-3">
        {#if links?.demo}
          <a
            href={links.demo}
            target="_blank"
            rel="noopener noreferrer"
            class="
							inline-flex min-h-11 items-center
							rounded-lg bg-sky-600 px-4 py-2
							font-semibold text-white
							hover:bg-sky-500
							focus-visible:outline-none
							focus-visible:ring-2
							focus-visible:ring-sky-400
						"
          >
            {labels?.accessDemo ?? "Acessar demonstração"}
            <span class="sr-only">{labels?.newTabSuffix ?? ", abre em uma nova aba"}</span>
          </a>
        {/if}

        {#if links?.repository}
          <a
            href={links.repository}
            target="_blank"
            rel="noopener noreferrer"
            class="
							inline-flex min-h-11 items-center
							rounded-lg border border-neutral-700
							bg-neutral-800 px-4 py-2
							font-semibold text-neutral-100
							hover:bg-neutral-700
							focus-visible:outline-none
							focus-visible:ring-2
							focus-visible:ring-sky-400
						"
          >
            {labels?.sourceCode ?? "Ver código-fonte"}
            <span class="sr-only">{labels?.newTabSuffix ?? ", abre em uma nova aba"}</span>
          </a>
        {/if}
      </div>

      {#if technologies.length > 0}
        <section aria-labelledby={`technologies-${id}`}>
          <h3 id={`technologies-${id}`} class="text-xl font-bold">
            {labels?.technologies ?? "Tecnologias"}
          </h3>

          <ul class="mt-4 flex list-none flex-wrap gap-2 p-0">
            {#each technologies as technology}
              <li
                class="
									inline-flex items-center gap-2
									rounded-lg border border-neutral-700
									bg-neutral-800 px-3 py-2
									text-sm font-medium text-neutral-200
								"
              >
                <img
                  src={`/icons/${technology}.png`}
                  alt=""
                  width="20"
                  height="20"
                  class="size-5 object-contain pointer-events-none select-none"
                />

                {getTechnologyLabel(technology)}
              </li>
            {/each}
          </ul>
        </section>
      {/if}

      {#if more?.overview}
        <section aria-labelledby={`overview-${id}`}>
          <h3 id={`overview-${id}`} class="text-xl font-bold">
            {labels?.overview ?? "Sobre o projeto"}
          </h3>

          <p class="mt-3 max-w-4xl leading-relaxed text-neutral-300">
            {more.overview}
          </p>
        </section>
      {/if}

      {#if more?.features?.length}
        <section aria-labelledby={`features-${id}`}>
          <h3 id={`features-${id}`} class="text-xl font-bold">
            {labels?.features ?? "Principais funcionalidades"}
          </h3>

          <ul
            class="
							mt-4 grid gap-3
							sm:grid-cols-2
						"
          >
            {#each more.features as feature}
              <li
                class="
									rounded-lg border border-neutral-800
									bg-neutral-950/50 p-4
									leading-relaxed text-neutral-300
								"
              >
                {feature}
              </li>
            {/each}
          </ul>
        </section>
      {/if}

      {#if more?.images?.length}
        <section aria-labelledby={`gallery-${id}`}>
          <h3 id={`gallery-${id}`} class="text-xl font-bold">
            {labels?.gallery ?? "Interface e funcionalidades"}
          </h3>

          <div class="mt-5 space-y-8">
            {#each more.images as image}
              <figure
                class="
									overflow-hidden rounded-xl
									border border-neutral-800
									bg-neutral-950/40
								"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  width={image.width ?? 1280}
                  height={image.height ?? 720}
                  loading="lazy"
                  decoding="async"
                  class="
										aspect-video w-full
										bg-neutral-950 object-fill
										pointer-events-none select-none
									"
                />

                <figcaption class="p-5">
                  <p
                    class="
											leading-relaxed
											text-neutral-300
										"
                  >
                    {image.description}
                  </p>

                  {#if image.features?.length}
                    <ul
                      class="
												mt-4 list-disc space-y-2
												pl-5 text-sm
												leading-relaxed
												text-neutral-400
												marker:text-sky-400
											"
                    >
                      {#each image.features as feature}
                        <li>{feature}</li>
                      {/each}
                    </ul>
                  {/if}
                </figcaption>
              </figure>
            {/each}
          </div>
        </section>
      {/if}

      {#if more?.results?.length}
        <section aria-labelledby={`results-${id}`}>
          <h3 id={`results-${id}`} class="text-xl font-bold">{labels?.results ?? "Resultados"}</h3>

          <ul class="mt-4 list-disc space-y-2 pl-5 text-neutral-300">
            {#each more.results as result}
              <li>{result}</li>
            {/each}
          </ul>
        </section>
      {/if}

      {#if more?.challenges?.length}
        <section aria-labelledby={`challenges-${id}`}>
          <h3 id={`challenges-${id}`} class="text-xl font-bold">
            {labels?.challenges ?? "Desafios técnicos"}
          </h3>

          <ul class="mt-4 list-disc space-y-2 pl-5 text-neutral-300">
            {#each more.challenges as challenge}
              <li>{challenge}</li>
            {/each}
          </ul>
        </section>
      {/if}

      {#if more?.learnings?.length}
        <section aria-labelledby={`learnings-${id}`}>
          <h3 id={`learnings-${id}`} class="text-xl font-bold">{labels?.learnings ?? "Aprendizados"}</h3>

          <ul class="mt-4 list-disc space-y-2 pl-5 text-neutral-300">
            {#each more.learnings as learning}
              <li>{learning}</li>
            {/each}
          </ul>
        </section>
      {/if}
    </div>
  </div>
</dialog>
