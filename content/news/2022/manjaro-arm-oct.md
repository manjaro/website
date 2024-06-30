---
title: "October 2022 In Manjaro ARM"
draft: true
date: 2022-10-27 12:00:00
kind: article
image: header.jpg
description: "S22.10 Released, Issue With Qt5-Es2-Wayland, Kernel 6.0, 22.08 Download Statistic"
authors: [vlopes]
---
### 22.10 released!
This month, as every other month does, included the 22.10 release builds. Not much has changed since the 22.08 release other than software updates on most devices. But we do have a new series of images this time around.

Introducing the generic-efi images. They have the same requirements as the regular generic images and are very similar. Except for 3 main points.

1. They run using EFI.
2. They use GRUB as the bootloader
3. They can have multiple kernels installed at the same time!
We hinted at this in the <a href="https://blog.manjaro.org/september-2022-in-manjaro-arm/">September blog post</a>, but now it's an official release. The images ship with the latest LTS kernel (linux515 at this point), but you can install more kernels. Currently available to install are linux515 (LTS, default), linux519 (stable), linux60 (stable). This kernel versioning will mimic the x64 kernels well.

These kernels will be maintained until kernel.org marks them as EOL (End Of Life).

### Issue with qt5-es2-wayland
For a couple of years we have been working with the Plasma Mobile team to provide a good experience on our supported mobile devices. The Pinephone in particular has been needing tweaks and optimizations because of the not-so-powerful GPU. Therefore Plasma Mobile developers have recommended using QT built with Open GLES 2 support for a long time. We provided Open GLES 2 based qt5-base, qt5-declarative, qt5-multimedia and qt5-wayland packages for along time and also certain others that needed rebuilds against these to work on Plasma Mobile, like pyside2 and others.

However, almost a year ago, the Plasma Mobile developers clarified that qt5-wayland build for OpenGLES 2 was not actually needed, so we switched our Plasma Mobile images to use the regular qt5-wayland package.

Of course old images/installs where still using the OpenGLES 2 based package, so we have tried keeping it up to date for that reason. But then at the start of this month, reports came in that some installs, not all, didn't launch Plasma Mobile anymore and it seemed to be because of an old version of qt5-es2-wayland, because it could not be updated. The reason why users could not update the package, seems be because of an error in our package repository, where the package and the signature was the same size, ergo a broken signature file. While we are not sure why this error happened, we did know that the version from arm-unstable branch was working, so we fast-forwarded that to both arm-testing and arm-stable branches. While people where now able to install that update, it seemed it did not fix the main issue of Plasma Mobile not launching.

So we decided to remove qt5-es2-wayland entirely from current installs and replace it with regular qt5-wayland, via an update to our manjaro-system package.

### Kernel 6.0
This month also brought us the release of Kernel 6.0. As many know, the major version numbers don't actually mean anything. So we already added
6.0 to our arm-unstable branch on its release day and it has since made its way through the branches and are now included in most of our 22.10 release images.

### 22.08 download statistics
So here is a quick rundown of the 22.08 image download numbers. These numbers are measured from release day of 22.08 and up to late October 2022. So about 2 months.

These numbers include pkg-list, torrent and checksum files, but the vast majority are the images themselves.

Raspberry Pi 4: 71561

Generic: 68654

Khadas Vim 3: 4749

Khadas Vim 2: 4703

Odroid C4: 4360

Orange Pi 4 LTS: 1489

Radxa Zero: 1477

Odroid M1: 1407

Orange Pi 3 LTS: 1347

Ugoos AM6 Plus: 1336

Rock 3A: 1278

Quartz64 Model B: 1210

Quartz64 Model A: 1162

Odroid HC4: 1106

