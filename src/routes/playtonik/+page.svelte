<script lang="ts">
  import IconGlyph from "$lib/components/IconGlyph.svelte";
  import { siteMeta, type IconName } from "$lib/content/site";

  const appStoreHref = "https://apps.apple.com/gb/app/playtonik/id6738356927";
  const supportHref = "mailto:info@5of12.co.uk?subject=Playtonik%20support";

  const coreFeatures: {
    title: string;
    description: string;
    icon: IconName;
    accent: string;
  }[] = [
    {
      title: "Musical physics",
      description:
        "Each note becomes a floating, bouncy object. Touch & motion controls let you move & spin the shapes that contain them.",
      icon: "spark",
      accent: "coral",
    },
    {
      title: "Spatial audio",
      description:
        "Sounds are created where notes collide. Each voice moves through a different point in space, especially clearly on headphones.",
      icon: "globe",
      accent: "teal",
    },
    {
      title: "Dynamic haptics",
      description:
        "Feel each bounce. Collision intensity is mapped to haptic feedback, from gentle texture to a much stronger impact.",
      icon: "hand",
      accent: "yellow",
    },
  ];

  const performanceTools = [
    "Scale-mapped keyboard to keep performances in tune",
    "Visible velocity & expressive note control",
    "Strum gestures for quick note sequences",
    "Latched notes that keep the shapes moving",
    "Tap sequencing using the selected scale",
    "Loop recording for up to 20 seconds of playing",
  ];

  const ccMappings = [
    { description: "Shape change", cc: "0", range: "0-4" },
    { description: "Spin impulse", cc: "1", range: "+/- 63" },
    { description: "Volume", cc: "7", range: "0-127" },
    { description: "FX (Reverb)", cc: "12", range: "0-127" },
    { description: "Note hold", cc: "64", range: "0 / 127" },
    { description: "Spin lock", cc: "69", range: "0 / 127" },
  ];
</script>

<svelte:head>
  <title>Playtonik · {siteMeta.title}</title>
  <meta
    name="description"
    content="Playtonik is a MIDI Innovation Award-winning musical fidget app for iPhone/iPad, built around physics, spatial audio, haptics & MIDI."
  />
</svelte:head>

<section class="playtonik-hero panel">
  <div class="playtonik-hero__copy">
    <p class="section-kicker"><span>Playtonik</span> iOS musical instrument</p>
    <h1>Physics you can play.</h1>
    <p class="playtonik-hero__lede">
      A musical fidget app where bouncing shapes become sound, space & touch.
    </p>
    <p class="playtonik-hero__body">
      Playtonik is a 2025 MIDI Innovation Award-winning instrument for iPhone/iPad. Tap, Shake & Play, then connect MIDI & Playtonik Pro for deeper control.
    </p>
    <div class="button-row">
      <a class="button button--primary" href={appStoreHref}
        >Get it on the App Store</a
      >
      <a class="button" href={supportHref}>Playtonik support</a>
    </div>
  </div>

  <div class="playtonik-hero__award">
    <img
      src="/assets/work/playtonik-award.png"
      alt="Playtonik app icon & 2025 MIDI Innovation Awards winner mark."
      width="505"
      height="238"
    />
  </div>
</section>

<div class="playtonik-banner">
  <img
    src="/assets/ADC_banner.png"
    alt="Playtonik shapes containing bright musical objects."
    width="1920"
    height="540"
  />
</div>

<section class="section playtonik-intro">
  <div>
    <p class="section-kicker"><span>How it feels</span></p>
    <h2>Every note has weight, movement and a place in space.</h2>
  </div>
  <p>
    Playtonik turns a familiar keyboard into a small physics playground. Notes
    ricochet inside responsive shapes, making sound where they collide &
    feeding that movement back through the device.
  </p>
</section>

