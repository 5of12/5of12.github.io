---
layout: post
title: Why did we build a Web Browser for MIDI?
author: Ant Nasce
coverImage: /assets/blogContent/whymidiweb/app.jpg
---
<img src="/assets/blogContent/whymidiweb/hero.png" style="border-radius: 15px" alt=""/>

<em>Every now and then we run into a problem that feels small on the surface but scratches a real itch...</em>
<a href="https://midiwebc.cc">MIDIWeb</a> started as one of those problems - a chat with a friend who asked:

<em>"Why can't I connect my OP-XY to my iPad and use this website?!"</em>

<a href="https://webmidijs.org">WebMIDI</a> is brilliant. It lets websites talk to MIDI hardware directly, which means a synth editor, sequencer, drum machine, patch librarian or strange little browser instrument can just be a link. No installer, no huge setup process. Just plug in a device, open a page and away you go!

That's the dream!

On Apple devices, <a href="https://webmidijs.org/docs/getting-started/#browser-support">that dream has historically been harder to reach.</a> So we wanted to help fix that...

## The Original MIDI Itch

The first version of MIDIWeb came from a simple question:

**Could we make a browser that gives Apple users a proper route into WebMIDI?**

It's not a Chrome/Safari replacement with a thousand features. MIDIWeb is a focused, musician-friendly app that understands MIDI and gives WebMIDI sites somewhere useful to live on iPhone, iPad, Mac and visionOS.

It felt a bit bonkers... (<em>"build a new web browser they said!" </em> 🤷), but MIDI is all about making connections and it's a language that fuels creativity. It connects devices, it connects people... so probably worth a shot, right?!

## A Browser, But Make It Musical

<iframe width="560" height="315" src="https://www.youtube.com/embed/MzokAqvyMj8?si=R10fA9YUeVJzXY2a" title="early MIDIWeb experiments" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

<center><em>Early MIDIWeb Prototype showing musical typing</em>.</center>

We got a working prototype up and running pretty quickly in early 2026. 

MIDIWeb has most things you'd expect from a browser: address bar, history, downloads, tabbed browsing - even a <a href="https://typetone.cc">musical typing keyboard</a>.
You visit a site, connect a MIDI device, grant permission and get on with making music/noise.

Underneath that simple surface, there's a fair bit of Swift magic happening...

MIDIWeb is built with SwiftUI and designed as a multi-platform Apple app. The same core idea can run across iPhone, iPad, Mac and visionOS without turning into four completely separate products wearing the same hat.

The fun part is the bridge between the web page and Apple’s native MIDI system.

On one side, a WebMIDI site expects JavaScript APIs. On the other side, Apple gives us native MIDI access through <a href="https://developer.apple.com/documentation/coremidi/">Core MIDI</a>. MIDIWeb sits in the middle, using a Javascript polyfill (inspired by <a href="https://github.com/cwilso/WebMIDIAPIShim">WebMIDIAPIShim</a>) and Swift code to translate between the two worlds.

## Building a Community

<img src="/assets/blogContent/whymidiweb/midiwebhub.png" style="border-radius: 15px" alt="MIDIWeb Hub community-driven website">

One of the nicest surprises was that MIDIWeb got picked up by lots of users during the TestFlight, pre-release stage.

We've had encouragement from musicians, developers, hardware makers and people who simply wanted their favourite WebMIDI site to work on the device they already had in front of them.

<a href="https://retrokits.com">RetroKits</a> have been especially supportive, even sending hardware over to us to test and debug! 🙏🏻

We've had people supporting MIDIWeb directly through <a href="https://buymeacoffee.com/5of12">Buy Me a Coffee</a> and <a href="https://github.com/5of12/sponsor">GitHub Sponsorship</a>. Every coffee, espresso and kind message has been given us a kick to keep on building and supporting this crazy App - it literally is the thing which gets us out of bed so thank you! 🙏🏻

## MIDIWeb Hub

<a href="https://midiwebhub.com">MIDIWeb Hub</a> started as a simple companion idea: if MIDIWeb helps you run WebMIDI sites, there should be a friendly place to find good WebMIDI sites in the first place.

So we began collecting them... 🤓

Synths. Editors. Sequencers. Utilities. Experiments. Tiny tools. Odd little gems from across the web.

