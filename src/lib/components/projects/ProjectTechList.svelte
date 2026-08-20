<script>
	import { getTechnologyLabel } from '$lib/utils/technology.js';

	let {
		technologies = [],
		variant = 'card',
		ariaLabel = undefined
	} = $props();
</script>

{#if technologies.length > 0}
	<ul
		aria-label={ariaLabel}
		class={[
			'flex list-none flex-wrap gap-2 p-0',
			variant === 'modal' && 'mt-4'
		]}
	>
		{#each technologies as technology}
			<li
				class={[
					'inline-flex items-center font-medium text-neutral-300',
					variant === 'card'
						? 'gap-1.5 rounded-full bg-neutral-800 px-2.5 py-1 text-xs'
						: 'gap-2 rounded-lg border border-neutral-700 bg-neutral-800 px-3 py-2 text-sm text-neutral-200'
				]}
			>
				<img
					src={`/icons/${technology}.png`}
					alt=""
					width={variant === 'card' ? 16 : 20}
					height={variant === 'card' ? 16 : 20}
					loading="lazy"
					decoding="async"
					draggable="false"
					class={[
						'object-contain pointer-events-none select-none',
						variant === 'card' ? 'size-4' : 'size-5'
					]}
				/>
				<span>{getTechnologyLabel(technology)}</span>
			</li>
		{/each}
	</ul>
{/if}