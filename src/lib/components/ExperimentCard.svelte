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
