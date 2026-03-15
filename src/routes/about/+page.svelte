<script lang="ts">
	import IconGlyph from '$lib/components/IconGlyph.svelte';
	import { siteMeta, studioPrinciples, studioStats } from '$lib/content/site';
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
			<a class="button button--primary" href="https://5of12.co.uk">Visit 5of12.co.uk</a>
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
