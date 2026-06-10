<script lang="ts">
	import {
		faGithub,
		faInstagram,
		faLinkedinIn,
		faYoutube,
		type IconDefinition
	} from '@fortawesome/free-brands-svg-icons';
	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
	import type { SocialIconName } from '$lib/content/site';

	let { name } = $props<{ name: SocialIconName }>();

	const icons: Record<SocialIconName, IconDefinition> = {
		instagram: faInstagram,
		linkedin: faLinkedinIn,
		youtube: faYoutube,
		github: faGithub
	};

	const icon = $derived(icons[name as SocialIconName]);
</script>

<span aria-hidden="true">
	<FontAwesomeIcon {icon} />
</span>

<style>
	span,
	:global(svg) {
		display: block;
		width: 100%;
		height: 100%;
	}
</style>
