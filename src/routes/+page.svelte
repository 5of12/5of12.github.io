<script lang="ts">
	import ExperimentCard from '$lib/components/ExperimentCard.svelte';
	import IconGlyph from '$lib/components/IconGlyph.svelte';
	import PostCard from '$lib/components/PostCard.svelte';
	import {
		experiments,
		featuredWork,
		siteMeta,
		studioBeliefs,
		studioPrinciples
	} from '$lib/content/site';
	import type { JournalPost } from '$lib/content/types';

	let { data } = $props<{ data: { latestPosts: JournalPost[] } }>();
</script>

<svelte:head>
	<title>{siteMeta.title} · Creative Studio</title>
	<meta name="description" content={siteMeta.description} />
</svelte:head>

<section class="hero panel">
	<div class="hero__grid">
		<div class="stack stack--hero">
			<p class="section-kicker"><span>5of12</span> Creative Studio</p>
			<h1>Calm interfaces for playful technology.</h1>
			<p class="hero__lede">
				We make playful, thoughtful things that live between music, design, experimentation and invention.
			</p>
			<p class="hero__copy">
			</p>

			<div class="button-row">
				<a class="button button--primary" href="/journal/">Read the blog</a>
				<a class="button" href="https://5of12.co.uk">Visit 5of12.co.uk</a>
			</div>
		</div>

		<div class="hero-console panel panel--nested">
			<div class="hero-console__logo">
				<img src="/assets/5of12_Logo.png" alt="5of12 logo" width="280" height="280" />
			</div>

			<div class="hero-console__details">
				<div>
					<p class="micro-label">We believe in</p>
					<ul class="belief-list">
						{#each studioBeliefs as belief}
							<li>
								<span class={`belief-list__icon tone-${belief.accent}`}>
									<IconGlyph name={belief.icon} />
								</span>
								<span>{belief.title}</span>
							</li>
						{/each}
					</ul>
				</div>

				<div class="hero-console__rule">
					<p class="micro-label">Guiding principles</p>
					<p class="hero-console__quote">Play over posturing. Curiosity over ego. Progress over perfection.</p>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- <section class="section">
	<div class="section-head">
		<div>
			<p class="section-kicker"><span>Values</span></p>
			<h2>Human, playful, useful and curious.</h2>
		</div>
	</div>

	<div class="principles-grid">
		{#each studioPrinciples as principle}
			<article class={`principle-card tone-${principle.accent}`}>
				<div class="principle-card__icon">
					<IconGlyph name={principle.icon} />
				</div>
				<h3>{principle.title}</h3>
				<p>{principle.description}</p>
			</article>
		{/each}
	</div>
</section> -->

<section class="section">
	<div class="section-head">
		<div>
			<p class="section-kicker"><span>Work</span></p>
			<h2>Products, prototypes and tools.</h2>
		</div>
		<p class="section-copy">
			A few examples from the studio.
		</p>
	</div>

	<div class="work-grid">
		{#each featuredWork as item}
			<article class={`work-card tone-${item.accent}`}>
				<p class="card-kicker">{item.eyebrow}</p>
				<h3>{item.title}</h3>
				<p>{item.description}</p>

				<ul class="metric-list">
					{#each item.metrics as metric}
						<li>{metric}</li>
					{/each}
				</ul>

				<div class="button-row">
					{#each item.links as link}
						<a class="button {link === item.links[0] ? 'button--primary' : ''}" href={link.href}>
							{link.label}
						</a>
					{/each}
				</div>
			</article>
		{/each}
	</div>
</section>

<section class="section">
	<div class="section-head">
		<div>
			<p class="section-kicker"><span>Experiments</span></p>
			<h2>Small browser instruments and utilities.</h2>
		</div>
		<p class="section-copy">
			WebAudio and WebMIDI tools that keep the web playful and practical.
		</p>
	</div>

	<div class="experiment-grid">
		{#each experiments as experiment}
			<ExperimentCard {experiment} />
		{/each}
	</div>
</section>

<section class="section">
	<div class="section-head">
		<div>
			<p class="section-kicker"><span>Blog</span></p>
			<h2>Notes from the build process.</h2>
		</div>
		<p class="section-copy">
			Thoughts from the making.
		</p>
	</div>

	<div class="post-grid">
		{#each data.latestPosts as post}
			<PostCard {post} />
		{/each}
	</div>

	<div class="section-cta">
		<a class="button" href="/journal/">View all posts</a>
	</div>
</section>
