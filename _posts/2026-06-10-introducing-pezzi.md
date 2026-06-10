---
layout: post
title: Introducing Pezzi
author: Tom Cartwright, Ant Nasce, Pete Nancollis
coverImage: /assets/blogContent/introducingPezzi/thumbnail.jpg
---

5of12 is a team of developers, designers and musicians. So, when we caught wind of the VIVERSE Creator Program, we jumped at the chance to combine all the things we love and build a joyful, relaxing, music-focused puzzle game!

This also presented a fantastic opportunity to build something new. VIVERSE is a web based platform and we wanted Pezzi to be an immersive experience, so down the rabbit hole of WebXR we went!

<video controls loop>
  <source src="/assets/blogContent/introducingPezzi/big-puzzle-complete.mp4">
</video>

## The Plan

The core of the idea behind Pezzi is "Music in Pieces". Players are presented with blocks of sound which, when connected in the correct order, reveal a snippet of a song. As more and more puzzles are solved, the song comes together bar-by-bar, loop-by-loop until the full tune emerges.

This creates a multi-dimensional puzzle: the musical challenge of figuring out the tune and the spatial challenge of arranging different block layouts without blocking yourself in the process.

<video controls loop>
  <source src="/assets/blogContent/introducingPezzi/spatial-puzzle.mp4">
</video>

## Build Once, Play Everywhere

Building for the web has many differences to creating something for a native platform, but there's one that we wanted to harness in this project: cross-platform. Pezzi is built for any platform that can visit the VIVERSE. It's an XR, desktop and mobile game all in one package. This means that more people can enjoy the game using their preferred platform but it also means designing for a bunch of different interactions.

Mobile and desktop were simpler to design for, leaning on the familiar clicks and drags that we have all grown accustomed to in the digital age. To really streamline interacting with the blocks we added a system to automatically orient the blocks to their valid connection, which means no extra inputs required once you know where the block needs to go, and a much snappier experience!

XR presented a slightly larger challenge, especially as we wanted to make sure the experience was hand tracking and controller compatible, focused around Meta Quest's Immersive AR passthrough. We started out with a more direct approach, where you would pinch a block to grab it. However, after a bunch of user feedback and one fateful arm day in the gym, we decided that another method was necessary - one that took significantly less movement to accomplish the same result. So we found a way to make the XR input suck. Suck blocks towards you that is! A ray cast from the hands and controllers provides a point to interact with blocks out of reach. Pinching or pulling the controller trigger drags the block towards you - placing it at a very comfortable distance without having to do large arm movements for each and every block interaction. No more sore shoulders!

<video controls loop>
  <source src="/assets/blogContent/introducingPezzi/play-everywhere.mp4">
</video>

## Inevitable MIDI

At 5of12 we have a history of integrating MIDI into our projects ([Playtonik](https://5of12.co.uk/playtonik), [MIDIWeb](https://midiweb.cc/), [TypeTone](https://typetone.cc/), [MIDIVision](https://midivision.cc/)). From the start we wanted to do the same for Pezzi. Why create our own protocol for managing patterns of notes in a specific order when there's something fantastic already established?

MIDI is integrated into Pezzi in two ways:

Firstly, all the puzzle blocks throughout the game are identified by their MIDI note metadata, which makes playing the tune created by the blocks simple: at each step of the puzzle, we just pass the block's note number and program into our SoundFont engine and out pops the correct sound at the correct pitch! If you haven't come across SoundFonts before, check out [Polyphone](https://www.polyphone.io/en/documentation/manual/annexes/the-different-soundfont-formats) for more info - they're awesome!)

Second, for puzzle generation. Pezzi has a puzzle creation engine which takes in MIDI files and creates definitions used to define everything about the puzzles: the tempo, number of beats, which notes are needed and in what arrangement, what instrument they should be played on. All the music can then be written with the tools we're familiar with and converted with very few extra steps into puzzles for the game!

![A Logic project with MIDI regions grouped by their "part" in the game](/assets/blogContent/introducingPezzi/logic-project.jpg)

## And Here We Are

We're so pleased with what we've built! The crash course in WebXR and web based game development has been a steep learning curve but has put us in a great spot to bring more of our ideas to life. Pezzi is a great foundation with loads of room to grow and we'd love to tackle more music, new kinds of blocks, sandbox modes, educational tools and more! So stay tuned to see what we get up to next!

Play Pezzi on the VIVERSE now!

<https://www.viverse.com/dPASDhP>  
<https://playpezzi.com>
