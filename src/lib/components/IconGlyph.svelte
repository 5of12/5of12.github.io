<script lang="ts">
	import { AudioLines, CirclePlay, Compass, Globe, Hand, Heart, Sparkles } from '@lucide/svelte';
	import type { IconName } from '$lib/content/site';

	let { name } = $props<{ name: IconName }>();

	const icons = {
		spark: Sparkles,
		compass: Compass,
		midi: AudioLines,
		heart: Heart,
		play: CirclePlay,
		hand: Hand,
		globe: Globe
	};

	const Icon = $derived(icons[name as IconName]);
</script>

<Icon size="100%" strokeWidth={1.7} aria-hidden="true" />

<style>
	:global(svg) {
		display: block;
		width: 100%;
		height: 100%;
	}
</style>
