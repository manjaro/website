---
title: "December 2022 In Manjaro ARM"
draft: true
date: 2022-12-27 12:00:00
kind: article
image: header.jpg
description: "Merry Christmas And A Happy New Year, Hardware Accelerated Video Decoding On Rockchip,
22.12 Released, PlaMo Beta 14 Released, 22.10 Download Statistics"
authors: [danjohn]
---
**Merry Christmas and a Happy New Year**

From all of us on the Manjaro ARM team, we wish you a merry christmas and a happy new year. 2022 has been a year where many things have changed, lots of new devices was introduced and announced and improvements have been implemented. It's been a year with ups and downs, happy times and sad times.

To mentions a few of the things that happened, I'll start off by mentioning our Generic and Generic EFI images. These images made it possible for us to reach a range of devices that was not previously in our grasp. The Generic images would still be relying on the DTS provided by the kernel, but it was automatically chosen by the board firmware, which was now a requirement of the Board Vendor or user to provide instead of us as a distribution. And building on that premise, we created the Generic EFI images which, as the name suggests, requires the board firmware to be EFI capable. We suggest Tow-Boot in our wiki as that's one we know works for a lot of boards. The EFI images also enabled us to get proper support for multiple kernels being installed at the same time, as they don't use the kernel DTB files anymore, but rather rely on the DTB used when the EFI firmware was built. This also made it possible for us to use the GRUB bootloader, to manage booting the kernels we want. Dans Pinebook Pro install currently has 3 kernels installed, linux515, linux60 and linux61.

2022 was also the year where one of our team members went to the hospital because of heart complications. He is still recovering and is slowly regaining his strength, but it did mean a few changes to our Raspberry Pi workflows. Dan took over maintaining most of the Raspberry Pi related packages, while other things are contributed by the community.

This was also the year we started using this blog. The blog is a great way to keep our community updated with happenings within project and tell you guys about stuff that does not really fit into forum release posts.

Thank you all for a great 2022 and maybe we have an awesome 2023 together!

### Hardware Accelerated Video Decoding on Rockchip
Furkan, from the team, has been hard at work lately trying to get hardware accelerated video playback working on our devices.

We can now announce that we have packages available in the repository for rockchip devices to enable this functionality. But there are some caveats though. It only works with local media, it needs a special ffmpeg package based on version 4.4, only works in wayland it seems, and only works with special mediaplayers compiled with the support, which we have provided as mpv-rk and kodi-rk.

So to enable this functionality on your rockchip based device, install ffmpeg-rk, kernel-api-header-60 and mpv-rk or kodi-rk.

### 2.12 released
This month we released the last images of 2022. 22.12 does not have many new features, but has lots of package updates.

This release also re-introduced the Pinebook Pro images as a result of popular demand.

### Plasma Mobile Beta 14 released
Hot on the heels of Beta 13 last month, we did Beta 14 this month. Beta 14 sports the new Plasma Mobile Gear 22.11 applications, together with Plasma 5.26 and up to date system packages.

The kernel was 6.1.0-rc8, which is basically the released 6.1.0 kernel.

### 22.10 download statistics
So here is a quick rundown of the 22.10 image download numbers. These numbers are measured from release day of 22.10 and up to late December 2022. So about 2 months.

These numbers include pkg-list, torrent and checksum files, but the vast majority are the images themselves.

* Raspberry Pi 4: 54180
* Generic: 49452
* Generic EFI: 5413
* Khadas Vim 2: 3581
* Khadas Vim 3: 3564
* Odroid M1: 975
* Orange Pi 3 LTS: 943
* Radxa Zero: 889
* Rock 3A: 859
* Quartz64 Model A: 807
* Ugoos AM6 Plus: 767
* Odroid C4: 738
* Quartz64 Model B: 723
* Odroid HC4: 661
* Orange Pi 800: 621
