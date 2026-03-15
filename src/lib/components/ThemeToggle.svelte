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
