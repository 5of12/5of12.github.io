<script lang="ts">
	import ExperimentCard from '$lib/components/ExperimentCard.svelte';
	import IconGlyph from '$lib/components/IconGlyph.svelte';
	import PostCard from '$lib/components/PostCard.svelte';
	import SocialIcon from '$lib/components/SocialIcon.svelte';
	import WorkCard from '$lib/components/WorkCard.svelte';
	import {
		companyInfo,
		contactRoutes,
		experiments,
		featuredWork,
		partners,
		playExperiences,
		services,
		siteMeta,
		studioBeliefs,
		socialLinks,
		teamPortfolios,
		technologies
	} from '$lib/content/site';
	import type { JournalPost } from '$lib/content/types';

	let { data } = $props<{ data: { latestPosts: JournalPost[] } }>();
</script>

<svelte:head>
	<title>{siteMeta.title}</title>
	<meta name="description" content={siteMeta.description} />
</svelte:head>

<section class="hero panel">
	<div class="hero__grid">
		<div class="stack stack--hero">
			<!-- <p class="section-kicker"><span>5of12</span> Creative Studio</p> -->
			<h1>Interactions with Music.</h1>
			<p class="hero__lede">
				We design playful, spatial experiences.
			</p>
			<p class="hero__copy">
				From rapid prototypes to show-ready demos and production apps, we turn complex technology into things people can feel.
			</p>

			<div class="button-row">
				<a class="button button--primary" href="#work">See our work</a>
				<a class="button" href="#contact">Contact Us</a>
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
		<p class="section-kicker"><span>Who we are</span></p>
		<h2>Creative technologists working across sound, space and play.</h2>
		<p>
			We are a UK studio experienced in spatial computing, audio technology and software delivery. We design and build immersive experiences for human interaction.
		</p>
		<div class="portfolio-links" aria-label="Team portfolios">
			<span class="micro-label">The Team</span>
			{#each teamPortfolios as person}
				<a
					href={person.href}
					target="_blank"
					rel="noreferrer"
					aria-label={`${person.fullName} portfolio`}
				>
					{person.name}<span aria-hidden="true">↗</span>
				</a>
			{/each}
		</div>
		<div class="button-row">
			<a class="button button--primary" href="/about/">About 5of12</a>
			<a class="button" href="mailto:info@5of12.co.uk">Email us</a>
		</div>
	</div>
</section>

<section class="section play-lab panel" id="play">
	<div class="play-lab__intro">
		<p class="section-kicker"><span>Play</span></p>
		<h2>We like to design, build and play.</h2>
		<p>
			5of12 builds games, instruments and spatial prototypes that invite people to poke, listen, move and discover. Our work spans musical toys to XR worlds, browser experiments and Unity hackathon builds.
		</p>
		<div class="button-row">
			<a class="button button--primary" href="#contact">Build a playful prototype</a>
			<a class="button" href="https://github.com/5of12">See experiments</a>
		</div>
	</div>

	<div class="play-lab__stage" aria-label="Playful 5of12 project visuals">
		<img class="play-lab__image play-lab__image--primary" src="/assets/ADC_VisualPossibilities.png" alt="Abstract musical pieces floating around a waveform." loading="lazy" width="1920" height="540" />
		<img class="play-lab__image play-lab__image--secondary" src="/assets/ADC_PlaygroundOfSound.png" alt="A waveform leading into a playful swinging shape." loading="lazy" width="1920" height="540" />
		<div class="play-lab__pieces" aria-hidden="true">
			<span></span>
			<span></span>
			<span></span>
			<span></span>
			<span></span>
		</div>
	</div>

	<div class="play-list" aria-label="Play project examples">
		{#each playExperiences as experience}
			<article class={`play-item tone-${experience.accent}`}>
				<div class="play-item__icon">
					<IconGlyph name={experience.icon} />
				</div>
				<div>
					<p class="card-kicker">{experience.eyebrow}</p>
					<h3>{experience.title}</h3>
					<p>{experience.description}</p>
					<a href={experience.href}>{experience.linkLabel}</a>
				</div>
			</article>
		{/each}
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

	<div class="work-technologies">
		<div class="work-technologies__head">
			<p class="section-kicker"><span>Toolkit</span></p>
			<h3>Tech we design with / for</h3>
		</div>

		<div class="technology-grid">
			{#each technologies as technology}
				<a
					class={`technology-link technology-link--${technology.logoClass}`}
					href={technology.href}
					target="_blank"
					rel="noreferrer"
				>
					<span class="technology-mark" aria-hidden="true">
						{#if technology.logo}
							<img src={technology.logo} alt="" loading="lazy" />
						{:else}
							<span class="technology-wordmark">{technology.wordmark}</span>
						{/if}
					</span>
					<span>
						<strong>{technology.name}</strong>
						<small>{technology.description}</small>
					</span>
				</a>
			{/each}
		</div>
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

	<div class="services-partners">
		<div class="services-partners__head">
			<div>
				<p class="section-kicker"><span>Partners</span></p>
				<h3>Who we work with.</h3>
			</div>
			<p>
				Teams and organisations we have collaborated with across creative technology, mobility, energy, music and spatial computing.
			</p>
		</div>

		<div class="partner-grid">
			{#each partners as partner}
				<a
					class={`partner-link partner-link--${partner.logoClass}`}
					href={partner.href}
					target="_blank"
					rel="noreferrer"
				>
					<span class="partner-mark" aria-hidden="true">
						{#if partner.logo}
							<img src={partner.logo} alt="" loading="lazy" />
						{:else}
							<span class={`partner-wordmark partner-wordmark--${partner.logoClass}`}>
								{partner.wordmark}{#if partner.logoClass === 'watershed'}<span>.</span>{/if}
							</span>
						{/if}

						{#if partner.secondaryMark}
							<span class="partner-mark__plus">+</span>
							<span class="partner-wordmark partner-wordmark--roli">{partner.secondaryMark}</span>
						{/if}
					</span>

					<span class="partner-link__meta">
						<strong>{partner.name}</strong>
						<span aria-hidden="true">Visit ↗</span>
					</span>
				</a>
			{/each}
		</div>
	</div>
</section>

<section class="section">
	<div class="section-head">
		<div>
			<p class="section-kicker"><span>Experiments</span></p>
			<h2>Web instruments and utilities.</h2>
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
		<p class="section-kicker"><span>Contact</span></p>
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
			<a href={social.href} aria-label={`${social.label}: ${social.handle}`} title={social.label}>
				<SocialIcon name={social.icon} />
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
