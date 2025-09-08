---
layout: post
title: Musical Physics - Lessons from building music apps in Unity
author: Pete Nancollis, Ant Nasce, Tom Cartwright
---

<img src="/assets/ADC_banner.png" style="border-radius: 15px" />

We used the Unity game engine to create Playtonik - an experimental musical instrument and fidget toy with MIDI support for iOS.

We chose to use a game engine because it was the fastest place to test to the novel feature of our app: the interaction of physics objects to make sounds.

## Why use a Game Engine?

### Physics as a playground of sound

Simulations of interacting objects are a fantastic source of sound triggers, allowing for everything from a natural "real feel", to something more abstract and chaotic.

You have control over gravity, damping, mass and everything in between, which provides huge scope for creating a variety of expressive environments.

Unity is a great choice for this, due to its highly performant and flexible 2D & 3D physics systems.

**Get Started:** link audio sources to collisions and make the engine your playground.

### Hear the space

As the engine is built for creating immersive digital worlds, Unity handles 3D spatial audio as standard.

Typically, this is focused around a player character, but the system is flexible. The `AudioListener` is the scene's microphone, which can be de-coupled from the camera and positioned anywhere to create your desired sound.

Unity can handle playback of many simultaneous audio samples, which is great when triggering from physics interactions such as bouncing. The `AudioSource` component provides support for Spatial blending of sound, Volume, Pitch and even 'Priority' - which provides control over which sounds are culled when voice count gets too high.

**Get Started:** change the location of the listeners and sources in the space to put the listener in the centre of the action and create a dynamic spatial mix, with minimal effort.

### Visual possibilities

Game engines are built for visuals, with tools for building UI as well as 2D or 3D worlds. Take advantage of this to really make your app pop!
Music apps benefit from visuals too. Beyond the functional side, an app that gives rich feedback will feel more engaging and help users learn. Use engine features like particle fx, shaders and animation to really make your app sing.

**Get started:** emphasise the collisions in the physics system by creating particle fx at the point of contact. Show direction and intensity so the user can see the sound being created.

<video width=200 height=200 controls autoplay loop style="border-radius: 15px" alt="A small shape bouncing around the inside of a larger shape. Each collision creates lighting and particle effects.">
  <source src="/assets/ADC_Visuals_Clip.mp4">
</video>

### There's always MIDI

What would an audio app be without MIDI? Luckily there are open source and commercial plugins available for adding MIDI to Unity.
If like us, you decide to add MIDI to your physics, watch out! It's really addictive! It's also easy to cause notes to get stuck on in your favourite synth.

Take the time to ensure your note messages are balanced, always send a note off for every note on. These often get lost when objects get destroyed or the app pauses.

### Experimental interactions

Unity makes experimenting with interaction methods very simple. Want to hook into the device's motion controls and make shapes comply with real-world gravity? There's a nice API for that. Pinches, taps, drags and everything else - there's battle tested methods to implement different interactions and connect them to practically any parameter of the app.

For example, swiping a finger over the shape in Playtonik will alter its angular velocity, as if you were spinning a globe.

### Build for everywhere

It's super simple to target multiple platforms, with support for most common platforms built into the engine. Any area that the built-in tooling doesn't cover likely has a plugin, tailor-made by the vast Unity developer community.

We've used plugins to handle [MIDI connectivity](https://assetstore.unity.com/packages/tools/audio/midi-plugin-for-mobile-and-desktop-198917) and [musical scale theory](https://melanchall.github.io/drywetmidi/).

### Going native

Unity isn't a closed system - you can still work with native code when you need to. This is handy for when there's platform specific configuration required or plugins that need system access.

Need more audio control? There's a native audio system for that! Create audio code in C++ then bring back into Unity. Great for writing new audio effects.

## The Drawbacks

### Non-musical timing

Unity is optimised towards visuals not audio. This has the consequence that the frame timing isn’t a great match for musical time - learn how we used threads to manage that for loop recording [here]().

### Careful with audio quality

There are a number of pitfalls when working with audio in Unity. Here are some top tips we've learn by falling into the traps!

- If there are too many sound sources, things will be culled. Make sure it's the quietest sources using priorites.
- Check those sample rates, on iOS Unity defaults to 24kHz. We found we had to manually force the sample rate via native code and in the Unity Project settings..
- Watch out for memory management. Garbage Collection can cause lost time in your audio stream. Make sure you follow best practices and use pooling techniques when there are a lot of entities entering and leaving the scene.

Also related - watch out for performance! Unity will use all the resources it can - cap the framerate!

### Plug-in elsewhere

Whilst Unity has a vast amount of tools to make things easier, that also means that you're locked into their systems and supported platforms - which unfortunately do not include the more audio specific platforms like DAW plugins.

It's possible to run Unity as an engine in another app, but it's not a trival process. More audio focused tools will serve you better if your goal is a VST or AU.
