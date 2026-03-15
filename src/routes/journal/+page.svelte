<script lang="ts">
	import PostCard from '$lib/components/PostCard.svelte';
	import { siteMeta } from '$lib/content/site';
	import type { JournalPost } from '$lib/content/types';

	let { data } = $props<{ data: { posts: JournalPost[] } }>();
</script>

<svelte:head>
	<title>Blog · {siteMeta.title}</title>
	<meta
		name="description"
		content="Studio notes from 5of12 covering interaction design, spatial computing, Unity workflows and music tooling."
	/>
</svelte:head>

<section class="page-hero panel">
	<p class="section-kicker"><span>Blog</span></p>
	<h1>Writing from inside the work.</h1>
	<p class="page-intro">
		Thoughts and practical notes on building musical tools, spatial interfaces and experimental interaction systems.
	</p>
</section>

<section class="section">
	<div class="post-grid">
		{#each data.posts as post}
			<PostCard {post} />
		{/each}
	</div>
</section>
