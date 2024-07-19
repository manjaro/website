---
title: "Linux Keeps the World Rolling"
date: 2024-07-20 10:00:00
kind: article
image: header.jpg
description: "Our take on the CrowdStrike incident in July 2024 bringing down the global economy at once. And how we aim to reduce that risk in the future."
authors: [romangg]
---
Yesterday, a small update to a central security component of many Windows client systems in corporate environments inflicted possibly the [single biggest IT outage in history](https://www.cnbc.com/2024/07/19/latest-live-updates-on-a-major-it-outage-spreading-worldwide.html), leaving millions of endpoints in an unbootable state.

This led to major industries ceasing production, flights being canceled, and medical operations having to be rescheduled on an unprecedented and unimaginable scale.

We want to talk about the reasons and solutions from the viewpoint of Linux users, developers, and maintainers.

## Outsourced Insecurity

The outage started with a pushed definitions update from CrowdStrike. How exactly this update propagated globally has yet to be reconstructed, but it must have happened quickly when work started in any region of the world.

We need to call it out as it is: the idea that you can simply install one additional highly independent — and by that, highly invasive — security software component to mitigate your key IT business risks is misguided.

Common security software suites like CrowdStrike are extremely invasive by design. They require full root or often even kernel-level access to operate effectively. This makes these programs high-risk. These are programs that can single-handedly disrupt millions of systems, as just demonstrated by CrowdStrike.

While corporations in the past often blindly trusted these additional helpers to reduce the risks involved with running Microsoft Windows on client systems, we believe there are more effective and lower-risk means of ensuring system integrity.

## Technology Over Process

Corporate environments often focus a lot on process definitions, certificates, and other non-technical requirements. This leads to a mindset of *process over technology*. We need to reverse that!

Right now, in many old industries, the IT department is still seen primarily as a cost factor, something to outsource. These old industries need to grow up. Software today is a key business success factor.

Choosing, maintaining, and using the right software is an effort that must be steered together by professionals inside the companies that use the software and by engineers at companies that provide it.

The result will be that business processes are resolved through the right usage of technologies, and not the technologies being deformed to fit artificial process definitions.

## The Atomic Update Age

Let's take one technology as an example of such a mindset that we at Manjaro are currently actively working on. Linux itself is already a highly dependable operating system running on billions of systems. We at Manjaro put a lot of effort into bringing this amazing technology to as many private users and businesses as possible.

We know that aspects like security and provisioning are important for businesses to choose Linux on their client systems.

For that reason, we are currently developing a new version of Manjaro, aimed especially at businesses, that will give them the most reliable and easily fleet-manageable solution possible: *Manjaro Immutable* — a declarative, immutable version of Manjaro with atomic updates.

<a href="/news/2024/crowdstrike-incident/cascading-stability.jpg" target="_blank">
  <img src="/news/2024/crowdstrike-incident/cascading-stability.jpg" />
</a>

This operating system gives the power back to your business: your IT division decides when to update which systems. You decide if the update is functioning as you expect, roll it out now or later, or if you need to do a rollback. And such a rollback is doable with ease thanks to the atomic updates.

We also work on a fleet-management solution to provide modern tooling and graphical interfaces for your IT experts. And the best part is that we are an open-source company. You will be able run it on your own systems, or let us host it for you. No lock-in. No sudden, untested updates pushed past your IT department, breaking your systems.

## Solution Diversity in Open Source

We are certain Manjaro Immutable can be a great solution for your business needs. [Contact us](/enterprise) to learn more. But while we of course believe in our product Manjaro and the Arch Linux ecosystem it is embedded into, this is not the only ecosystem that surrounds Linux.

If you as a business choose to go with Linux on your endpoints, you have options in selecting your user space stack, your distributor, your security provider. This allows your internal experts to choose the right tools for the job and mitigate the risk of widespread system failures.

No system is perfect, of course, but the diversity of solutions in open-source ecosystems is a crucial factor in reducing the risk of massive widespread system failures. Add to that the possibility for anyone to inspect, debug, and audit critical components of an open-source system stack, and it is evident that the such a system is superior to that of a closed-source monopolistic one.

Linux has already proven this fact in a business context on most servers worldwide. It is time now we let it play to its strengths on client systems as well.
