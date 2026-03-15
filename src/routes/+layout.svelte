<script lang="ts">
	import '../app.css';

	import { page } from '$app/state';
	import ThemeToggle from '$lib/components/ThemeToggle.svelte';
	import { siteMeta } from '$lib/content/site';

	let { children } = $props();

	const currentPath = $derived(page.url.pathname);

	const navigation = [
		{ label: 'Home', href: '/' },
		{ label: 'Blog', href: '/journal/' },
		{ label: 'About', href: '/about/' }
	];

	function isActive(href: string) {
		if (href === '/') {
			return currentPath === '/';
		}

		return currentPath.startsWith(href);
	}
</script>

<svelte:head>
	<title>{siteMeta.title} · Creative Technology Studio</title>
	<meta name="description" content={siteMeta.description} />
	<link rel="icon" href="/assets/5of12_Logo.png" />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=Bungee&family=Funnel+Sans:wght@300..800&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<div class="site-shell">
	<header class="site-header">
		<div class="site-header__inner">
			<a class="brand-lockup" href="/">
				<span class="brand-lockup__glyph">
					<img src="/assets/5of12_Logo.png" alt="" width="52" height="52" />
				</span>
				<span class="brand-lockup__copy">
					<span class="brand-lockup__title">5of12</span>
					<span class="brand-lockup__subtitle">Creative Studio</span>
				</span>
			</a>

			<nav class="site-nav" aria-label="Primary">
				{#each navigation as item}
					<a href={item.href} class:active={isActive(item.href)} aria-current={isActive(item.href) ? 'page' : undefined}>
						{item.label}
					</a>
				{/each}
				<a href="https://5of12.co.uk" rel="noreferrer">5of12.co.uk</a>
			</nav>

			<ThemeToggle />
		</div>
	</header>

	<main class="site-main">
		{@render children()}
	</main>

	<footer class="site-footer">
		<div class="site-footer__inner">
			<div class="site-footer__links">
				<a href="mailto:info@5of12.co.uk">Contact</a>
				<a href="https://github.com/5of12">GitHub</a>
				<a href="https://5of12.co.uk">Website</a>
			</div>
		</div>
	</footer>
</div>
