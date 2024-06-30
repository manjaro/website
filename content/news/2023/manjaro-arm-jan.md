---
title: "January 2023 In Manjaro ARM"
draft: true
date: 2023-01-31 12:00:00
kind: article
image: header.jpg
description: "Restructuring Arm-Profiles, Pinebook Pro U-Boot Issues, CPUIDLE Support?"
authors: [danjohn]
---
### Restructuring arm-profiles

Our arm-profiles have been in use for several years now, and over time some duplication has occurred across different profiles. To address this issue, we recently took steps to de-duplicate the profiles. Specifically, we created a new "shared" profile that includes all the packages required by any edition on any device, such as commonly used packages like nano and inxi. This change makes it much simpler to address missing packages, since instead of having to add them to each edition separately, we can now add them to the shared profile and they will be automatically included in all images.

However, this change did require updates to our <a href="https://web.archive.org/web/20231210070850/https://gitlab.manjaro.org/manjaro-arm/applications/manjaro-arm-tools/-/merge_requests/15">tools</a> and <a href="https://web.archive.org/web/20231210070850/https://gitlab.manjaro.org/manjaro-arm/applications/manjaro-arm-installer/-/commit/40543f9fcfca570db9fd50cb9c61df88e58bd89f">installer</a>. We have released new versions of both to take advantage of the profile changes, and these updates are available in all branches of our ARM repository.

### Pinebook Pro U-boot issues

We have observed some issues with U-boot on the Pinebook Pro in recent releases, specifically with booting the OS from eMMC after flashing U-boot versions from 2022.07 and newer. We are currently investigating the cause of this problem. While we have not made any changes to the way we build the U-boot binaries, we have updated to the latest upstream releases of TF-A and mainline U-boot. We assume that these releases are free of critical regressions, but the inability to boot from eMMC is obviously a serious issue.

In the meantime, we recommend using U-boot on the Pinebook Pro, which is a well-supported and tested alternative. To address the current issue, we have temporarily downgraded our package to a known working version from April 2021. However, please note that this version does not support Display/LCD, so the screen may appear black or off until the kernel is properly running, as was the case in the past. We will continue to investigate the U-boot issue and provide updates as soon as possible.

### Working on CPUIDLE support on Allwinner devices

Recently, Megi issued a <a href="https://web.archive.org/web/20231210070850/https://xnux.eu/log/#077">statement</a> encouraging distribution maintainers to enable support for CPUIDLE, a kernel function that can significantly reduce battery power usage. In January, we began the process of enabling this function by enabling the required TF-A option, as recommended by Megi. However, we discovered that CPUIDLE still wasn't working as expected. Further investigation revealed that additional changes are needed in U-boot to fully support CPUIDLE.

This work is ongoing, and we will provide updates as progress is made. We remain committed to optimizing power usage on Allwinner devices and appreciate Megi's guidance in this regard.
