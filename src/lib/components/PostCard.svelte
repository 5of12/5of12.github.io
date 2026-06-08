<script lang="ts">
	import type { JournalPost } from '$lib/content/types';

	let { post } = $props<{ post: JournalPost }>();
</script>

<article class="post-card">
	<a class="post-card__media" href={`/journal/${post.slug}/`} aria-label={`Read ${post.title}`}>
		{#if post.coverImage}
			<img src={post.coverImage} alt="" loading="lazy" />
		{:else}
			<div class="post-card__fallback">
				<span>Studio note</span>
			</div>
		{/if}
	</a>

	<div class="post-card__content">
		<div class="post-card__meta">
			<span>{post.formattedDate}</span>
			<span>{post.readingTime} min read</span>
		</div>
		<h3>
			<a href={`/journal/${post.slug}/`}>{post.title}</a>
		</h3>
		<p class="post-card__excerpt">{post.excerpt}</p>
	</div>
</article>
