<script lang="ts">
  import {
    KeyboardMusic,
    Play,
    Compass,
    Globe,
    Hand,
    Shell,
    PersonStanding,
    RectangleGoggles,
    Gamepad,
    Projector,
  } from "@lucide/svelte";
  import type { IconName } from "$lib/content/site";

  let { name } = $props<{ name: IconName }>();

  const icons = {
    spark: Shell,
    compass: Compass,
    midi: KeyboardMusic,
    heart: PersonStanding,
    play: Play,
    hand: Hand,
    globe: Globe,
    xr: RectangleGoggles,
    game: Gamepad,
    immersive: Projector,
  };

  const Icon = $derived(icons[name as IconName]);
</script>

<span class="icon-glyph" aria-hidden="true">
  <Icon size="100%" strokeWidth={1.7} />
</span>

<style>
  .icon-glyph,
  .icon-glyph :global(svg) {
    display: block;
    width: 100%;
    height: 100%;
  }
</style>
