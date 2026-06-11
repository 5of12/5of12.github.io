<script lang="ts">
  import ExperimentCard from "$lib/components/ExperimentCard.svelte";
  import IconGlyph from "$lib/components/IconGlyph.svelte";
  import PostCard from "$lib/components/PostCard.svelte";
  import SocialIcon from "$lib/components/SocialIcon.svelte";
  import WorkCard from "$lib/components/WorkCard.svelte";
  import {
    companyInfo,
    contactRoutes,
    experiments,
    featuredWork,
    partners,
    playApps,
    playGames,
    playPlugins,
    services,
    siteMeta,
    studioBeliefs,
    socialLinks,
    teamPortfolios,
    technologies,
  } from "$lib/content/site";
  import type { JournalPost } from "$lib/content/types";

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
      <p class="hero__lede">We design playful, spatial experiences.</p>
      <p class="hero__copy">
        From rapid prototypes to show-ready demos and production apps, we turn
        complex technology into things people can feel.
      </p>

      <div class="button-row">
        <a class="button button--primary" href="#play">See what we make</a>
        <a class="button" href="#contact">Contact Us</a>
      </div>
    </div>

    <div class="hero-console panel panel--nested">
      <div class="hero-console__logo">
        <img
          src="/assets/5of12_Glow.png"
          alt="5of12 glow logo"
          width="280"
          height="280"
        />
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

