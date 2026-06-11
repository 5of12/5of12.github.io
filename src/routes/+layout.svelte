<script lang="ts">
  import "../app.css";

  import { page } from "$app/state";
  import {
    BriefcaseBusiness,
    FlaskConical,
    Play,
    Send,
    UsersRound,
  } from "@lucide/svelte";
  import SocialIcon from "$lib/components/SocialIcon.svelte";
  import ThemeToggle from "$lib/components/ThemeToggle.svelte";
  import { companyInfo, siteMeta, socialLinks } from "$lib/content/site";

  let { children } = $props();

  const currentPath = $derived(page.url.pathname);
  let menuOpen = $state(false);

  const navigation = [
    { label: "Play", href: "/#play", icon: Play },
    { label: "Work", href: "/#work", icon: BriefcaseBusiness },
    { label: "R&D", href: "/#research", icon: FlaskConical },
    { label: "About", href: "/#about", icon: UsersRound },
    { label: "Contact", href: "/#contact", icon: Send },
  ];

  function isActive(href: string) {
    if (href.includes("#")) {
      return false;
    }

    if (href === "/") {
      return currentPath === "/";
    }

    return currentPath.startsWith(href);
  }

  function closeMenu() {
    menuOpen = false;
  }

  function handleWindowKeydown(event: KeyboardEvent) {
    if (event.key === "Escape") {
      closeMenu();
    }
  }
</script>

<svelte:window onkeydown={handleWindowKeydown} />

