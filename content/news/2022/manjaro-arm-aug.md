---
title: "August 2022 In Manjaro ARM"
draft: true
date: 2022-08-25 12:00:00
kind: article
image: header.jpg
description: "22.08 Has Been Released, Raspberry Pi Kernels Delayed, 2.06 Download Statistics"
authors: [danjohn]
---
### Manjaro ARM 22.08 released!
Every other month we release new images for some of the most popular ARM devices on the market. And this month was no exception. This month we released pre-made images for 15 devices, including the new **RK356X** based ones like **Quartz64** and the **Rock 3A**. We also included images for the **Orange Pi 3 LTS** and **Orange Pi 4 LTS** from <a href="https://orangepi.com/">Orange Pi</a>.

Of course we also had to turn down the amount of pre-made images we make, when we add support for new devices. So pre-made images for the Odroid N2's, Rock Pi 4's and a couple of older Pine64 boards are no longer created. The devices are mostly supported by our <a href="https://github.com/manjaro-arm/generic-images/releases">generic image</a> at this point and can also be installed via our CLI installer script manjaro-arm-installer.

Listings of old images have been removed from our website, so to not clutter it up to much with all the new ones there.

### No updates for Raspberry Pi kernels in a while
Some eagle-eyed users might have noticed that there has been no updates to the Raspberry Pi kernels and boot-loaders for a while. I would like to dig a bit into why that is without saying to much. Our Raspberry Pi maintainer has been hospitalized since the beginning of August with a serious condition. He has undergone several surgeries and many, many days in the CCU.

I am glad to report that he is doing fine at this point and will resume his good work on our Raspberry Pi specific packages. So updates to them should happen again pretty soon, but we want our team members to be in good health, so we completely understand if he wants to take some time to recover and other team members will try to update the packages as best we can.

In the mean time, other team members will perform normal updates to these packages.

### 22.06 download statistics
Some of you might be wondering how popular each device is amongst the Manjaro ARM users.

We don't have very specific statistics, but one we do have is the download number for the assets in GitHub, where our images are hosted. So here is a quick rundown of the **22.06** image download numbers. These numbers are measured from release day of 22.06 and up to late August 2022. So about 2 months.

These numbers include pkg-list, torrent and checksum files, but the vast majority are the images themselves.

1. Generic: 59315
2. Raspberry Pi 4: 52374
3. Khadas Vim 3: 3670
4. Khadas Vim 2: 3531
5. Odroid C4: 3257
6. Pinebook Pro: 3076
7. Rock Pi 4B: 1398
8. Ugoos AM6 Plus: 1165
9. RockPro64: 1140
10. Odroid N2+: 1095
11. Radxa Zero: 1038
12. Odroid N2: 981
13. Pinebook: 967
14. Rock Pi 4C: 923
15. Pine64 LTS: 917
16. Rock64: 893
17. Pine H64: 879
18. Odroid HC4: 855

The big surprise this time, was that the **Generic** images where the most downloaded "device" with just over **59000** downloads, compared to the **Raspberry Pi 4**, which is second at just over **52000**. Only 6 devices have more than 3000 downloads over 2 months. Images for many of the devices below 2000 downloads are not part of the 22.08 release.