<section class="section feature-list" aria-label="Playtonik core features">
  {#each coreFeatures as feature, index}
    <article class={`feature-row tone-${feature.accent}`}>
      <div class="feature-row__number">0{index + 1}</div>
      <div class="feature-row__icon">
        <IconGlyph name={feature.icon} />
      </div>
      <div>
        <h2>{feature.title}</h2>
        <p>{feature.description}</p>
      </div>
    </article>
  {/each}
</section>

<section class="section media-feature panel">
  <div class="media-feature__copy">
    <p class="section-kicker"><span>Interaction</span></p>
    <h2>Tap, strum, spin & move.</h2>
    <p>
      Playtonik is designed for direct, expressive play. Use touch, device
      motion or an external keyboard, then shape the result with velocity,
      latching & looping tools.
    </p>
  </div>
  <img
    src="/assets/ADC_Interactions.png"
    alt="Playtonik interaction modes including touch, motion, phone & MIDI keyboard input."
    width="1920"
    height="540"
    loading="lazy"
  />
</section>

<section class="section performance-section">
  <div class="performance-section__visual">
    <video
      controls
      muted
      playsinline
      preload="metadata"
      poster="/assets/ADC_banner.png"
    >
      <source src="/assets/ADC_Bounce_Wide.mp4" type="video/mp4" />
    </video>
  </div>

  <div class="performance-section__copy">
    <p class="section-kicker"><span>Performance</span></p>
    <h2>Tools for finding a phrase & keeping it moving.</h2>
    <ul>
      {#each performanceTools as tool}
        <li>{tool}</li>
      {/each}
    </ul>
  </div>
</section>

<section class="section midi-section panel">
  <div class="midi-section__head">
    <div>
      <p class="section-kicker"><span>MIDI</span> Input & output</p>
      <h2>Connect a keyboard, another instrument, or both.</h2>
    </div>
    <p>
      Trigger Playtonik from external hardware, send its notes elsewhere,
      filter incoming MIDI to the selected scale. Note & CC input are included
      in every version, with additional control available in Playtonik Pro.
    </p>
  </div>

  <img
    src="/assets/ADC_AlwaysMidi.png"
    alt="Playtonik connected by MIDI to a keyboard & control surface."
    width="1920"
    height="540"
    loading="lazy"
  />

  <div class="midi-section__details">
    <div>
      <h3>CC input mapping</h3>
      <p>Map a controller to Playtonik's most useful performance parameters.</p>
    </div>

    <div class="cc-table-wrap">
      <table>
        <thead>
          <tr>
            <th>Description</th>
            <th>CC</th>
            <th>Range</th>
          </tr>
        </thead>
        <tbody>
          {#each ccMappings as mapping}
            <tr>
              <td>{mapping.description}</td>
              <td>{mapping.cc}</td>
              <td>{mapping.range}</td>
            </tr>
          {/each}
        </tbody>
      </table>
    </div>
  </div>
</section>

<section class="section playtonik-links">
  <div>
    <p class="section-kicker"><span>Keep playing</span></p>
    <h2>Set it up, hear it in context, or ask us a question.</h2>
  </div>

  <div class="playtonik-links__list">
    <a href="/journal/how-to-connect-ios-to-midi/">
      <span>MIDI setup guide</span>
      <strong>Connect iOS to hardware & software instruments</strong>
    </a>
    <a
      href="https://www.youtube.com/playlist?list=PL4zuBsU0ueMlLnphaBhRjQ5iLQO9R2qMJ"
    >
      <span>YouTube playlist</span>
      <strong>Hear how we use Playtonik in our own music</strong>
    </a>
    <a href={supportHref}>
      <span>Support & feedback</span>
      <strong>Talk directly to the people who built it</strong>
    </a>
  </div>
</section>

<section class="section playtonik-cta panel">
  <div>
    <p class="section-kicker"><span>Available now</span></p>
    <h2>Start with the free app. Unlock Pro when you want more control.</h2>
  </div>
  <a class="button button--primary" href={appStoreHref}>Get Playtonik</a>
</section>

<style>
  .playtonik-hero {
    display: grid;
    grid-template-columns: minmax(0, 1.2fr) minmax(18rem, 0.8fr);
    gap: clamp(2rem, 5vw, 5rem);
    align-items: center;
    padding: clamp(1.5rem, 4vw, 4rem);
  }

  .playtonik-hero__copy {
    display: grid;
    gap: 1.15rem;
  }

  .playtonik-hero h1 {
    max-width: 9ch;
    margin: 0;
    font-family: "Bungee", sans-serif;
    font-size: clamp(3.4rem, 8vw, 7rem);
    line-height: 0.9;
    letter-spacing: -0.045em;
    text-wrap: balance;
  }

  .playtonik-hero__lede {
    max-width: 28rem;
    margin: 0;
    font-size: clamp(1.35rem, 2.4vw, 1.9rem);
    line-height: 1.25;
  }

  .playtonik-hero__body {
    max-width: 39rem;
    margin: 0;
    color: var(--muted);
    font-size: 1.05rem;
    line-height: 1.65;
  }

  .playtonik-hero__award {
    display: flex;
    min-height: 22rem;
    align-items: center;
    justify-content: center;
    padding: clamp(1.5rem, 4vw, 3rem);
    border-radius: calc(var(--radius-xl) - 0.35rem);
    background: #101014;
  }

  .playtonik-hero__award img {
    width: min(100%, 31rem);
    height: auto;
  }

  .playtonik-banner {
    margin-top: 1.5rem;
    overflow: hidden;
    border: 1px solid var(--line);
    border-radius: var(--radius-xl);
    background: #131313;
    box-shadow: var(--shadow);
  }

  .playtonik-banner img {
    width: 100%;
    min-height: 16rem;
    object-fit: cover;
  }

  .playtonik-intro {
    display: grid;
    grid-template-columns: minmax(0, 1.2fr) minmax(18rem, 0.8fr);
    gap: 2rem;
    align-items: end;
    padding: clamp(2rem, 5vw, 4rem) clamp(0.25rem, 2vw, 1rem);
  }

  .playtonik-intro h2,
  .media-feature h2,
  .performance-section h2,
  .midi-section h2,
  .playtonik-links h2,
  .playtonik-cta h2 {
    margin: 0.6rem 0 0;
    font-size: clamp(2.15rem, 4vw, 4rem);
    line-height: 0.98;
    letter-spacing: -0.055em;
    text-wrap: balance;
  }

  .playtonik-intro > p {
    margin: 0;
    color: var(--muted);
    font-size: 1.1rem;
    line-height: 1.7;
  }

  .feature-list {
    border-top: 1px solid var(--line-strong);
  }

  .feature-row {
    display: grid;
    grid-template-columns: 4rem 3rem minmax(0, 1fr);
    gap: clamp(1rem, 3vw, 2.5rem);
    align-items: start;
    padding: clamp(1.5rem, 4vw, 2.75rem) 0;
    border-bottom: 1px solid var(--line-strong);
  }

  .feature-row__number {
    color: var(--tone);
    font-family: "Bungee", sans-serif;
    font-size: 1.05rem;
  }

  .feature-row__icon {
    width: 3rem;
    height: 3rem;
    padding: 0.65rem;
    border: 1px solid var(--line);
    border-radius: 999px;
    background: var(--panel-strong);
    color: var(--tone);
  }

  .feature-row h2 {
    margin: -0.15rem 0 0.55rem;
    font-size: clamp(1.8rem, 3vw, 2.8rem);
    line-height: 1;
    letter-spacing: -0.045em;
  }

  .feature-row p {
    max-width: 45rem;
    margin: 0;
    color: var(--muted);
    font-size: 1.05rem;
    line-height: 1.65;
  }

  .media-feature,
  .midi-section {
    padding: clamp(1.25rem, 3vw, 2.25rem);
    overflow: hidden;
  }

  .media-feature__copy {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(18rem, 30rem);
    gap: 1.5rem;
    align-items: end;
    margin-bottom: 1.5rem;
  }

  .media-feature__copy p:last-child,
  .midi-section__head > p {
    margin: 0;
    color: var(--muted);
    line-height: 1.65;
  }

  .media-feature > img,
  .midi-section > img {
    width: 100%;
    min-height: 15rem;
    border: 1px solid var(--line);
    border-radius: 1.35rem;
    object-fit: cover;
  }

  .performance-section {
    display: grid;
    grid-template-columns: minmax(0, 1.15fr) minmax(20rem, 0.85fr);
    gap: clamp(1.5rem, 4vw, 3rem);
    align-items: center;
    padding: clamp(1rem, 3vw, 2rem) 0;
  }

  .performance-section__visual {
    overflow: hidden;
    border: 1px solid var(--line);
    border-radius: var(--radius-xl);
    background: #101014;
    box-shadow: var(--shadow);
  }

  .performance-section video {
    width: 100%;
    aspect-ratio: 16 / 9;
    object-fit: cover;
  }

  .performance-section__copy ul {
    display: grid;
    gap: 0;
    margin: 1.5rem 0 0;
    padding: 0;
    list-style: none;
    border-top: 1px solid var(--line-strong);
  }

  .performance-section__copy li {
    padding: 0.85rem 0;
    border-bottom: 1px solid var(--line-strong);
    color: var(--muted);
    line-height: 1.45;
  }

  .midi-section__head {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(18rem, 28rem);
    gap: 1.5rem;
    align-items: end;
    margin-bottom: 1.5rem;
  }

  .midi-section__details {
    display: grid;
    grid-template-columns: minmax(13rem, 0.45fr) minmax(0, 1fr);
    gap: 2rem;
    margin-top: 2rem;
  }

  .midi-section__details h3 {
    margin: 0;
    font-size: 1.6rem;
    letter-spacing: -0.035em;
  }

  .midi-section__details p {
    margin: 0.55rem 0 0;
    color: var(--muted);
    line-height: 1.55;
  }

  .cc-table-wrap {
    overflow-x: auto;
  }

  table {
    width: 100%;
    border-collapse: collapse;
  }

  th,
  td {
    padding: 0.8rem 0.65rem;
    border-bottom: 1px solid var(--line-strong);
    text-align: left;
  }

  th {
    color: var(--muted);
    font-size: 0.76rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  td:nth-child(2),
  td:nth-child(3) {
    font-variant-numeric: tabular-nums;
  }

  .playtonik-links {
    display: grid;
    grid-template-columns: minmax(0, 0.8fr) minmax(0, 1.2fr);
    gap: clamp(2rem, 6vw, 5rem);
    padding: clamp(2rem, 5vw, 4rem) clamp(0.25rem, 2vw, 1rem);
  }

  .playtonik-links__list {
    border-top: 1px solid var(--line-strong);
  }

  .playtonik-links__list a {
    display: grid;
    grid-template-columns: minmax(8rem, 0.35fr) minmax(0, 1fr);
    gap: 1rem;
    padding: 1.25rem 0;
    border-bottom: 1px solid var(--line-strong);
    transition: padding 180ms ease;
  }

  .playtonik-links__list a:hover,
  .playtonik-links__list a:focus-visible {
    padding-left: 0.5rem;
  }

  .playtonik-links__list span {
    color: var(--muted);
    font-size: 0.82rem;
    font-weight: 650;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .playtonik-links__list strong {
    font-size: 1.1rem;
    line-height: 1.35;
  }

  .playtonik-cta {
    display: flex;
    align-items: end;
    justify-content: space-between;
    gap: 2rem;
    padding: clamp(1.5rem, 4vw, 3rem);
  }

  .playtonik-cta h2 {
    max-width: 17ch;
  }

  .playtonik-cta .button {
    flex: 0 0 auto;
  }

  @media (max-width: 960px) {
    .playtonik-hero,
    .playtonik-intro,
    .media-feature__copy,
    .performance-section,
    .midi-section__head,
    .midi-section__details,
    .playtonik-links {
      grid-template-columns: 1fr;
    }

    .playtonik-hero__award {
      min-height: 18rem;
    }
  }

  @media (max-width: 720px) {
    .playtonik-hero {
      padding: 1.25rem;
    }

    .playtonik-hero h1 {
      font-size: clamp(3rem, 17vw, 4.6rem);
    }

    .playtonik-hero__award {
      min-height: 14rem;
    }

    .playtonik-banner img {
      min-height: 12rem;
    }

    .feature-row {
      grid-template-columns: 2.5rem 2.75rem minmax(0, 1fr);
      gap: 0.75rem;
    }

    .feature-row__icon {
      width: 2.75rem;
      height: 2.75rem;
    }

    .playtonik-links__list a {
      grid-template-columns: 1fr;
      gap: 0.4rem;
    }

    .playtonik-cta {
      align-items: stretch;
      flex-direction: column;
    }
  }
</style>
