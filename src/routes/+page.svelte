<script lang="ts">
	import ExperimentCard from '$lib/components/ExperimentCard.svelte';
	import IconGlyph from '$lib/components/IconGlyph.svelte';
	import PostCard from '$lib/components/PostCard.svelte';
	import WorkCard from '$lib/components/WorkCard.svelte';
	import {
		contactRoutes,
		experiments,
		featuredWork,
		services,
		siteMeta,
		studioBeliefs,
		socialLinks
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
				We build playful, human-designed spatial experiences, musical tools and interaction prototypes.
			</p>
			<p class="hero__copy">
				From rapid prototypes to show-ready demos and production apps, 5of12 turns complex technology into things people can touch, hear and remember.
			</p>

			<div class="button-row">
				<a class="button button--primary" href="#work">See our work</a>
				<a class="button" href="#contact">Contact the studio</a>
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

				<!-- <div class="hero-console__rule">
					<p class="micro-label">Guiding principles</p>
					<p class="hero-console__quote">Software should bring joy. Play every day. Deliver Quality.</p>
				</div> -->
			</div>
		</div>
	</div>
</section>

<section class="section studio-band panel">
	<div class="studio-band__media">
		<img src="/assets/work/studio-team.jpg" alt="The 5of12 team at a creative technology event." loading="lazy" width="1590" height="1201" />
	</div>

	<div class="studio-band__content">
		<p class="section-kicker"><span>Studio</span> Who we are</p>
		<h2>Creative technologists working across sound, space and play.</h2>
		<p>
			We are a UK studio experienced in spatial computing, audio technology and software delivery. We design and build immersive experiences for human interaction.
		</p>
		<div class="button-row">
			<a class="button button--primary" href="/about/">About 5of12</a>
			<a class="button" href="mailto:info@5of12.co.uk">Email us</a>
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

<section class="section" id="work">
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
			<WorkCard {item} />
		{/each}
	</div>
</section>

<section class="section" id="services">
	<div class="section-head">
		<div>
			<p class="section-kicker"><span>Services</span></p>
			<h2>What we help build.</h2>
		</div>
		<p class="section-copy">
			Focused creative technology work for teams exploring interaction, audio and spatial interfaces.
		</p>
	</div>

	<div class="service-grid">
		{#each services as service}
			<article class={`service-item tone-${service.accent}`}>
				<div class="service-item__icon">
					<IconGlyph name={service.icon} />
				</div>
				<div>
					<h3>{service.title}</h3>
					<p>{service.description}</p>
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

<section class="section connect-panel" id="contact">
	<div>
		<p class="section-kicker"><span>Contact</span> Say hello</p>
		<h2>Let's build together.</h2>
	</div>

	<div class="contact-route-grid">
		{#each contactRoutes as route}
			<article class="contact-route">
				<h3>{route.title}</h3>
				<p>{route.description}</p>
				<a class="button" href={route.href}>{route.label}</a>
			</article>
		{/each}
	</div>

	<div class="social-strip" aria-label="Social links">
		{#each socialLinks as social}
			<a href={social.href}>
				<span>{social.label}</span>
				<strong>{social.handle}</strong>
			</a>
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
