<script lang="ts">
  import { Moon, Sun } from "@lucide/svelte";
  import { browser } from "$app/environment";
  import { onMount } from "svelte";

  type ThemeMode = "light" | "dark";

  const storageKey = "5of12-theme";

  let mode = $state<ThemeMode>("light");

  function getSystemTheme(): ThemeMode {
    if (!browser) {
      return "light";
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }

  function applyTheme(next: ThemeMode) {
    mode = next;

    if (!browser) {
      return;
    }

    document.documentElement.dataset.theme = next;
    localStorage.setItem(storageKey, next);
  }

  function toggleTheme() {
    applyTheme(mode === "dark" ? "light" : "dark");
  }

  onMount(() => {
    if (!browser) {
      return;
    }

    const storedTheme = localStorage.getItem(storageKey);
    const nextTheme =
      storedTheme === "light" || storedTheme === "dark"
        ? storedTheme
        : (document.documentElement.dataset.theme as ThemeMode) ||
          getSystemTheme();

    applyTheme(nextTheme);
  });
</script>

<button
  type="button"
  class="theme-toggle"
  data-mode={mode}
  onclick={toggleTheme}
  aria-label={`Switch to ${mode === "dark" ? "light" : "dark"} mode`}
  aria-pressed={mode === "dark"}
>
  <span class="theme-toggle__track">
    <span
      class="theme-toggle__icon"
      class:active={mode === "light"}
      aria-hidden="true"
    >
      <Sun size={17} strokeWidth={1.8} />
    </span>
    <span class="theme-toggle__thumb"></span>
    <span
      class="theme-toggle__icon"
      class:active={mode === "dark"}
      aria-hidden="true"
    >
      <Moon size={16} strokeWidth={1.8} />
    </span>
  </span>
</button>

<style>
  .theme-toggle {
    padding: 0;
    border: 0;
    background: transparent;
    cursor: pointer;
  }

  .theme-toggle__track {
    position: relative;
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    align-items: center;
    gap: 0.55rem;
    min-width: 7.5rem;
    padding: 0.4rem 0.7rem;
    border: 1px solid var(--line);
    border-radius: 999px;
    background: var(--panel-strong);
  }

  .theme-toggle__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--muted);
    transition: color 180ms ease;
  }

  .theme-toggle__icon.active {
    color: var(--text);
  }

  .theme-toggle__icon :global(svg) {
    display: block;
  }

  .theme-toggle__thumb {
    position: relative;
    display: block;
    width: 2.15rem;
    height: 1.3rem;
    border-radius: 999px;
    background: var(--line);
  }

  .theme-toggle__thumb::before {
    content: "";
    position: absolute;
    top: 0.14rem;
    left: 0.14rem;
    width: 1.02rem;
    height: 1.02rem;
    border-radius: 50%;
    background: var(--text);
    transition: transform 180ms ease;
  }

  .theme-toggle[data-mode="dark"] .theme-toggle__thumb::before {
    transform: translateX(0.86rem);
  }

  @media (max-width: 960px) {
    .theme-toggle__track {
      min-width: 6.9rem;
      min-height: 2.75rem;
      padding-inline: 0.55rem;
    }
  }
</style>
