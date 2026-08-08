<script>
	let {
		title,
		institution,
		ongoing,
        period,
	} = $props();
</script>

<article
	class="
		rounded-xl border border-neutral-800
		bg-neutral-900 p-5
	"
>
	<header
		class="
			flex flex-col gap-3
			sm:flex-row sm:items-start sm:justify-between
            mb-2
		"
	>
		<div>
			<h3 class="text-xl font-bold text-neutral-100">
				{title}
			</h3>

			<p class="mt-1 font-bold">
				{institution}
			</p>
		</div>

		{#if ongoing}
			<span
				class="
					w-fit rounded-full
					border border-neutral-700
					bg-neutral-800 px-3 py-1
					text-sm text-neutral-300
				"
			>
				Em Andamento
			</span>
		{/if}
	</header>

	{#if period}
		<div
			class="
				flex flex-wrap
				gap-x-5
				text-sm text-neutral-400
			"
		>
			{#if period}
				<p>{period}</p>
			{/if}
		</div>
	{/if}
</article>