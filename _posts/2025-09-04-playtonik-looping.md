---
layout: post
author: Tom Cartwright
---

I've recently been working on a looper feature for Playtonik, our musical fidget toy. The idea is to capture a section of the inputted notes and to give the user controls to play the loop back at will.

Playtonik is a Unity project and, as anyone who has worked with Unity before probably knows, trying to keep things in sync can sometimes be challenging. This is especially true when it comes to anything that needs to run outside of the update loop.

# The Looper

The Playtonik looper is a "free time" capture system for MIDI note messages. In practice, this is a buffer with a 1ms interval and four note slots per interval, up to an arbitrary maximum of 20 seconds.

As we're not recording audio samples, 1ms is plenty of fidelity to capture the performed notes to be reproduced with accurate timing.

# The Problem

Enter the Unity update loop problem. In Playtonik, notes are triggered by spawning a "bell" with an attached audio source. As this is coupled to the physics system, it must be triggered in the Unity main thread. The problem is that neither of Unity's loop systems could play the notes back with accurate timing.

The `FixedUpdate` loop is tied to the physics of the app, meaning that changing the duration to match the 1ms interval of the looper buffer drastically changed the core processing of the rest of the application - so isn't appropriate for the looper playback.

The normal `Update` loop is variable in length, meaning it's neigh on impossible to know which index of the buffer should be triggered at a given point.

One way to approach this kind of problem would be to spin up a thread that executes every ms, reads the appropriate index of the buffer and plays it.

This is where things get tricky. For those that don't know, Unity is not thread safe. This means that no code run from external threads can interact with the Unity main thread.

# The Solution

So at this point, we can trigger the notes and we can read the stored MIDI information from the buffer - but we can't link those together due to the threading limitations. Darn.

My first approach was to use the thread to store the note in a concurrent array that could then be accessed in the main thread to play the notes. This did produce some level of playback of the recorded melody, but the timing was off. As the notes were being stored without timing information, the update loop would trigger them whenever it got round to it, causing major delays in when the notes sounded.

Now we're getting notes out, but they're not as we performed them - which for a music making tool is far from the ideal situation.

To get around this, I thought of using the playback thread as a lookahead process instead of triggering the notes directly. Each fixed update frame, the thread will run and gather all the notes that should be played in the following frame. These notes are then collected into a buffer which can be read from the main thread, meaning that each frame only plays notes that should be played in that window of time.

Success! The notes being played back now feel much more in time with how they were originally performed and the feature feels much more useful.

# Drawbacks

As with any solution to a problem, there tends to be compromises. The major one with this solution is the timing fidelity in the playback. While we compute which frame each note should play in, there is no method of knowing at what point during the frame it should be played. As the fixed update frame is 20ms long in the Playtonik project, this means that there is potential for up to 20ms of error in the timing of the note.

This doesn't sound great on paper but I always find that when writing software it pays to be pragmatic, and in this circumstance it comes down to how it feels to use. From all the testing we've done with the app so far, we haven't noticed this delay cause any problems when using the looper. So, whilst it theoretically exists, it's not getting in the way of the intended use so there it shall lie.
