---
layout: post
title: Musical Physics - Lessons from building music apps in Unity
author: Pete Nancollis, Ant Nasce, Tom Cartwright
---

# Overview

We built a music app for iOS in the Unity game engine called Playtonik.

It's an experimental instrument, midi device and fidget toy that uses the interaction of physics objects to make sounds.

We chose to use a game engine because it was the fastest place to test to the novel feature of our app: the interactions.

# Why build a music app in a game engine?
- Create highly visual products, where animation and interaction are a priority
- Work with high level or visual programming and scripting languages
- Easily integrate input devices such as touch and motion controls
- Build with physics simulations to create dynamic motion effects
- Targeting multiple platforms easily, including spatial platforms
- Readily available plugins for features like MIDI connectivity

# Our tips for music apps in Unity

A great place to play with spatial mixing
- All sounds can be played from a point in space, so mixing is as easy as moving an object in a scene
- Freely blend between 2D and 3D sound placement

Sample playback with high numbers of voices
- Unity can handle a lot of simultaneous samples!
- Priority system lets you control which sounds get culled when counts get too high
- Great when triggering sounds from physics simulations

Physics as a playground of sound
- Simulations of interacting objects are a fantastic source of sound triggers, from regular to chaotic
- Set a low bounce threshold in settings if you want a lively energetic system
- Set a higher bounce threshold when you want single hits, without bouncing

Watch out for performance. 
- Unity is optimised towards visuals not audio
- It will use all the resources it can - cap the framerate!
- Visual frame timing isn't a great match for musical time - know your frame times

Be careful not to degrade audio quality
- Too many sound sources, things will be culled - make sure it's the quietest sources using priorites
- Check those sample rates, on iOS Unity defaults to 24kHz - check this link for tips on how to run at 44.1kHz
- Watch out for memory management - Garbage Collection can cause lost time in your audio stream 

Not the best option if you want to run as a plugin
- Unity can be run as an engine inn another app, but it's tricky
- More audio focussed tools will serve you better if your goal is a VST or AU