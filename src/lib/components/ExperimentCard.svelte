<script lang="ts">
	import type { ExperimentItem } from '$lib/content/site';

	let { experiment } = $props<{ experiment: ExperimentItem }>();
</script>

<article class={`experiment-card tone-${experiment.accent}`}>
	<a class="experiment-card__media" href={experiment.href} aria-label={`Open ${experiment.title}`}>
		<img src={experiment.image} alt={experiment.imageAlt} loading="lazy" width="1440" height="1024" />
	</a>

	<div class="experiment-card__content">
		<p class="card-kicker">WebAudio / WebMIDI</p>
		<h3>{experiment.title}</h3>
		<p>{experiment.description}</p>

		<div class="button-row">
			<a class="button button--primary" href={experiment.href}>Launch</a>
			<a class="button" href={experiment.github}>GitHub</a>
		</div>
	</div>
</article>

<style>
	.experiment-card {
		position: relative;
		display: flex;
		min-width: 0;
		flex-direction: column;
		overflow: hidden;
		border: 1px solid var(--line);
		border-radius: var(--radius-lg);
		background: var(--panel-strong);
		box-shadow: var(--shadow);
	}

	.experiment-card::before {
		content: '';
		position: absolute;
		z-index: 1;
		inset: 0 auto auto 0;
		width: 100%;
		height: 0.3rem;
		background: var(--tone, var(--neutral));
	}

	.experiment-card__media {
		display: block;
		aspect-ratio: 1.4;
		overflow: hidden;
		background: var(--bg-elevated);
	}

	.experiment-card__media img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		transition: transform 220ms ease;
	}

	.experiment-card__media:hover img {
		transform: scale(1.03);
	}

	.experiment-card__content {
		display: flex;
		flex: 1;
		flex-direction: column;
		gap: 0.8rem;
		padding: 1.15rem;
	}

	.experiment-card__content :global(.button-row) {
		margin-top: auto;
	}

	h3 {
		margin: 0.2rem 0 0.55rem;
		font-size: 1.45rem;
		line-height: 1.1;
		overflow-wrap: anywhere;
	}

	p {
		margin: 0;
		color: var(--muted);
		line-height: 1.5;
		overflow-wrap: anywhere;
	}
</style>
