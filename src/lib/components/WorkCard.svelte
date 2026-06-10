<script lang="ts">
  import type { WorkItem } from "$lib/content/site";

  let { item } = $props<{ item: WorkItem }>();

  const primaryHref = $derived(item.links[0]?.href ?? "#");
</script>

<article class={`work-card tone-${item.accent}`}>
  <a
    class="work-card__media"
    href={primaryHref}
    aria-label={`Open ${item.title}`}
  >
    {#if item.preview.type === "video"}
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
      <img
        src={item.preview.src}
        alt={item.preview.alt}
        loading="lazy"
        width="1440"
        height="900"
      />
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
        <a
          class="button {index === 0 ? 'button--primary' : ''}"
          href={link.href}
        >
          {link.label}
        </a>
      {/each}
    </div>
  </div>
</article>

<style>
  .work-card {
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

  .work-card::before {
    content: "";
    position: absolute;
    z-index: 1;
    inset: 0 auto auto 0;
    width: 100%;
    height: 0.3rem;
    background: var(--tone, var(--neutral));
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

  .work-card__media {
    position: relative;
    display: block;
    aspect-ratio: 1.4;
    overflow: hidden;
    background: var(--bg-elevated);
  }

  .work-card__media::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      105deg,
      transparent 18%,
      rgba(255, 255, 255, 0.28) 34%,
      transparent 52%
    );
    mix-blend-mode: screen;
    opacity: 0;
    transform: translateX(-120%);
  }

  .work-card:hover .work-card__media::after {
    animation: media-sheen 900ms ease;
  }

  .work-card__media :global(img),
  .work-card__media :global(video) {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 220ms ease;
  }

  .work-card__media:hover :global(img),
  .work-card__media:hover :global(video) {
    transform: scale(1.03);
  }

  .work-card__content {
    display: flex;
    min-height: 18rem;
    flex: 1;
    flex-direction: column;
    gap: 0.8rem;
    padding: 1.15rem;
  }

  .work-card__content :global(.button-row) {
    margin-top: auto;
  }

  .metric-list {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin: 1rem 0 1.2rem;
    padding: 0;
    list-style: none;
  }

  .metric-list li {
    padding: 0.45rem 0.75rem;
    border: 1px solid var(--line);
    border-radius: 999px;
    background: var(--panel);
    font-size: 0.92rem;
  }

  @keyframes media-sheen {
    0% {
      opacity: 0;
      transform: translateX(-120%);
    }

    30% {
      opacity: 0.7;
    }

    100% {
      opacity: 0;
      transform: translateX(120%);
    }
  }
</style>
