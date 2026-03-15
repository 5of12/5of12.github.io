<script lang="ts">
	import type { IconName } from '$lib/content/site';

	let { name } = $props<{ name: IconName }>();
</script>

<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
	{#if name === 'spark'}
		<path d="M12 3v4" />
		<path d="M12 17v4" />
		<path d="M3 12h4" />
		<path d="M17 12h4" />
		<path d="m5.6 5.6 2.8 2.8" />
		<path d="m15.6 15.6 2.8 2.8" />
		<path d="m18.4 5.6-2.8 2.8" />
		<path d="m8.4 15.6-2.8 2.8" />
	{:else if name === 'compass'}
		<circle cx="12" cy="12" r="8.25" />
		<path d="m14.9 9.1-1.8 5-5 1.8 1.8-5z" />
	{:else if name === 'midi'}
		<path d="M6 8.5a6 6 0 0 1 12 0v7H6z" />
		<path d="M8.5 18v2" />
		<path d="M12 18v2" />
		<path d="M15.5 18v2" />
		<circle cx="9" cy="10.75" r=".5" fill="currentColor" stroke="none" />
		<circle cx="12" cy="9.5" r=".5" fill="currentColor" stroke="none" />
		<circle cx="15" cy="10.75" r=".5" fill="currentColor" stroke="none" />
	{:else if name === 'heart'}
		<path d="M12 20s-6.5-3.9-8.2-7.7C2.4 9.1 4 5.5 7.8 5.5c1.8 0 3.1 1 4.2 2.4 1.1-1.4 2.4-2.4 4.2-2.4 3.8 0 5.4 3.6 4 6.8C18.5 16.1 12 20 12 20Z" />
	{:else if name === 'play'}
		<circle cx="12" cy="12" r="8.25" />
		<path d="m10 8.8 5 3.2-5 3.2z" fill="currentColor" stroke="none" />
	{:else if name === 'hand'}
		<path d="M8.5 11V7.5a1.5 1.5 0 0 1 3 0V11" />
		<path d="M11.5 10V6.5a1.5 1.5 0 0 1 3 0V11" />
		<path d="M14.5 11V8.2a1.5 1.5 0 0 1 3 0v5.1c0 3.2-2.3 5.7-5.4 5.7h-.4c-2.8 0-5.1-2-5.5-4.7L5.5 10a1.5 1.5 0 0 1 2.8-1.1L8.5 11Z" />
	{:else if name === 'globe'}
		<circle cx="12" cy="12" r="8.25" />
		<path d="M3.9 12h16.2" />
		<path d="M12 3.8c2 2 3.1 5 3.1 8.2S14 18.2 12 20.2c-2-2-3.1-5-3.1-8.2s1.1-6.2 3.1-8.2Z" />
	{/if}
</svg>
