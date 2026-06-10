<script lang="ts">
  import { siteMeta } from "$lib/content/site";
  import type { JournalPost } from "$lib/content/types";

  let { data } = $props<{ data: { post: JournalPost } }>();
</script>

<svelte:head>
  <title>{data.post.title} · {siteMeta.title}</title>
  <meta name="description" content={data.post.excerpt} />
</svelte:head>

<article class="post-page">
  <header class="post-hero panel">
    <p class="section-kicker"><span>Blog</span> {data.post.formattedDate}</p>
    <h1>{data.post.title}</h1>
    <div class="post-hero__meta">
      <span>{data.post.author}</span>
      <span>{data.post.readingTime} min read</span>
    </div>
  </header>

  <div class="prose panel panel--nested">
    {@html data.post.html}
  </div>
</article>

<style>
  .post-hero__meta {
    display: flex;
    flex-wrap: wrap;
    gap: 0.8rem;
    padding-top: 0.8rem;
    color: var(--muted);
    font-weight: 600;
  }

  .prose {
    max-width: 54rem;
    margin: 1rem auto 0;
    padding: clamp(1.25rem, 2vw, 2rem);
  }

  .prose :global(> :first-child) {
    margin-top: 0;
  }

  .prose :global(h1),
  .prose :global(h2),
  .prose :global(h3),
  .prose :global(h4) {
    margin: 2rem 0 0.8rem;
    line-height: 1.08;
    letter-spacing: -0.04em;
  }

  .prose :global(h1) {
    font-size: 2.4rem;
  }

  .prose :global(h2) {
    font-size: 1.9rem;
  }

  .prose :global(h3) {
    font-size: 1.5rem;
  }

  .prose :global(p),
  .prose :global(li),
  .prose :global(blockquote) {
    color: var(--text);
    font-size: 1.04rem;
    line-height: 1.75;
  }

  .prose :global(a) {
    color: var(--coral);
    font-weight: 600;
    text-decoration: underline;
    text-underline-offset: 0.16em;
  }

  :global(:root[data-theme="dark"]) .prose :global(a) {
    color: var(--yellow);
  }

  .prose :global(ul),
  .prose :global(ol) {
    padding-left: 1.25rem;
  }

  .prose :global(img),
  .prose :global(video),
  .prose :global(iframe) {
    width: 100%;
    margin: 1.4rem 0;
    border: 1px solid var(--line);
    border-radius: 1.15rem;
    background: var(--bg-elevated);
    box-shadow: var(--shadow);
  }

  .prose :global(hr) {
    margin: 2rem 0;
    border: 0;
    border-top: 1px solid var(--line);
  }

  .prose :global(blockquote) {
    margin: 1.5rem 0;
    padding: 0.8rem 0 0.8rem 1rem;
    border-left: 3px solid var(--line-strong);
    color: var(--muted);
  }
</style>
