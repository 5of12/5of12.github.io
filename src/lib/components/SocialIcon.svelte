<script lang="ts">
	import type { SocialIconName } from '$lib/content/site';

	let { name } = $props<{ name: SocialIconName }>();
</script>

<svg viewBox="0 0 24 24" aria-hidden="true">
	{#if name === 'instagram'}
		<rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" stroke-width="2" />
		<circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" stroke-width="2" />
		<circle cx="17.5" cy="6.5" r="1.15" />
	{:else if name === 'linkedin'}
		<rect x="3" y="3" width="18" height="18" rx="2" fill="none" stroke="currentColor" stroke-width="2" />
		<path d="M8 10v7M8 7.6v.01M12 17v-7M12 13.4a3.4 3.4 0 0 1 6.8 0V17" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
	{:else if name === 'youtube'}
		<path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8ZM9.5 15.6V8.4L15.8 12l-6.3 3.6Z" />
	{:else if name === 'github'}
		<path d="M12 .3A12 12 0 0 0 8.2 23.7c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .3Z" />
	{/if}
</svg>
