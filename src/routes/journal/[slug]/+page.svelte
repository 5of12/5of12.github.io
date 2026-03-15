<script lang="ts">
	import { siteMeta } from '$lib/content/site';
	import type { JournalPost } from '$lib/content/types';

	let { data } = $props<{ data: { post: JournalPost } }>();
</script>

<svelte:head>
	<title>{data.post.title} · {siteMeta.title}</title>
	<meta name="description" content={data.post.excerpt} />
</svelte:head>

<article class="post-page">
	<header class="post-hero panel">
		<p class="section-kicker"><span>Blog</span> {data.post.formattedDate}</p>
		<h1>{data.post.title}</h1>
		<div class="post-hero__meta">
			<span>{data.post.author}</span>
			<span>{data.post.readingTime} min read</span>
		</div>
	</header>

	<div class="prose panel panel--nested">
		{@html data.post.html}
	</div>
</article>
