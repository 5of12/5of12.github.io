<script lang="ts">
  import type { JournalPost } from "$lib/content/types";

  let { post } = $props<{ post: JournalPost }>();
</script>

<article class="post-card">
  <a
    class="post-card__media"
    href={`/journal/${post.slug}/`}
    aria-label={`Read ${post.title}`}
  >
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

<style>
  .post-card {
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

  .post-card__media {
    display: block;
    aspect-ratio: 1.4;
    overflow: hidden;
    background: var(--bg-elevated);
  }

  .post-card__media img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 220ms ease;
  }

  .post-card__media:hover img {
    transform: scale(1.03);
  }

  .post-card__content {
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: 0.8rem;
    padding: 1.15rem;
  }

  .post-card__meta {
    display: flex;
    flex-wrap: wrap;
    gap: 0.8rem;
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

  .post-card__excerpt {
    display: -webkit-box;
    overflow: hidden;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    line-clamp: 3;
  }

  .post-card__fallback {
    display: flex;
    height: 100%;
    align-items: end;
    padding: 1rem;
    background:
      linear-gradient(145deg, var(--coral-wash), transparent 55%),
      linear-gradient(180deg, var(--bg-elevated), var(--panel-strong));
  }

  .post-card__fallback span {
    padding: 0.4rem 0.7rem;
    border: 1px solid var(--line);
    border-radius: 999px;
    background: var(--panel);
    font-size: 0.82rem;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }
</style>
