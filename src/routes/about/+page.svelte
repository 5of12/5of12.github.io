<script lang="ts">
	import IconGlyph from '$lib/components/IconGlyph.svelte';
	import { services, siteMeta, studioPrinciples, studioStats } from '$lib/content/site';
</script>

<svelte:head>
	<title>About · {siteMeta.title}</title>
	<meta
		name="description"
		content="About 5of12, a UK Creative Technology Studio working across interaction, audio, XR and browser-based prototypes."
	/>
</svelte:head>

<section class="page-hero panel">
	<p class="section-kicker"><span>About</span> 5of12</p>
	<h1>Playful, thoughtful things for music, design and invention.</h1>
	<p class="page-intro">
		5of12 is a creative technology studio based in the UK, formed by ex-Ultraleap collaborators with more than fifteen years of combined product and interaction experience.
	</p>
</section>

<section class="section about-grid">
	<div class="stack">
		<h2>What we do</h2>
		<p>
			We design and prototype spatial interaction systems, XR experiences, playful musical tools and screen-based experiments that make emerging technology feel approachable.
		</p>
		<p>
			We believe in play as a serious tool, discovery as a way of working and adding MIDI where it is deemed appropriate.
		</p>
		<div class="button-row">
			<a class="button button--primary" href="/#work">See the work</a>
			<a class="button" href="mailto:info@5of12.co.uk">Get in touch</a>
		</div>
	</div>

	<div class="stats-grid">
		{#each studioStats as stat}
			<article class="stat-card">
				<div class="stat-card__icon">
					<IconGlyph name={stat.icon} />
				</div>
				<p class="stat-card__label">{stat.label}</p>
				<p class="stat-card__value">{stat.value}</p>
			</article>
		{/each}
	</div>
</section>

<section class="section about-feature panel">
	<div class="about-feature__media">
		<img src="/assets/work/prototyping-desk.jpg" alt="A hand testing an interactive prototype on a laptop." loading="lazy" width="1590" height="1099" />
	</div>

	<div class="about-feature__content">
		<p class="section-kicker"><span>Services</span> Studio practice</p>
		<h2>We make early ideas tangible enough to test.</h2>
		<p>
			Our work spans rapid prototypes, spatial computing, gesture systems, immersive demos, XR apps and custom tools.
		</p>
		<ul class="service-inline-list">
			{#each services as service}
				<li>{service.title}</li>
			{/each}
		</ul>
	</div>
</section>

<section class="section">
	<!-- <div class="section-head">
		<div>
			<p class="section-kicker"><span>Values</span></p>
			<h2>How we like things to feel.</h2>
		</div>
	</div> -->

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
</section>

<style>
	.about-grid {
		display: grid;
		grid-template-columns: minmax(0, 1.2fr) minmax(20rem, 0.8fr);
		gap: 1.5rem;
	}

	.stats-grid,
	.principles-grid {
		display: grid;
		gap: 1rem;
	}

	.stats-grid {
		grid-template-columns: 1fr;
		align-content: start;
	}

	.principles-grid {
		grid-template-columns: repeat(4, minmax(0, 1fr));
	}

	.stat-card,
	.principle-card {
		position: relative;
		display: flex;
		min-width: 0;
		flex-direction: column;
		padding: 1.35rem;
		overflow: hidden;
		border: 1px solid var(--line);
		border-radius: var(--radius-lg);
		background: var(--panel-strong);
		box-shadow: var(--shadow);
	}

	.principle-card::before {
		content: '';
		position: absolute;
		inset: 0 auto auto 0;
		width: 100%;
		height: 0.3rem;
		background: var(--tone, var(--neutral));
	}

	.principle-card__icon,
	.stat-card__icon {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 2.35rem;
		height: 2.35rem;
		margin-bottom: 1rem;
		padding: 0.58rem;
		border: 1px solid var(--line);
		border-radius: 999px;
		background: var(--panel);
		color: var(--tone, var(--text));
	}

	.principle-card h3 {
		margin: 0.2rem 0 0.55rem;
		font-size: 1.45rem;
		line-height: 1.1;
	}

	.principle-card p {
		margin: 0;
		color: var(--muted);
		line-height: 1.5;
	}

	.stat-card__value {
		max-width: 10ch;
		margin: 0.4rem 0 0;
		font-size: clamp(1.35rem, 2.4vw, 2rem);
		line-height: 1.04;
		letter-spacing: -0.05em;
		overflow-wrap: anywhere;
	}

	.about-feature {
		display: grid;
		grid-template-columns: minmax(0, 0.95fr) minmax(0, 1.05fr);
		gap: 1.5rem;
		align-items: center;
		padding: clamp(1.25rem, 2vw, 2rem);
	}

	.about-feature__media {
		overflow: hidden;
		border: 1px solid var(--line);
		border-radius: 1.4rem;
		background: var(--bg-elevated);
	}

	.about-feature__media img {
		width: 100%;
		height: 100%;
		aspect-ratio: 1.38;
		object-fit: cover;
		transition: transform 420ms ease;
	}

	.about-feature:hover .about-feature__media img {
		transform: scale(1.02);
	}

	.about-feature__content {
		display: grid;
		gap: 1rem;
	}

	.about-feature h2 {
		margin: 0;
		font-size: clamp(2rem, 3vw, 3.1rem);
		line-height: 1.02;
		letter-spacing: -0.05em;
		text-wrap: balance;
	}

	.about-feature p {
		margin: 0;
		color: var(--muted);
		line-height: 1.6;
	}

	.service-inline-list {
		display: flex;
		flex-wrap: wrap;
		gap: 0.6rem;
		margin: 0;
		padding: 0;
		list-style: none;
	}

	.service-inline-list li {
		padding: 0.5rem 0.75rem;
		border: 1px solid var(--line);
		border-radius: 999px;
		background: var(--panel-strong);
		font-size: 0.92rem;
		font-weight: 600;
	}

	@media (max-width: 960px) {
		.about-grid,
		.about-feature {
			grid-template-columns: 1fr;
		}

		.stats-grid {
			grid-template-columns: repeat(3, minmax(0, 1fr));
		}

		.principles-grid {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}

	@media (max-width: 720px) {
		.stats-grid,
		.principles-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
