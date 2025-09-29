---
layout: post
author: Pete Nancollis
title: How to connect iOS to MIDI for Playtonik
---

Playtonik is a MIDI Innovation Award winning musical fidget toy for iPhone and iPad. We built Playtonik to be fun to play with straight out of the box, with no external gear, but for those of you with hardware or software synths there's a whole other layer of fun. That is if you can figure out the slightly strange setup of getting your iPhone (or iPad) to work as a MIDI device.

This is a guide to some of the methods we've been using to connect Playtonik to our favourite instruments and tools. We're an Apple Mac based team, so that does mean our instructions are biased towards that platform. MIDI works everywhere though, so hopefully you can still learn from this guide and make it work for you. If you have tips for getting things set up on other platforms, get in touch!

# Cables

The best solution we've found for latency and ease of setup is the to plug your device into a Mac with a cable. Once connected you can enable your phone as an audio device, which has the benefit of also enabling it as a MIDI device. This is a great way to connect Playtonik to a DAW like Ableton or Logic Pro.

We've not found a similar setup for connecting to Windows or Linux systems. If you know how to make it work, let us know!

- Connect your iPhone or iPad to a Mac with a USB cable
- Open Audio Midi Settings on the Mac
- In the devices list look for the iPhone or iPad
- Press the "Enable" button to activate the connection
- Open Midi Settings in your DAW, you should now see your device as an available MIDI input/output
- In Playtonik, tap the settings cog in the top right, then select the "IDAM MIDI HOST" device in the MIDI Input/Ouput dropdown.

<img src="/assets/iOSmidi/USBSetup.png" style="border-radius: 15px" alt=""/>

If your iPhone or iPad has a USB-C connector, then you can also connect directly to many USB audio/MIDI interfaces, keyboards and instruments. This can limit onward connectivity with a DAW but it is great if you just want to hook up Playtonik and a synth for a quick jam. 

# Network MIDI

iOS supports MIDI connections across a local network. This works over WiFi and can allow you to connect to a Mac on the same network. This is an easy solution to setup but latency will depend on the quality of the connection. MacOS has a built in solution for Network MIDI but on Windows or other plaatforms you will need to find a thirdparty solution. 

- In Playtonik, tap the settings cog in the top right, then select the "Session 1" device in the MIDI Input/Ouput dropdown. This is the network MIDI session
- Open Audio Midi Settings on the Mac
- Open the Midi Studio Window, then tap the globe icon in the top right to get the network setup window
- If you don't already have one, create a new local network session and give it a name
- In the devices panel, select your iPhone/iPad and tap Connect
- Open Midi Settings in your DAW, you should now see the network session as an available MIDI input/output

<img src="/assets/iOSmidi/NetworkMIDISetup.png" style="border-radius: 15px" alt=""/>

Ableton have a nice guide for [Setting up a virtual MIDI network](https://help.ableton.com/hc/en-us/articles/209071169-Setting-up-a-virtual-MIDI-network) which has some details of how it works on different platforms

# Bluetooth MIDI

Bluetooth MIDI is best for connecting direct to other instruments, but can also be used to connect to a computer. It runs on Bluetooth LE so has a small amount of latency, but is one of the easiest options to set up. 

- Open Audio Midi Settings on the Mac
- Open the Midi Studio Window, then tap the Bluetooth icon in the top right to get the Bluetooth setup window
- Set your Mac to "Advertise" itself to local devices
- In Playtonik, tap the settings cog in the top right then tap the Bluetooth icon
- The system dialogue for device pairing will open, select your Mac and pair it with your iPhone/iPad
- Close the Bluetooth dialog, then select the Bluetooth option in the MIDI Input/Output dropdown
- Open Midi Settings in your DAW, you should now see the Bluetooth connection as an available MIDI input/output

<img src="/assets/iOSmidi/BluetoothMidiSetup.png" style="border-radius: 15px" alt=""/>

For a Bluetooth MIDI instrument, follow the pairing process for your device using the Bluetooth dialog in Playtonik.

# Virtual Devices

If you want to try out MIDI, but don't have any external gear, all is not lost! There are other apps for iPhone and iPad that allow you to get connected.

Options on iPhone are more limited as you can only run one foreground app at a time. Playtonik doesn't run in the background (to save on battery life) but some audio apps like the awesome Fugue Machine and Korg Gadget will. You can set them playing, then switch to Playtonik and send/receive MIDI with the background app. On iPad you can run two apps in the foreground with Stage Manager. With the extra screen space you can set up a side by side view of Playtonik with another MIDI enabled app and control both at once.

Fugue machine example:
- Open Fugue Machine and tap the ... icon in the top right
- Enable MIDI Out via Settings screen using the "Fugue Machine MIDI Out" option
- Pick a pattern and press play
- Open Playtonik and go tap the settings cog icon
- Select the Fugue Machine MIDI as the device
- Notes from the Fugue pattern will trigger in Playtonik

<img src="/assets/iOSmidi/VirtualDeviceSetup.png" style="border-radius: 15px" alt=""/>

Note: As of Playtonik 1.5 the app doesn't show up as a virtual MIDI port. Playtonik can connect to other apps that share a virtual port, but not every app does. We have only tested with Fugue Machine, Korg Gadget & Logic Pro (iPad).

# Find out more

To find out more about Playtonik check out our website [5of12.co.uk](https://www.5of12.co.uk/#Playtonik) <br>
For examples of how we integrate Playtonik into our music check out our [Playtonik Playlist on YouTube](https://www.youtube.com/playlist?list=PL4zuBsU0ueMlLnphaBhRjQ5iLQO9R2qMJ)