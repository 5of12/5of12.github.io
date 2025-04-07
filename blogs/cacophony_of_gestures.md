# A Cacophony of Gestures

## TL:DR
We built a gesture control library for Unity. One that isn’t tied to a particular source of input data and works outside XR. It is modelled on an Anticipation, Action, Reaction cycle to help development run smoothly. It’s called Cacophony as a nod to the complexity that arises from the interactions between gestures when building applications with multiple controls.

## Intro 
Spatial computing applications give us the possibility of using our hands to interact with content without additional controllers. XR headsets such as those from Apple, Meta and Microsoft have built fantastic spatial interaction systems and they provide robust tooling to help developers work with their respective platforms. But what are you to do if you want to apply these techniques outside the XR space?

In the world of flat screens, spatial computing often starts with something that sounds simple. Using hand gestures to trigger behaviour in an application. Despite it being a common entry point to this world, there aren’t a lot of tools available to help you implement it. So we built one!

## Cacophony
Developing a gesture control application is a journey of discovery. It’s very easy to fall into some common design traps that make building a reliable solution difficult and expensive. This is why we named our library Cacophony, it’s a friendly warning about what’s to come so that you can be prepared!
What is a gesture?
A gesture can be pretty much anything you do with your hand that a sensor can detect. With optical hand tracking solutions that can detect the positions of your fingers, that means any hand pose you can think of and any kind of motion you might associate with it. 

This is a lot of freedom for designing your system. But, like a kid let loose with a new set of paints, there’s suddenly colours everywhere and it’s all merging into brown. Gestures can be thought of as discrete, but the boundaries between them are fluid. To successfully design with gestures we need constraints.

## Turning Gestures Into Action 
Cacophony doesn’t prevent you from defining as many gestures as you like in your application. It does however try to make things easier to manage and control.

Cacophony breaks down gestures into a set of components which combine to form an Anticipation, Action, Reaction cycle. 

First we detect the shape of the hand and determine if that shape matches a given Gesture Definition. A Gesture Definition is a collection of pose descriptions that allow us to specify what is and isn’t the hand shape we are looking for. This forms the anticipation part of the cycle.

> Given a hand in a thumbs up position 👍

Now we have detected a gesture is occurring, we are ready for action. You’ve put your thumb up, but what are we going to do with it? Gestures are coupled with Actions, which observe the gesture over time and determine if there is intent behind it. 

> When held stationary for 1 second ⏱️

The reaction from the application is how users perceive the effect of their actions. Reactions are important at every stage of a gesture from initiation to successful detection completes. Clear feedback helps people learn the system and gives them confidence that their inputs are being processed as they expect. 

Cacophony actions provide a series of events for your application to react to, representing each stage of detection. This makes it a simple process to create rich audio, visual and haptic feedback in response to the gestures detection.

> Then release the confetti 🎉

When designing applications for gestures it’s important to consider all the stages of the process and not just think of it as a static symbol. Using tools that are structured around this process a designer and developer can quickly iterate on designs and ensure their interactions are clearly defined. 

## About that friendly warning…
With all this freedom to create new gestures comes a temptation to use them. Even with a robust detection system though, the reality of gesture systems is that the complexity grows unmanageable very quickly.

Overlap between different gestures is common, and you have to remember them all while avoiding accidentally performing them when you don’t want to. If you attach a sound effect to each gesture then you quickly create a cacophony of intentional and unintentional sound. 

With restraint and careful design however you can build some fun and engaging applications that bring the spatial computing world into the real world.


## Try it yourself
If you’ve read this far you are probably interested in trying the system out for yourself. The good news is you can! Check it out on our github and take a look at the example projects.

## About the Authors
5of12 are a Spatial Computing Studio based in the UK with 15+ years combined experience. They specialise in spatial interaction design solutions for XR, digital out of home, screen-based experiences and mixed media, immersive arts.