<svelte:head>
  <title>{siteMeta.title} · Creative Technology Studio</title>
  <meta name="description" content={siteMeta.description} />
  <link rel="icon" href="/assets/5of12_Glow.png" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link
    rel="preconnect"
    href="https://fonts.gstatic.com"
    crossorigin="anonymous"
  />
  <link
    href="https://fonts.googleapis.com/css2?family=Bungee&family=Funnel+Sans:wght@300..800&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<div class="site-shell">
  <header class="site-header">
    <div class="site-header__inner">
      <a class="brand-lockup" href="/">
        <span class="brand-lockup__glyph">
          <img src="/assets/5of12_Glow.png" alt="" width="52" height="52" />
        </span>
        <span class="brand-lockup__copy">
          <span class="brand-lockup__title">5of12</span>
          <!-- <span class="brand-lockup__subtitle">Creative Studio</span> -->
        </span>
      </a>

      <div id="primary-menu" class:open={menuOpen} class="site-header__menu">
        <nav class="site-nav" aria-label="Primary">
          {#each navigation as item}
            {@const NavIcon = item.icon}
            <a
              href={item.href}
              class:active={isActive(item.href)}
              aria-current={isActive(item.href) ? "page" : undefined}
              onclick={closeMenu}
            >
              <NavIcon
                class="site-nav__icon"
                size={17}
                strokeWidth={1.8}
                aria-hidden="true"
              />
              <span>{item.label}</span>
            </a>
          {/each}
        </nav>
      </div>

      <ThemeToggle />

      <button
        class="menu-toggle"
        type="button"
        aria-expanded={menuOpen}
        aria-controls="primary-menu"
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        onclick={() => (menuOpen = !menuOpen)}
      >
        <span class="menu-toggle__icon" aria-hidden="true"
          ><span></span><span></span></span
        >
      </button>
    </div>
  </header>

  <main class="site-main">
    {@render children()}
  </main>

  <footer class="site-footer">
    <div class="site-footer__inner">
      <div class="site-footer__brand">
        <p class="site-footer__eyebrow">{companyInfo.name}</p>
        <p class="site-footer__text">
          UK creative technology studio building spatial, musical & web-first
          tools with a focus on tactility & play.
        </p>
        <p class="site-footer__legal">
          {companyInfo.registration} · Company No. {companyInfo.companyNumber}
        </p>
      </div>

      <div class="site-footer__links">
        <a href={`mailto:${companyInfo.email}`}>Contact</a>
        <a href="https://github.com/5of12">GitHub</a>
        <a href="/">Home</a>
        <a href={companyInfo.privacyHref}>Privacy</a>
      </div>

      <div class="site-footer__social">
        <p class="site-footer__eyebrow">Social</p>
        <div class="social-icon-row">
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
      </div>
    </div>
  </footer>
</div>

<style>
  .site-shell {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
  }

  .site-header {
    position: sticky;
    top: 0;
    z-index: 20;
    padding: 1rem 0 0;
  }

  .site-header__inner,
  .site-footer__inner,
  .site-main {
    width: var(--site-width);
    margin: 0 auto;
  }

  .site-header__inner {
    position: relative;
    display: grid;
    grid-template-columns: auto minmax(0, 1fr) auto;
    align-items: center;
    gap: 1rem;
    min-width: 0;
    padding: 1rem 1.25rem;
    border: 1px solid var(--line);
    border-radius: 999px;
    background: var(--panel);
    backdrop-filter: blur(18px);
    box-shadow: var(--shadow);
  }

  .brand-lockup {
    display: inline-flex;
    align-items: center;
    gap: 0.875rem;
    min-width: 0;
  }

  .brand-lockup__glyph {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 3.25rem;
    height: 3.25rem;
    border: 1px solid var(--line);
    border-radius: 1.2rem;
    background: var(--panel-strong);
  }

  .brand-lockup__glyph img {
    width: 2.3rem;
    height: 2.3rem;
    object-fit: contain;
  }

  .brand-lockup__copy {
    display: flex;
    min-width: 0;
    flex-direction: column;
  }

  .brand-lockup__title {
    font-family: "Bungee", sans-serif;
    font-size: 1.2rem;
    line-height: 1;
    letter-spacing: 0.02em;
  }

  .site-header__menu {
    display: block;
    min-width: 0;
  }

  .site-nav {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.35rem;
  }

  .site-nav a {
    display: inline-flex;
    align-items: center;
    gap: 0.42rem;
    padding: 0.55rem 0.8rem;
    border: 1px solid transparent;
    border-radius: 999px;
    color: var(--muted);
    font-size: 0.96rem;
  }

  .site-nav :global(.site-nav__icon) {
    flex: 0 0 auto;
  }

  .site-nav a.active,
  .site-nav a:hover {
    border-color: var(--line);
    background: var(--panel-strong);
    color: var(--text);
  }

  .menu-toggle {
    display: none;
    align-items: center;
    justify-content: center;
    width: 2.75rem;
    min-height: 2.75rem;
    padding: 0;
    border: 1px solid var(--line);
    border-radius: 999px;
    background: var(--panel-strong);
    color: var(--text);
    font-weight: 650;
    cursor: pointer;
  }

  .menu-toggle__icon {
    display: grid;
    gap: 0.28rem;
    width: 1rem;
  }

  .menu-toggle__icon span {
    display: block;
    width: 100%;
    height: 1px;
    background: currentColor;
    transition: transform 180ms ease;
  }

  .menu-toggle[aria-expanded="true"] .menu-toggle__icon span:first-child {
    transform: translateY(0.14rem) rotate(45deg);
  }

  .menu-toggle[aria-expanded="true"] .menu-toggle__icon span:last-child {
    transform: translateY(-0.14rem) rotate(-45deg);
  }

  .site-main {
    flex: 1;
    padding: 2rem 0 4rem;
  }

  .site-footer {
    padding: 0 0 2rem;
  }

  .site-footer__inner {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: space-between;
    gap: 1.5rem;
    padding: 1.5rem;
    border: 1px solid var(--line);
    border-radius: var(--radius-xl);
    background: var(--panel);
    box-shadow: var(--shadow);
  }

  .site-footer__brand,
  .site-footer__text {
    max-width: 34rem;
  }

  .site-footer__text {
    margin: 0.4rem 0 0;
    color: var(--muted);
    font-size: 1rem;
    line-height: 1.6;
    overflow-wrap: anywhere;
  }

  .site-footer__legal {
    margin: 0.55rem 0 0;
    color: var(--muted);
    font-size: 0.9rem;
    line-height: 1.45;
  }

  .site-footer__links {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    gap: 1rem;
  }

  .site-footer__links a {
    color: var(--text);
    font-weight: 600;
  }

  .site-footer__social {
    display: grid;
    gap: 0.6rem;
  }

  .social-icon-row {
    display: flex;
    flex-wrap: wrap;
    gap: 0.55rem;
  }

  .social-icon-row a {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 2.75rem;
    height: 2.75rem;
    padding: 0.7rem;
    border: 1px solid var(--line);
    border-radius: 999px;
    background: var(--panel-strong);
    transition:
      transform 180ms ease,
      background 180ms ease;
  }

  .social-icon-row a:hover,
  .social-icon-row a:focus-visible {
    background: var(--text);
    color: var(--bg);
    transform: translateY(-0.12rem);
  }

  @media (max-width: 960px) {
    .site-header__inner {
      grid-template-columns: minmax(0, 1fr) auto auto;
      gap: 0.55rem;
      padding: 0.65rem;
      border-radius: 1.45rem;
    }

    .menu-toggle {
      display: inline-flex;
    }

    .site-header__menu {
      position: absolute;
      top: calc(100% + 0.55rem);
      right: 0;
      left: 0;
      display: none;
      max-height: calc(100svh - 7rem);
      grid-template-columns: 1fr;
      gap: 0.8rem;
      padding: 0.8rem;
      overflow-y: auto;
      border: 1px solid var(--line);
      border-radius: 1.45rem;
      background: var(--panel-strong);
      backdrop-filter: blur(22px);
      box-shadow: var(--shadow);
    }

    .site-header__menu.open {
      display: grid;
    }

    .site-nav {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 0.35rem;
    }

    .site-nav a {
      display: flex;
      align-items: center;
      min-height: 2.75rem;
      padding: 0.55rem 0.8rem;
      border-color: var(--line);
      background: var(--panel);
    }
  }

  @media (max-width: 720px) {
    .site-main {
      padding-top: 1.25rem;
    }

    .brand-lockup {
      gap: 0.65rem;
    }

    .brand-lockup__glyph {
      width: 2.85rem;
      height: 2.85rem;
      border-radius: 1rem;
    }

    .brand-lockup__glyph img {
      width: 2rem;
      height: 2rem;
    }

    .brand-lockup__title {
      font-size: 1.05rem;
    }
  }
</style>