Then people started contributing their own discoveries. Tens of users have suggested new sites, tested links, reported issues and helped turn MIDIWebHub into something more useful than a static list maintained by us alone.

## They Say 'Never Meet Your Heroes'...

We've always admired teenage engineering for the products they design and also the way they've embraced technologies like WebMIDI.

Many of their software tools, updates, sampler utilities etc. utilise web MIDI - check out their <a href="https://teenage.engineering/apps">Web Apps!</a>

<img src="/assets/blogContent/whymidiweb/tobias.jpg" style="border-radius: 15px" alt=""/>
<center></em>Tobias from teenage engineering, chatting to Ant recently about MIDIWeb and <a href="https://midivision.cc">MIDIVision</em></center>

A recent highlight was seeing MIDIWeb get a plug on teenage engineering’s <a href="https://www.youtube.com/playlist?list=PLSM1HuwZomMjjTqZ-1--yBQBSEESd68j5">midnight operations.</a>

<iframe width="560" height="315" src="https://www.youtube.com/embed/yQAyS9kQz9E?start=2446" title="teenage engineering midnight operations" frameborder="0" allow="autoplay; picture-in-picture; web-share" allowfullscreen></iframe>

A lot of MIDIWeb’s spirit comes from the kind of world teenage engineering products encourage: small devices, direct interaction, playful constraints, clever workflows and tools that invite you to try things rather than read a manual for an hour.

Chatting with Tobias also gave use the push to test out and fix up some bugs... turns out not all WebMIDI sites are created equal

<iframe width="560" height="315" src="https://www.youtube.com/embed/DKzWTOJU-tU?si=k2bg5574U470xRm7" title="teenage engineering midnight operations" frameborder="0" allow="autoplay; picture-in-picture; web-share" allowfullscreen></iframe>

<center><em>teenage engineering web apps working on an iPad in MIDIWeb</em>.</center>

## Not Every Useful Tool Needs To Be Huge

One thing we are trying to keep in mind is that MIDIWeb does not need to become bloated to become better.

There are plenty of tempting directions: better MIDI utilities, MIDI monitoring, built-in test tools, device profiles, MIDI 2.0 features, WebSerial experiments, deeper MIDIWebHub integration and more ways to help people discover useful sites.

Some of those will probably happen.

But the heart of MIDIWeb is still very simple:

**Help people use web-based MIDI tools on Apple devices.**

That clarity matters. Especially for a 5of12 product.

We like tools that invite exploration, but they still need to behave themselves. They need to feel considered. They need to do the useful thing before they do the flashy thing.

So the journey with MIDIWeb is partly about adding capability, but also about restraint. Making sure it stays approachable. Making sure new features serve the core experience rather than burying it.

## Where Next?

<iframe width="560" height="315" src="https://www.youtube.com/embed/jKdxwCYMzGE" title="MIDIWeb on visionOS" frameborder="0" allow="autoplay; picture-in-picture; web-share" allowfullscreen></iframe>

MIDIWeb Browser is still growing and new features are on the roadmap - there are always new devices and sites to support!

We want it to become a better browser for musicians. We want MIDIWebHub to become a more useful map of the WebMIDI world. We want to keep improving compatibility, polishing the interface and making the app feel at home across Apple platforms.

<a href="https://midi.org/new-midi-2-0-transports-ble-web-midi-and-transport-remote-management">MIDI 2.0 is out</a> which means WebMIDI is coming too - and we want to make sure there's a browser available to support it from the off!

We also want to keep the project sustainable. MIDIWeb has been supported by people buying us coffees, <a href="https://midiweb.cc/feedback/">sending feedback</a>, contributing links and telling us when something doesn't work. That support gives us the time and confidence to keep going.

The web is full of strange, useful, playful musical things. 

If you have an Apple device and a MIDI controller, you should be able to join in with the fun!
<a href="https://apps.apple.com/us/app/midiweb-browser/id6757226617">
<img src="/assets/app-store-badge.svg" alt="Download MIDIWeb on the App Store" style="width: 256px; border-radius: 0px; border: 0px">
</a>
<a href="https://apps.apple.com/us/app/midiweb-browser/id6757226617">Go to the App Store</a> and explore <a href="https://midiwebhub.com">MIDIWebHub</a>

<https://midiweb.cc/>  
<https://midiwebhub.com/>