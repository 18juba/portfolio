<script>
	import ProjectModal from './ProjectModal.svelte';
	import ProjectTechList from './ProjectTechList.svelte';

	let {
		id,
		title,
		description,
		banner,
		technologies = [],
		priority = false,
		period,
		role,
		links,
		more,
		labels
	} = $props();

	let modalOpen = $state(false);

	const cardTitleId = $derived(`project-card-title-${id}`);

	function getInitials(projectTitle) {
		return projectTitle
			.split(/\s+/)
			.slice(0, 2)
			.map((word) => word[0])
			.join('')
			.toUpperCase();
	}

	function openModal() {
		modalOpen = true;
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
				alt={banner.alt ?? ''}
				width={banner.width ?? 1280}
				height={banner.height ?? 720}
				loading={priority ? 'eager' : 'lazy'}
				fetchpriority={priority ? 'high' : 'auto'}
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
			<h3
				id={cardTitleId}
				class="text-xl font-bold leading-tight text-neutral-100"
			>
				{title}
			</h3>

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

		<p class="mt-3 flex-1 leading-relaxed text-neutral-400 mb-4">
			{description}
		</p>

		<ProjectTechList
			{technologies}
			variant="card"
			ariaLabel={`${labels?.usedIn ?? 'Tecnologias utilizadas em'} ${title}`}
		/>

		<footer class="mt-6 flex flex-wrap items-center gap-3">
			<button
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
				{labels?.details ?? 'Ver detalhes'}
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
					{labels?.accessProject ?? 'Acessar projeto'}
					<span class="sr-only">
						{labels?.newTabSuffix ?? ', abre em uma nova aba'}
					</span>
				</a>
			{/if}
		</footer>
	</div>
</article>

<ProjectModal
	{id}
	{title}
	{banner}
	{technologies}
	{links}
	{more}
	{labels}
	bind:open={modalOpen}
/>