<section class="section section-cluster play-catalog" id="play">
  <div class="cluster-heading">
    <p class="section-kicker"><span>Play</span></p>
    <h2>Apps, Games & Plugins for curious hands & ears.</h2>
    <p>
      Products we've released, playful worlds to explore, and new musical
      tools currently taking shape in the studio.
    </p>
  </div>

  <div class="product-group">
    <div class="product-group__heading">
      <p class="section-kicker"><span>Apps</span></p>
      <h3>Download & Play.</h3>
    </div>
    <div class="app-grid">
      {#each playApps as product}
        <article class={`app-item tone-${product.accent}`}>
          <div class={`app-item__media app-item__media--${product.imageStyle}`}>
            <img
              src={product.image}
              alt={product.imageAlt}
              loading="lazy"
              width="512"
              height="512"
            />
          </div>
          <div class="app-item__content">
            <div class="app-item__meta">
              <span>{product.status}</span>
              <span>{product.platform}</span>
            </div>
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <div class="app-item__links">
              {#each product.links as link}
                <a class="app-item__link" href={link.href}
                  >{link.label}<span aria-hidden="true"> ↗</span></a
                >
              {/each}
            </div>
          </div>
        </article>
      {/each}
    </div>
  </div>

  <div class="product-group">
    <div class="product-group__heading">
      <p class="section-kicker"><span>Games</span></p>
      <h3>Musical puzzles & playful prototypes.</h3>
    </div>
    <div class="app-grid app-grid--wide">
      {#each playGames as product}
        <article class={`app-item tone-${product.accent}`}>
          <div class={`app-item__media app-item__media--${product.imageStyle}`}>
            <img
              src={product.image}
              alt={product.imageAlt}
              loading="lazy"
              width="1280"
              height="720"
            />
          </div>
          <div class="app-item__content">
            <div class="app-item__meta">
              <span>{product.status}</span>
              <span>{product.platform}</span>
            </div>
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <div class="app-item__links">
              {#each product.links as link}
                <a class="app-item__link" href={link.href}
                  >{link.label}<span aria-hidden="true"> ↗</span></a
                >
              {/each}
            </div>
          </div>
        </article>
      {/each}
    </div>
  </div>

  <div class="product-group">
    <div class="product-group__heading">
      <p class="section-kicker"><span>Plugins</span></p>
      <h3>Tools for your favorite DAW.</h3>
    </div>
    <div class="app-grid app-grid--single">
      {#each playPlugins as product}
        <article class={`app-item tone-${product.accent}`}>
          <div class={`app-item__media app-item__media--${product.imageStyle}`}>
            <img
              src={product.image}
              alt={product.imageAlt}
              loading="lazy"
              width="1920"
              height="540"
            />
          </div>
          <div class="app-item__content">
            <div class="app-item__meta">
              <span>{product.status}</span>
              <span>{product.platform}</span>
            </div>
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p class="coming-soon">Coming soon...</p>
          </div>
        </article>
      {/each}
    </div>
  </div>
</section>

<section class="section section-cluster" id="work">
  <div class="cluster-heading">
    <p class="section-kicker"><span>Work</span></p>
    <h2>From first sketch to finished experience.</h2>
    <p>
      Creative technology services, a broad production toolkit and trusted
      partners for ambitious interaction work.
    </p>
    <div class="work-hero-media">
      <img
        src="/assets/work/work-hero.jpg"
        alt="A creative technologist working with a 3D hand model and node-based material tools."
        loading="lazy"
        width="1589"
        height="1099"
      />
    </div>
  </div>

  <div class="section-head">
    <div>
      <p class="section-kicker"><span>Selected work</span></p>
      <h2>Products, prototypes and systems.</h2>
    </div>
    <p class="section-copy">A few examples from the studio.</p>
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
  <div class="section-head">
    <div>
      <p class="section-kicker"><span>Capabilities</span></p>
      <h2>What we help build.</h2>
    </div>
    <p class="section-copy">
      Focused creative technology work for teams exploring interaction, audio
      and spatial interfaces.
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
        Teams and organisations we have collaborated with across creative
        technology, mobility, energy, music and spatial computing.
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
              <span
                class={`partner-wordmark partner-wordmark--${partner.logoClass}`}
              >
                {partner.wordmark}{#if partner.logoClass === "watershed"}<span
                    >.</span
                  >{/if}
              </span>
            {/if}

            {#if partner.secondaryMark}
              <span class="partner-mark__plus">+</span>
              <span class="partner-wordmark partner-wordmark--roli"
                >{partner.secondaryMark}</span
              >
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

<section class="section section-cluster" id="research">
  <div class="cluster-heading">
    <p class="section-kicker"><span>R&amp;D</span></p>
    <h2>Experiments and notes from the build process.</h2>
    <p>
      Experiments, prototypes and field notes from our ongoing research into
      sound, spatial computing and new forms of interaction.
    </p>
  </div>

  <div>
    <div class="section-head">
      <div>
        <p class="section-kicker"><span>Blog</span></p>
        <h2>Notes from the build process.</h2>
      </div>
      <p class="section-copy">Thoughts from the making.</p>
    </div>

    <div class="post-grid">
      {#each data.latestPosts as post}
        <PostCard {post} />
      {/each}
    </div>

    <div class="section-cta">
      <a class="button" href="/journal/">View all posts</a>
    </div>
  </div>

  <div class="subsection">
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
  </div>
</section>

<section class="section studio-band panel" id="about">
  <div class="studio-band__media">
    <img
      src="/assets/work/studio-team.jpg"
      alt="The 5of12 team at a creative technology event."
      loading="lazy"
      width="1590"
      height="1201"
    />
  </div>

  <div class="studio-band__content">
    <p class="section-kicker"><span>About</span></p>
    <h2>Creative technologists working across sound, space and play.</h2>
    <p>
      We are a UK studio experienced in spatial computing, audio technology and
      software delivery. We design and build immersive experiences for human
      interaction.
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
      <a
        href={social.href}
        aria-label={`${social.label}: ${social.handle}`}
        title={social.label}
      >
        <SocialIcon name={social.icon} />
      </a>
    {/each}
  </div>
</section>

<style>
  .hero {
    padding: clamp(1.5rem, 2vw, 2rem);
  }

  .hero__grid,
  .about-grid {
    display: grid;
    grid-template-columns: minmax(0, 1.2fr) minmax(20rem, 0.8fr);
    gap: 1.5rem;
  }

  .stack--hero {
    justify-content: center;
    padding: 0.5rem 0.2rem 0.3rem;
  }

  .hero h1 {
    max-width: 8ch;
    margin: 0;
    font-size: clamp(3rem, 6vw, 5.75rem);
    line-height: 0.94;
    letter-spacing: -0.06em;
    text-wrap: balance;
  }

  .hero__lede {
    max-width: 42rem;
    margin: 0;
    font-size: clamp(1.2rem, 2.1vw, 1.55rem);
    line-height: 1.4;
  }

  .hero__copy {
    margin: 0;
    color: var(--muted);
    font-size: 1rem;
    line-height: 1.6;
  }

  .hero-console {
    display: grid;
    grid-template-rows: auto 1fr;
    gap: 1.5rem;
    padding: 1.25rem;
  }

  .hero-console__logo {
    display: flex;
    min-height: 16rem;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    border: 1px solid var(--line);
    border-radius: 1.55rem;
    background: var(--bg-elevated);
  }

  .hero-console__logo img {
    width: min(100%, 18rem);
    height: auto;
    filter: drop-shadow(0 20px 36px rgba(0, 0, 0, 0.12));
  }

  .hero-console__details {
    display: grid;
    gap: 1rem;
  }

  .section-cluster {
    padding: clamp(1.25rem, 2.5vw, 2rem);
    border: 1px solid var(--line);
    border-radius: var(--radius-xl);
    background: var(--panel);
    box-shadow: var(--shadow);
  }

  .cluster-heading {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(18rem, 25rem);
    gap: 1.5rem;
    align-items: end;
    padding-bottom: clamp(2rem, 5vw, 4rem);
    margin-bottom: clamp(2rem, 5vw, 4rem);
    border-bottom: 1px solid var(--line-strong);
  }

  .cluster-heading .section-kicker {
    grid-column: 1 / -1;
  }

  .cluster-heading h2 {
    max-width: 17ch;
    margin: 0;
    font-size: clamp(2.5rem, 5vw, 4.8rem);
    line-height: 0.96;
    letter-spacing: -0.06em;
    text-wrap: balance;
  }

  .cluster-heading > p:not(.section-kicker) {
    margin: 0;
    color: var(--muted);
    font-size: 1.05rem;
    line-height: 1.6;
  }

  .work-hero-media {
    grid-column: 1 / -1;
    min-height: clamp(18rem, 42vw, 34rem);
    margin-top: clamp(0.5rem, 2vw, 1.5rem);
    overflow: hidden;
    border: 1px solid var(--line);
    border-radius: var(--radius-lg);
    background: var(--bg-elevated);
  }

  .work-hero-media img {
    width: 100%;
    height: 100%;
    min-height: inherit;
    object-fit: cover;
    object-position: center 48%;
    transition: transform 420ms ease;
  }

  #work:hover .work-hero-media img {
    transform: scale(1.015);
  }

  .app-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    overflow: hidden;
    border-top: 1px solid var(--line);
    border-left: 1px solid var(--line);
    border-radius: var(--radius-xl);
    background: var(--panel);
  }

  .app-grid--single {
    grid-template-columns: minmax(0, 1fr);
  }

  .app-grid--single .app-item {
    grid-template-columns: minmax(16rem, 0.9fr) minmax(0, 1.1fr);
  }

  .product-group + .product-group {
    margin-top: clamp(2.5rem, 6vw, 4.5rem);
    padding-top: clamp(1.5rem, 3vw, 2.25rem);
    border-top: 1px solid var(--line-strong);
  }

  .product-group__heading {
    display: grid;
    grid-template-columns: auto minmax(0, 1fr);
    gap: 1rem;
    align-items: center;
    margin-bottom: 1.25rem;
  }

  .product-group__heading h3 {
    margin: 0;
    font-size: clamp(1.5rem, 2.6vw, 2.2rem);
    line-height: 1.08;
    letter-spacing: -0.04em;
  }

  .app-item {
    position: relative;
    display: grid;
    grid-template-columns: minmax(9rem, 0.8fr) minmax(0, 1.2fr);
    min-width: 0;
    min-height: 22rem;
    border-right: 1px solid var(--line);
    border-bottom: 1px solid var(--line);
    background: var(--panel-strong);
  }

  .app-item::before {
    content: "";
    position: absolute;
    z-index: 2;
    inset: 0 auto auto 0;
    width: 100%;
    height: 0.3rem;
    background: var(--tone);
  }

  .app-item__media {
    display: flex;
    min-width: 0;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    border-right: 1px solid var(--line);
    background:
      radial-gradient(
        circle at 50% 42%,
        color-mix(in srgb, var(--tone) 38%, transparent),
        transparent 58%
      ),
      var(--bg-elevated);
  }

  .app-item__media img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 280ms ease;
  }

  .app-item__media--icon,
  .app-item__media--logo {
    padding: clamp(1.5rem, 3vw, 2.5rem);
  }

  .app-item__media--icon img {
    width: min(100%, 11rem);
    height: auto;
    aspect-ratio: 1;
    border-radius: 24%;
    box-shadow: 0 1.25rem 2.5rem rgba(0, 0, 0, 0.2);
  }

  .app-item__media--logo img {
    width: min(100%, 16rem);
    height: auto;
    object-fit: contain;
    filter: drop-shadow(0 1rem 2rem rgba(0, 0, 0, 0.16));
  }

  .app-item:hover .app-item__media img {
    transform: scale(1.025);
  }

  .app-item__content {
    display: flex;
    min-width: 0;
    flex-direction: column;
    padding: clamp(1.25rem, 2.5vw, 2rem);
  }

  .app-item__meta {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: auto;
  }

  .app-item__meta span {
    padding: 0.4rem 0.65rem;
    border: 1px solid var(--line);
    border-radius: 999px;
    color: var(--muted);
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.06em;
    text-transform: uppercase;
  }

  .app-item__meta span:first-child {
    border-color: color-mix(in srgb, var(--tone) 55%, var(--line));
    background: color-mix(in srgb, var(--tone) 14%, transparent);
    color: var(--text);
  }

  .app-item h3 {
    margin: 2rem 0 0.6rem;
    font-size: clamp(2rem, 3.5vw, 3.2rem);
    line-height: 0.98;
    letter-spacing: -0.055em;
  }

  .app-item p {
    margin: 0;
    color: var(--muted);
    line-height: 1.55;
  }

  .app-item__link {
    display: inline-flex;
    align-self: flex-start;
    margin-top: 1.4rem;
    font-weight: 750;
    text-decoration: underline;
    text-decoration-color: var(--tone);
    text-underline-offset: 0.22em;
  }

  .app-item__links {
    display: flex;
    flex-wrap: wrap;
    gap: 0.65rem 1rem;
    margin-top: 1.4rem;
  }

  .app-item__links .app-item__link {
    margin-top: 0;
  }

  .app-item .coming-soon {
    margin-top: 1.4rem;
    color: var(--tone);
    font-weight: 750;
  }

  .belief-list {
    display: grid;
    gap: 0.65rem;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .belief-list li {
    display: grid;
    grid-template-columns: 2.5rem 1fr;
    gap: 0.8rem;
    align-items: center;
    color: var(--muted);
    font-size: 0.96rem;
  }

  .belief-list__icon,
  .play-item__icon,
  .service-item__icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 2.65rem;
    height: 2.65rem;
    padding: 0.65rem;
    border: 1px solid var(--line);
    border-radius: 999px;
    background: var(--panel);
    color: var(--tone, var(--text));
  }

  .belief-list__icon {
    width: 2.35rem;
    height: 2.35rem;
    padding: 0.58rem;
  }

  .work-grid,
  .experiment-grid,
  .post-grid,
  .service-grid,
  .contact-route-grid,
  .play-list {
    display: grid;
    gap: 1rem;
  }

  .work-grid,
  .experiment-grid,
  .post-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .service-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .contact-route-grid,
  .play-list {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .studio-band,
  .play-lab,
  .connect-panel {
    display: grid;
    gap: 1.5rem;
    padding: clamp(1.25rem, 2vw, 2rem);
  }

  .studio-band {
    grid-template-columns: minmax(0, 0.95fr) minmax(0, 1.05fr);
    align-items: center;
  }

  .studio-band__media {
    overflow: hidden;
    border: 1px solid var(--line);
    border-radius: 1.4rem;
    background: var(--bg-elevated);
  }

  .studio-band__media img {
    width: 100%;
    height: 100%;
    aspect-ratio: 1.38;
    object-fit: cover;
    transition: transform 420ms ease;
  }

  .studio-band:hover .studio-band__media img {
    transform: scale(1.02);
  }

  .studio-band__content,
  .connect-panel > div:first-child {
    display: grid;
    gap: 1rem;
  }

  .studio-band h2,
  .connect-panel h2 {
    margin: 0;
    font-size: clamp(2rem, 3vw, 3.1rem);
    line-height: 1.02;
    letter-spacing: -0.05em;
    text-wrap: balance;
  }

  .studio-band p,
  .connect-panel p {
    margin: 0;
    color: var(--muted);
    line-height: 1.6;
  }

  .portfolio-links {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.55rem;
    padding-top: 0.15rem;
  }

  .portfolio-links a {
    display: inline-flex;
    align-items: center;
    gap: 0.35rem;
    padding: 0.55rem 0.8rem;
    border: 1px solid var(--line);
    border-radius: 999px;
    background: var(--panel-strong);
    font-weight: 650;
    transition:
      background 180ms ease,
      transform 180ms ease;
  }

  .portfolio-links a:hover,
  .portfolio-links a:focus-visible {
    background: var(--text);
    color: var(--bg);
    transform: translateY(-0.1rem);
  }

  .play-lab {
    grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
    overflow: hidden;
  }

  .play-lab__intro {
    display: grid;
    align-content: center;
    gap: 1rem;
  }

  .play-lab__intro p {
    margin: 0;
    color: var(--muted);
    line-height: 1.6;
  }

  .play-lab__stage {
    position: relative;
    min-height: 25rem;
    overflow: hidden;
    border: 1px solid var(--line);
    border-radius: 1.4rem;
    background:
      linear-gradient(140deg, var(--bg-elevated), transparent 54%),
      var(--panel-strong);
  }

  .play-lab__image {
    position: absolute;
    aspect-ratio: 1.45;
    border: 1px solid var(--line);
    border-radius: 1.15rem;
    box-shadow: var(--shadow);
    object-fit: cover;
    transition: transform 320ms ease;
  }

  .play-lab__image--primary {
    top: 1rem;
    left: 1rem;
    width: min(72%, 26rem);
  }

  .play-lab__image--secondary {
    right: 1rem;
    bottom: 1rem;
    width: min(58%, 20rem);
  }

  .play-lab:hover .play-lab__image--primary {
    transform: translateY(-0.25rem) rotate(-1deg);
  }

  .play-lab:hover .play-lab__image--secondary {
    transform: translateY(0.25rem) rotate(1deg);
  }

  .play-lab__pieces span {
    position: absolute;
    display: block;
    width: 3rem;
    height: 3rem;
    border: 1px solid var(--line);
    border-radius: 0.9rem;
    background: var(--tone, var(--yellow));
    opacity: 0.82;
    animation: piece-float 6s ease-in-out infinite;
  }

  .play-lab__pieces span:nth-child(1) {
    --tone: var(--yellow);
    top: 16%;
    right: 18%;
  }

  .play-lab__pieces span:nth-child(2) {
    --tone: var(--coral);
    top: 54%;
    left: 10%;
    width: 2.2rem;
    height: 2.2rem;
    animation-delay: -1.4s;
  }

  .play-lab__pieces span:nth-child(3) {
    --tone: var(--teal);
    right: 32%;
    bottom: 12%;
    width: 2.5rem;
    height: 2.5rem;
    animation-delay: -2.2s;
  }

  .play-lab__pieces span:nth-child(4) {
    --tone: var(--green);
    top: 36%;
    right: 7%;
    width: 2rem;
    height: 2rem;
    animation-delay: -3s;
  }

  .play-lab__pieces span:nth-child(5) {
    --tone: var(--orange);
    left: 34%;
    bottom: 28%;
    width: 1.75rem;
    height: 1.75rem;
    animation-delay: -4s;
  }

  .play-list {
    grid-column: 1 / -1;
  }

  .play-item,
  .service-item,
  .contact-route {
    position: relative;
    display: grid;
    min-width: 0;
    gap: 1rem;
    padding: 1.35rem;
    overflow: hidden;
    border: 1px solid var(--line);
    border-radius: var(--radius-lg);
    background: var(--panel-strong);
    box-shadow: var(--shadow);
  }

  .play-item,
  .service-item {
    grid-template-columns: 3rem minmax(0, 1fr);
  }

  .play-item::before,
  .service-item::before {
    content: "";
    position: absolute;
    inset: 0 auto auto 0;
    width: 100%;
    height: 0.3rem;
    background: var(--tone, var(--neutral));
  }

  .play-item h3,
  .service-item h3,
  .contact-route h3 {
    margin: 0.2rem 0 0.55rem;
    font-size: 1.45rem;
    line-height: 1.1;
  }

  .play-item p,
  .service-item p,
  .contact-route p {
    margin: 0;
    color: var(--muted);
    line-height: 1.5;
  }

  .play-item a {
    display: inline-flex;
    margin-top: 0.9rem;
    font-weight: 700;
    text-decoration: underline;
    text-decoration-color: var(--tone, var(--line-strong));
    text-underline-offset: 0.18em;
  }

  .work-technologies,
  .services-partners {
    margin-top: clamp(2.5rem, 6vw, 4.5rem);
    padding-top: clamp(1.5rem, 3vw, 2.25rem);
    border-top: 1px solid var(--line-strong);
  }

  .section-cluster > .section-head:not(:first-child) {
    margin-top: clamp(2.5rem, 6vw, 4.5rem);
    padding-top: clamp(1.5rem, 3vw, 2.25rem);
    border-top: 1px solid var(--line-strong);
  }

  .subsection {
    margin-top: clamp(2.5rem, 6vw, 4.5rem);
    padding-top: clamp(1.5rem, 3vw, 2.25rem);
    border-top: 1px solid var(--line-strong);
  }

  .work-technologies__head {
    display: flex;
    align-items: end;
    justify-content: space-between;
    gap: 1rem;
    margin-bottom: 1.25rem;
  }

  .work-technologies__head h3,
  .services-partners__head h3 {
    margin: 0.35rem 0 0;
    font-size: clamp(1.9rem, 3vw, 2.8rem);
    line-height: 1.02;
    letter-spacing: -0.05em;
  }

  .technology-grid,
  .partner-grid {
    display: grid;
    overflow: hidden;
    border-top: 1px solid var(--line);
    border-left: 1px solid var(--line);
    border-radius: var(--radius-lg);
  }

  .technology-grid {
    grid-template-columns: repeat(5, minmax(0, 1fr));
  }

  .partner-grid {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  .technology-link,
  .partner-link {
    display: grid;
    align-content: start;
    gap: 1rem;
    min-width: 0;
    padding: 1rem;
    border-right: 1px solid var(--line);
    border-bottom: 1px solid var(--line);
    background: var(--panel);
    transition: background 180ms ease;
  }

  .technology-link:hover,
  .technology-link:focus-visible,
  .partner-link:hover,
  .partner-link:focus-visible {
    background: var(--panel-strong);
  }

  .technology-mark,
  .partner-mark {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    min-height: 5.5rem;
    padding: 1rem;
    overflow: hidden;
    border: 1px solid rgba(36, 36, 36, 0.08);
    border-radius: 1rem;
    background: #fff;
    color: #171717;
  }

  .partner-mark {
    min-height: 7rem;
  }

  .technology-mark img {
    width: auto;
    max-width: 100%;
    max-height: 2.8rem;
    object-fit: contain;
  }

  .partner-mark img {
    width: auto;
    max-width: 100%;
    max-height: 4.25rem;
    object-fit: contain;
  }

  .technology-link > span:last-child {
    display: grid;
    gap: 0.45rem;
  }

  .technology-link small,
  .services-partners__head > p {
    color: var(--muted);
    font-size: 0.9rem;
    line-height: 1.45;
  }

  .services-partners__head {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(18rem, 24rem);
    gap: 1.5rem;
    align-items: end;
    margin-bottom: 1.25rem;
  }

  .partner-wordmark {
    display: inline-flex;
    align-items: baseline;
    color: #171717;
    white-space: nowrap;
  }

  .partner-wordmark--watershed {
    font-size: clamp(1.55rem, 2.5vw, 2.15rem);
    font-weight: 750;
    letter-spacing: -0.07em;
  }

  .partner-wordmark--roli {
    font-size: clamp(1.25rem, 2vw, 1.65rem);
    font-weight: 800;
    letter-spacing: 0.08em;
  }

  .partner-wordmark--viverse {
    font-size: clamp(1.5rem, 2.6vw, 2.2rem);
    font-weight: 750;
    letter-spacing: 0.16em;
  }

  .partner-link__meta {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 0.75rem;
  }

  .partner-link__meta > span {
    color: var(--muted);
    font-size: 0.78rem;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .contact-route {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
  }

  .contact-route :global(.button) {
    margin-top: auto;
  }

  .social-strip {
    display: flex;
    flex-wrap: wrap;
    gap: 0.8rem;
  }

  .social-strip a {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 3.25rem;
    height: 3.25rem;
    padding: 0.9rem;
    border: 1px solid var(--line);
    border-radius: 999px;
    background: var(--panel-strong);
    transition:
      transform 180ms ease,
      background 180ms ease;
  }

  .social-strip a:hover,
  .social-strip a:focus-visible {
    background: var(--text);
    color: var(--bg);
    transform: translateY(-0.12rem);
  }

  .section-cta {
    display: flex;
    justify-content: center;
    margin-top: 1.25rem;
  }

  @keyframes piece-float {
    50% {
      transform: translateY(-0.55rem) rotate(6deg);
    }
  }

  @media (max-width: 960px) {
    .hero__grid,
    .studio-band,
    .play-lab,
    .services-partners__head,
    .cluster-heading {
      grid-template-columns: 1fr;
    }

    .app-item {
      grid-template-columns: 1fr;
    }

    .app-grid--single .app-item {
      grid-template-columns: 1fr;
    }

    .app-item__media {
      min-height: 14rem;
      border-right: 0;
      border-bottom: 1px solid var(--line);
    }

    .work-grid,
    .experiment-grid,
    .post-grid,
    .play-list,
    .partner-grid,
    .technology-grid,
    .service-grid,
    .contact-route-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  @media (max-width: 720px) {
    .app-grid {
      grid-template-columns: 1fr;
    }

    .product-group__heading {
      grid-template-columns: 1fr;
    }

    .app-item {
      min-height: 0;
    }

    .app-item__content {
      min-height: 19rem;
    }

    .work-grid,
    .experiment-grid,
    .post-grid,
    .play-list,
    .partner-grid,
    .technology-grid,
    .service-grid,
    .contact-route-grid {
      grid-template-columns: 1fr;
    }

    .work-technologies__head {
      align-items: start;
      flex-direction: column;
    }

    .hero-console {
      padding: 1rem;
    }

    .play-lab__stage {
      min-height: 19rem;
    }
  }
</style>
