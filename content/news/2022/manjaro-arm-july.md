---
title: "July 2022 In Manjaro ARM"
draft: true
date: 2022-08-01 12:00:00
kind: article
image: header.jpg
description: "July 2022 In Manjaro ARM"
authors: [danjohn]
---
### Plasma Mobile Beta 12
This month saw the long awaited release of the Plasma Mobile Beta 12 images. It has been a couple of months since the release of Beta 11, so it was about time for a new one. Plasma 5.25 and Plasma Mobile Gear 22.06 was released recently, so it made sense to create a brand new Beta image. Not much as changed in this Beta, it's mostly package updates all around, but to reduce the initial update size after flashing the latest image, we released this one. If you already have a Plasma Mobile image, that you have kept up to date, it should functionally be the same.

### Upstream WiFi firmware for more Pine64 devices
The latest tag of the Linux-firmware package now includes WiFi firmware for a couple of **Pine64** devices, like Quartz64-B and the new batch of Pinebook Pro. Because of chip shortages, Pine64 has decided to ship different WiFi chips on the new Pinebook Pro batch. The good thing about this, is that they have chosen a chip that already has firmware upstream so we don't have to track down and ship yet another firmware package. The only thing that was missing was the NVRAM file for it, but that has just been included upstream in Linux-firmware as of the latest release. So WiFi and Bluetooth will now work on most distributions out-of-the-box on the Pinebook Pro. The same thing happened to the new Pinephone Pro batch and the same solution is already available.

### Kernel 5.19.0 released
The release of kernel 5.19 is something we at Manjaro ARM have waiting for. This kernel finally has the work to enable VOP2 in upstream for RK35XX based systems, like the **Quartz64** and **Rock** 3A boards. Only a few things are missing for full functionality, but we have patched those in so we can have the best support possible for these devices with 5.19. So we will likely make release images for the RK356X platform with the upcoming 22.08 release. *fingers crossed*
