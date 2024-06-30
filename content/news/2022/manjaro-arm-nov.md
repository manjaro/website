---
title: "November 2022 In Manjaro ARM"
draft: true
date: 2022-11-27 12:00:00
kind: article
image: header.jpg
description: "Slow Updates From Arch Linux ARM, Plasma Mobile Beta 13 Released, Pinebook Pro Images Will Be Back"
authors: [vlopes]
---
**NOVEMBER 2022 IN MANJARO ARM**

### Slow updates from Arch Linux ARM
During November, Arch Linux ARM seems to have had some slowdown, regarding package update frequency. Sometimes it could take multiple days between any package updates from Arch Linux ARM, resulting in also Manjaro ARMs Unstable branch getting these big batches of package updates. Sometimes 500+ packages at a time. We don't know why this happened, but we do hope that if the Arch Linux ARM team is looking into improving it. Some big rebuilds have happened in this time, like Qt 5.15.7 and OpenSSL 3, which did require many packages to be rebuilt.

### Plasma Mobile Beta 13 released
We try to release new Beta images for Plasma Mobile regularly when there's a new Plasma release or Plasma Mobile Gear releases. The last couple of ones have been quite unstable compared to the usual, which is why we have been hesitant to release Beta 13 to early.

But now we decided to release it anyway, even though the real functionality updates are not noticeable. Lots of small things have been looked into though.

We had a Beta 13 image on our Github CI builds for a little while, but it was replaced by a new one a couple of weeks after, so it had some more updated packages, like Plasma 5.26.2 and Plasma Mobile Gear 22.09, kernel 6.0 and lots of other new stuff.

It has a couple of new issues though, like Megapixels is not working on the Pro with kernel 6.0 and the Dialer can be pretty unreliable. I've seen it crash PulseAudio and also the telephony daemon of KDE.

### Pinebook Pro images will be back
Due to popular demand, the Manjaro ARM team has decided to provide Pinebook Pro specific images again.

While the Generic and Generic EFI images, for the most part, works just fine on the Pinebook Pro, many users have mistakenly thought that we no longer support the Pinebook Pro when the images where no longer present on the website. So while we will be focusing more and more on the generic implementation for the rk3399 devices, like the Pinebook Pro, we still support the good old device specific images. To convey this better, the 22.12 release next month will bring back the Pinebook Pro specific images.

To clarify, the main differences between the generic images and the Pinebook Pro specific images are that the device specific images come with a Pinebook Pro specific u-boot pre-installed and has a package installed to work around the audio issues. That is it.

So we will still recommend using the generic images together with the proper board firmware on SPI over the device specific image. To get audio working on the generic image, installing the "pinebook-pro-post-install" package should be enough.
