<script>
	let { data, locale } = $props();

	let menuOpen = $state(false);

	const navItems = $derived([
		{ href: '#projects', label: data.projects },
		{ href: '#technologies', label: data.technologies },
		{ href: '#experience', label: data.experience },
		{ href: '#education', label: data.education }
	]);

	function toggleMenu() {
		menuOpen = !menuOpen;
	}

	function closeMenu() {
		menuOpen = false;
	}

	function handleNavClick() {
		closeMenu();
	}
</script>

<header
	class="
		sticky top-0 z-50
		mb-8
		border-b border-neutral-800/80
		bg-neutral-950/80
		backdrop-blur-md
	"
>
	<div class="flex items-center justify-between py-3">
		<nav
			class="hidden items-center gap-8 md:flex"
			aria-label={data.ariaLabel}
		>
			{#each navItems as item}
				<a
					href={item.href}
					class="
						text-sm font-medium text-neutral-300
						transition-colors
						hover:text-neutral-100
					"
				>
					{item.label}
				</a>
			{/each}
		</nav>

		<div class="flex items-center gap-3">
			<div
				class="flex items-center gap-1 rounded-full bg-neutral-900 p-1"
				role="group"
				aria-label={data.ariaLabel}
			>
				<a
					href="/"
					aria-current={locale === 'pt-BR' ? 'page' : undefined}
					aria-label={data.portugueseLabel}
					class="
						rounded-full p-1.5 transition-colors
						aria-[current=page]:bg-neutral-700
						hover:bg-neutral-800
					"
				>
					<img
						src="/icons/bra.webp"
						alt=""
						aria-hidden="true"
						class="h-6 w-6 object-contain"
					/>
				</a>
				<a
					href="/en"
					aria-current={locale === 'en' ? 'page' : undefined}
					aria-label={data.englishLabel}
					class="
						rounded-full p-1.5 transition-colors
						aria-[current=page]:bg-neutral-700
						hover:bg-neutral-800
					"
				>
					<img
						src="/icons/usa.webp"
						alt=""
						aria-hidden="true"
						class="h-6 w-6 object-contain"
					/>
				</a>
			</div>

			<button
				type="button"
				class="
					inline-flex items-center justify-center
					rounded-lg p-2 text-neutral-300
					transition-colors hover:bg-neutral-800
					md:hidden
				"
				aria-expanded={menuOpen}
				aria-controls="mobile-menu"
				aria-label={menuOpen ? data.menuClose : data.menuOpen}
				onclick={toggleMenu}
			>
				{#if menuOpen}
					<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
					</svg>
				{:else}
					<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
					</svg>
				{/if}
			</button>
		</div>
	</div>

	{#if menuOpen}
		<nav
			id="mobile-menu"
			class="
				flex flex-col gap-1 border-t border-neutral-800
				pb-4 pt-2 md:hidden
			"
			aria-label={data.ariaLabel}
		>
			{#each navItems as item}
				<a
					href={item.href}
					onclick={handleNavClick}
					class="
						rounded-lg px-3 py-2.5
						text-sm font-medium text-neutral-300
						transition-colors
						hover:bg-neutral-900 hover:text-neutral-100
					"
				>
					{item.label}
				</a>
			{/each}
		</nav>
	{/if}
</header>