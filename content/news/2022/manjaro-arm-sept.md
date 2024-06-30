---
title: "September 2022 In Manjaro ARM"
draft: true
date: 2022-09-27 12:00:00
kind: article
image: header.jpg
description: "New Calamares Look, Working On EFI Support, Installing Multiple Kernels"
authors: [danjohn]
---
### New Calamares Look
The Manjaro Artwork team has been working on a new look for our Calamares installer. So we are currently implementing this into our ARM images as well. At least the images that uses Calamares for the First Run setup.

Below is a couple of pictures (sorry for the quality) of it in action.

![Image](/news/2022/manjaro-arm-sept/hello.jpg)

![Image](/news/2022/manjaro-arm-sept/pamac.jpg)

### Working on EFI support
For a long time, we have been meaning to get EFI support working with our systems. But we have been unable o do it for a long while. Until this month, where we actually got our first dev images to boot. The profile is called generic-efi and as such has the same requirements as the regular generic image, except that the board firmware now also needs to support booting EFI executables. Luckily both Tow-Boot and u-boot does this. Some EDK2 EFI firmware does not seem to work. I think it's because they do not pass on a DTB to the kernel and relies on ACPI, which is not yet fully part of the ARM kernels.

So the boot order is as follows:

Board Firmware (EFI support) -> Grub -> Kernel

Thanks to @pak0st for also looking into EFI boot on the Pinebook Pro.

### Installing multiple kernels

![Image](/news/2022/manjaro-arm-sept/multiple-kernels.jpg)

This also means that with some tweaking to our kernel packages, you can install multiple kernels on the same device and choose which to boot in Grub, just like on x64.

However, our current kernel packages will likely not be changed to do that, but new versioned kernel packages will be made that are made for this.

These new kernel packages, will be built like most x64 kernels, with vmlinuz images and no DTBs. If you are on the generic-efi Development image you can try installing linux519, by running the command bellow.


<code>sudo update-grub</code>

This will update the grub menu and reboot your device. Now both 5.15 and 5.19 kernels should be showing inside the Advanced menu entry, with 5.19 being the default, just like x64 presents them.
