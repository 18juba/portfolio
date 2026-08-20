<script>
	import { tick } from 'svelte';
	import ProjectTechList from './ProjectTechList.svelte';

	let {
		id,
		title,
		banner,
		technologies = [],
		links,
		more,
		labels,
		open = $bindable(false)
	} = $props();

	let dialog = $state();

	const dialogTitleId = $derived(`project-dialog-title-${id}`);
	const dialogDescriptionId = $derived(`project-dialog-description-${id}`);

	$effect(() => {
		if (!dialog) return;

		if (open && !dialog.open) {
			dialog.showModal();
			tick().then(() => {
				dialog.querySelector('[data-close-button]')?.focus();
			});
		} else if (!open && dialog.open) {
			dialog.close();
		}
	});

	function closeModal() {
		open = false;
	}

	function handleDialogClose() {
		open = false;
	}

	function handleDialogClick(event) {
		if (event.target === dialog) {
			closeModal();
		}
	}
</script>

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
			<h2 id={dialogTitleId} class="text-2xl font-bold text-neutral-100">
				{title}
			</h2>

			<button
				data-close-button
				type="button"
				onclick={closeModal}
				aria-label={`${labels?.closeDetails ?? 'Fechar detalhes do projeto'} ${title}`}
				class="cursor-pointer select-none"
			>
				<img
					aria-hidden="true"
					src="/icons/close.webp"
					alt=""
					class="h-10 w-10 object-contain"
				/>
			</button>
		</header>

		<div class="space-y-6 p-5 sm:p-6 lg:p-8">
			{#if banner?.src}
				<figure>
					<img
						src={banner.src}
						alt={banner.alt ?? ''}
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
						{labels?.accessDemo ?? 'Acessar demonstração'}
						<span class="sr-only">
							{labels?.newTabSuffix ?? ', abre em uma nova aba'}
						</span>
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
						{labels?.sourceCode ?? 'Ver código-fonte'}
						<span class="sr-only">
							{labels?.newTabSuffix ?? ', abre em uma nova aba'}
						</span>
					</a>
				{/if}
			</div>

			{#if more?.overview}
				<section aria-labelledby={`overview-${id}`}>
					<h3 id={`overview-${id}`} class="text-xl font-bold">
						{labels?.overview ?? 'Sobre o projeto'}
					</h3>
					<p class="mt-3 max-w-4xl leading-relaxed text-neutral-300">
						{more.overview}
					</p>
				</section>
			{/if}

			{#if technologies.length > 0}
				<section aria-labelledby={`technologies-${id}`}>
					<h3 id={`technologies-${id}`} class="text-xl font-bold">
						{labels?.technologies ?? 'Tecnologias'}
					</h3>
					<ProjectTechList {technologies} variant="modal" />
				</section>
			{/if}

			{#if more?.features?.length}
				<section aria-labelledby={`features-${id}`}>
					<h3 id={`features-${id}`} class="text-xl font-bold">
						{labels?.features ?? 'Principais funcionalidades'}
					</h3>
					<ul class="mt-4 grid gap-3 sm:grid-cols-2">
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
						{labels?.gallery ?? 'Interface e funcionalidades'}
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
									<p class="leading-relaxed text-neutral-300">
										{image.description}
									</p>
									{#if image.features?.length}
										<ul
											class="
												mt-4 list-disc space-y-2 pl-5
												text-sm leading-relaxed text-neutral-400
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
					<h3 id={`results-${id}`} class="text-xl font-bold">
						{labels?.results ?? 'Resultados'}
					</h3>
					<ul class="mt-4 list-disc space-y-2 pl-5 text-neutral-300">
						{#each more.results as result}
							<li>{result}</li>
						{/each}
					</ul>
				</section>
			{/if}

			<!-- Challenges -->
			{#if more?.challenges?.length}
				<section aria-labelledby={`challenges-${id}`}>
					<h3 id={`challenges-${id}`} class="text-xl font-bold">
						{labels?.challenges ?? 'Desafios técnicos'}
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
					<h3 id={`learnings-${id}`} class="text-xl font-bold">
						{labels?.learnings ?? 'Aprendizados'}
					</h3>
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