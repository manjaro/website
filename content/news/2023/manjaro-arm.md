---
title: "February 2023 In Manjaro ARM"
draft: true
date: 2023-02-26 12:00:00
kind: article
image: header.jpg
description: "RK3399 U-Boot Fixes, 23.02 Released, New LTS Kernel Released, 22.12 Download Statistics"
authors: [danjohn]
---
RK3399 uboot fixes
In our January blog post, we mentioned that we had discovered some regressions in the newer U-boot for Pinebook Pro. Thanks to the help of user Matthew, we were able to identify the root cause of the issue and develop a fix. We have now applied this fix to all the rk3399-based U-boot builds currently available in our repository.

The issue was traced back to a new configuration option introduced in the 2021.10 upstream release. This option needed to be enabled to support HS200 and HS400 eMMC cards, which were previously covered by a different mechanism. As a result, the U-boot builds had been unstable for over a year. However, we believe that we have now resolved the issue by adding the necessary configuration option to all the builds.

We are grateful to Matthew for his assistance and testing throughout this process. We will continue to monitor the situation and make further improvements as needed to ensure that devices perform at their best.

Manjaro ARM 23.02 released
Welcome to our first release of 2023! While this update may seem quieter than some of our previous releases, it includes a number of important behind-the-scenes improvements and bug fixes. We have not introduced any new devices, nor have we made any major updates to our desktop environments or toolchains.

Instead, we have focused on refining existing software and ensuring that it continues to perform at its best. We have addressed numerous bugs and issues reported by our community, and we have made a range of smaller improvements that should enhance the overall experience for our users.

As always, we remain committed to providing reliable, high-quality software for devices, and we look forward to sharing more updates with you throughout the year. Please see the announcement for more details on this release.

New LTS kernel
We're pleased to announce that in early February, we added kernel 6.1 to our list of supported LTS kernels. This means that kernel 6.1 will continue to receive updates until the end of 2026, providing our users with long-term stability and security.

To mark this occasion, we have updated our "linux-lts" package to version 6.1, which is now available for all our devices. As a result, version 5.15 of the kernel is now only available for our "Generic EFI" images, where it can be accessed via the "linux515" package.

More recently, in late February, we added kernel 6.2 to our repositories. We're excited to bring our users the latest advancements in kernel technology, and we believe that kernel 6.2 will offer significant improvements in performance and security.

As always, we encourage our users to keep their systems up to date with the latest kernel releases and security patches, and we remain committed to providing the highest level of support for devices.

22.12 download statistics
We're excited to share some quick statistics with you regarding the download numbers for our 22.12 image release. These figures cover the period from the release day in late December 2022 up to late February 2023, giving us a snapshot of the first two months since the release.

Please note that these figures include not only the actual image files, but also the accompanying pkg-list, torrent, and checksum files.

Overall, we're thrilled to report that the 22.12 release has been a resounding success, with downloads exceeding our expectations. In total, we recorded 75.706 downloads of our image files during the two-month period, which is a testament to the popularity and demand for our operating system.

We want to thank all our users for their continued support and for helping us to make this release such a success. We remain committed to providing updates the highest quality as possible, and we look forward to sharing even more exciting updates with you in the coming months.

1. Raspberry Pi 4: 66112
2. Generic: 30174
3. Generic EFI: 7255
4. Khadas Vim 2: 5036
5. Khadas Vim 3: 4951
6. Pinebook Pro: 3463
7. Orange Pi 3 LTS: 2110
8. Orange Pi 4 LTS: 1709
9. Orange Pi 800: 1688
10. Odroid M1: 1673
11. Rock 3A: 1662
12. Ugoos AM6 Plus: 1648
13. Odroid C4: 1609
14. Radxa Zero: 1606
15. Quartz64 Model A: 1595
16. Odroid HC4: 1458
17. Quartz64 Model B: 1457
