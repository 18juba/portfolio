<script>
  let { title, company, companyUrl, startDate, endDate, startPeriod, endPeriod, tasks, labels } =
    $props();
</script>

<article
	class="
		rounded-xl
		bg-neutral-800 p-6
	"
>
	<header class="mb-4">
		<h3 class="text-lg font-bold text-neutral-100 sm:text-xl">
			{title}
		</h3>

		<div
			class="
				mt-2 flex flex-wrap items-center gap-x-2 gap-y-1
				text-sm text-neutral-300
			"
		>
			{#if companyUrl}
				<a
					href={companyUrl}
					target="_blank"
					rel="noopener noreferrer"
					class="
						font-bold
						underline-offset-4
						hover:text-sky-400 hover:underline
						focus-visible:rounded-sm
						focus-visible:outline-none
						focus-visible:ring-2
						focus-visible:ring-sky-400
						focus-visible:ring-offset-2
						focus-visible:ring-offset-neutral-800
					"
				>
					{company}
					<span class="sr-only">{labels?.newTabSuffix ?? ", abre em uma nova aba"}</span>
				</a>
			{:else}
				<span class="font-semibold text-neutral-200">
					{company}
				</span>
			{/if}

			<span aria-hidden="true" class="text-neutral-600">•</span>

			<p>
				<time datetime={startDate}>{startPeriod}</time> {labels?.separator ?? "a"} <time datetime={endDate}>{endPeriod}</time>
			</p>
		</div>
	</header>

	{#if tasks.length > 0}
		<ul
			class="
				list-disc space-y-2 pl-5
				text-sm leading-relaxed text-neutral-50
				marker:text-sky-400
				sm:text-base
			"
		>
			{#each tasks as task}
				<li class="pl-1">
					{task}
				</li>
			{/each}
		</ul>
	{/if}
</article>