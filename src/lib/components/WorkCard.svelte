<script lang="ts">
	import type { WorkItem } from '$lib/content/site';

	let { item } = $props<{ item: WorkItem }>();

	const primaryHref = $derived(item.links[0]?.href ?? '#');
</script>

<article class={`work-card tone-${item.accent}`}>
	<a class="work-card__media" href={primaryHref} aria-label={`Open ${item.title}`}>
		{#if item.preview.type === 'video'}
			<video
				aria-label={item.preview.alt}
				autoplay
				loop
				muted
				playsinline
				poster={item.preview.poster}
				preload="metadata"
			>
				<source src={item.preview.src} type="video/mp4" />
			</video>
		{:else}
			<img src={item.preview.src} alt={item.preview.alt} loading="lazy" width="1440" height="900" />
		{/if}
	</a>

	<div class="work-card__content">
		<p class="card-kicker">{item.eyebrow}</p>
		<h3>{item.title}</h3>
		<p>{item.description}</p>

		<ul class="metric-list">
			{#each item.metrics as metric}
				<li>{metric}</li>
			{/each}
		</ul>

		<div class="button-row">
			{#each item.links as link, index}
				<a class="button {index === 0 ? 'button--primary' : ''}" href={link.href}>
					{link.label}
				</a>
			{/each}
		</div>
	</div>
</article>
