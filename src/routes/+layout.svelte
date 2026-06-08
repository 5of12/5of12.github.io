<script lang="ts">
	import '../app.css';

	import { page } from '$app/state';
	import SocialIcon from '$lib/components/SocialIcon.svelte';
	import ThemeToggle from '$lib/components/ThemeToggle.svelte';
	import { companyInfo, siteMeta, socialLinks } from '$lib/content/site';

	let { children } = $props();

	const currentPath = $derived(page.url.pathname);

	const navigation = [
		// { label: 'Home', href: '/' },
		{ label: 'Work', href: '/#work' },
		{ label: 'Play', href: '/#play' },
		{ label: 'Services', href: '/#services' },
		{ label: 'Blog', href: '/journal/' },
		{ label: 'About', href: '/about/' },
		{ label: 'Contact', href: '/#contact' }
	];

	function isActive(href: string) {
		if (href.includes('#')) {
			return false;
		}

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
			</nav>

			<ThemeToggle />
		</div>
	</header>

	<main class="site-main">
		{@render children()}
	</main>

	<footer class="site-footer">
		<div class="site-footer__inner">
			<div class="site-footer__brand">
				<p class="site-footer__eyebrow">{companyInfo.name}</p>
				<p class="site-footer__text">
					UK creative technology studio building spatial, musical and web-first tools with a focus on tactility and play.
				</p>
				<p class="site-footer__legal">
					{companyInfo.registration} · Company No. {companyInfo.companyNumber}
				</p>
			</div>

			<div class="site-footer__links">
				<a href={`mailto:${companyInfo.email}`}>Contact</a>
				<a href="https://github.com/5of12">GitHub</a>
				<a href="https://5of12.co.uk">Website</a>
				<a href={companyInfo.privacyHref}>Privacy</a>
			</div>

			<div class="site-footer__social">
				<p class="site-footer__eyebrow">Social</p>
				<div class="social-icon-row">
					{#each socialLinks as social}
						<a href={social.href} aria-label={`${social.label}: ${social.handle}`} title={social.label}>
							<SocialIcon name={social.icon} />
						</a>
					{/each}
				</div>
			</div>
		</div>
	</footer>
</div>
