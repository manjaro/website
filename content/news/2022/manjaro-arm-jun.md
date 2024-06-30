---
title: "
June 2022 In Manjaro ARM"
draft: true
date: 2022-07-05 12:00:00
kind: article
image: header.jpg
description: "Release 22.06, Generic Image Compatible With More Devices, KDE Plasma 5.25, Plasma Mobile Gear, Rk35xx Development."
authors: [danjohn]
---
### 22.06 released
The big news of this month for Manjaro ARM, is of course the 22.06 release. This release, just like last release, we created 108 images ready to be flashed onto eMMC, SD cards and USB sticks for 18 different devices. Our most popular device, the Raspberry Pi 4, also has its images presented in the Raspberry Pi Imager application directly.

Now the development for the next release has begun. Personally I hope that the next release, will be where we start to introduce release images for some devices based on the rk356x platform, like the Quartz64 and Odroid M1, which we already have development images for. We need at least kernel 5.19 (with some extra DTS patches) for that to happen though and 5.19.0 is scheduled for release in early-mid August.

### Generic image becoming more useful
The last couple of releases, we have had Generic images, which as the name implies, are not tailored to specific devices, but should be usable on a wide range of devices, as long as the kernel supports them. The current platforms we have in our kernel are allwinner, rockchip, amlogic/meson, tegra and apple. The main prerequisite for this image, is that the device has working Board Firmware, that can boot mainline DTB, on a storage device that the Generic image is not on. This is usually the SPI flash, but could also be eMMC or SD card depending on the device in question. We are slowly, but steadily, testing out the Generic image on more and more devices.

The devices we have currently tested to be mostly working are:

* Pine64 LTS
* Odroid N2(+)
* Pinebook Pro

There are also some tests being done on other devices, like Pinephone and Rock Pi 4 devices. But the current Generic images, do not have a mobile friendly interface, so the Pinephone tests have been limited to just booting. More tests on more devices will be coming down the road, as we find Board Firmware for them.

### Plasma 5.25
Plasma 5.25 was released this month and a few days after it arrived in our Unstable branch and quickly found it's way to Testing branch. This release should have many bug fixes all around and a couple of nice new features.

### Plasma Mobile Gear 22.06
Shortly after the release of Plasma 5.25 came the new 22.06 release of Plasma Mobile Gear, which is all the mobile centric applications from KDE. These include improvements to applications such as Angelfish, Kasts, Neochat, Spacebar, Dialer and so on. This means we will likely have a Beta 12 of the Plasma Mobile images some time in July.

### rk35xx development
At Manjaro ARM, we are one of the leading OS options for rk356x based boards, as we have development images for Quartz64 Model A and B, PineNote, Rock 3A, Odroid M1 and a couple of others. Mainline development is at a place now, where most of the missing pieces are DTS changes, where many are queued for inclusion in 5.20. So most of the boards use <code>linux-rc</code> package right now, with a bunch of DTS patches for the platform.

Regarding rk3588, only basic support is in our kernel as it's slowly getting submitted to the kernel mailing list.
