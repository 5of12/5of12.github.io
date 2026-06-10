<script lang="ts">
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';

	type ThemeMode = 'light' | 'dark';

	const storageKey = '5of12-theme';

	let mode = $state<ThemeMode>('light');

	function getSystemTheme(): ThemeMode {
		if (!browser) {
			return 'light';
		}

		return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
	}

	function applyTheme(next: ThemeMode) {
		mode = next;

		if (!browser) {
			return;
		}

		document.documentElement.dataset.theme = next;
		localStorage.setItem(storageKey, next);
	}

	function toggleTheme() {
		applyTheme(mode === 'dark' ? 'light' : 'dark');
	}

	onMount(() => {
		if (!browser) {
			return;
		}

		const storedTheme = localStorage.getItem(storageKey);
		const nextTheme =
			storedTheme === 'light' || storedTheme === 'dark'
				? storedTheme
				: (document.documentElement.dataset.theme as ThemeMode) || getSystemTheme();

		applyTheme(nextTheme);
	});
</script>

<button
	type="button"
	class="theme-toggle"
	data-mode={mode}
	onclick={toggleTheme}
	aria-label={`Switch to ${mode === 'dark' ? 'light' : 'dark'} mode`}
	aria-pressed={mode === 'dark'}
>
	<span class="theme-toggle__track">
		<span class="theme-toggle__label">Light</span>
		<span class="theme-toggle__thumb"></span>
		<span class="theme-toggle__label">Dark</span>
	</span>
</button>

<style>
	.theme-toggle {
		padding: 0;
		border: 0;
		background: transparent;
		cursor: pointer;
	}

	.theme-toggle__track {
		position: relative;
		display: grid;
		grid-template-columns: 1fr auto 1fr;
		align-items: center;
		gap: 0.8rem;
		min-width: 10rem;
		padding: 0.4rem 0.9rem;
		border: 1px solid var(--line);
		border-radius: 999px;
		background: var(--panel-strong);
	}

	.theme-toggle__label {
		color: var(--muted);
		font-size: 0.82rem;
		font-weight: 600;
		letter-spacing: 0.08em;
		text-transform: uppercase;
	}

	.theme-toggle__thumb {
		position: relative;
		display: block;
		width: 2.15rem;
		height: 1.3rem;
		border-radius: 999px;
		background: var(--line);
	}

	.theme-toggle__thumb::before {
		content: '';
		position: absolute;
		top: 0.14rem;
		left: 0.14rem;
		width: 1.02rem;
		height: 1.02rem;
		border-radius: 50%;
		background: var(--text);
		transition: transform 180ms ease;
	}

	.theme-toggle[data-mode='dark'] .theme-toggle__thumb::before {
		transform: translateX(0.86rem);
	}

	.theme-toggle[data-mode='dark'] .theme-toggle__label:last-child,
	.theme-toggle[data-mode='light'] .theme-toggle__label:first-child {
		color: var(--text);
	}

	@media (max-width: 960px) {
		.theme-toggle,
		.theme-toggle__track {
			width: 100%;
		}

		.theme-toggle__track {
			min-height: 2.75rem;
		}
	}
</style>
