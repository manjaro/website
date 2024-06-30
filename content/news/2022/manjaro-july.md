---
title: "
July 2022 In Manjaro"
draft: true
date: 2022-08-07 12:00:00
kind: article
image: header.jpg
description: "Many Package Updates Including 5.19 Kernel, Virtualbox, Mesa. We Explore Linux Gaming On A Handheld, Website Gets A New Update-Status Feature"
authors: [danjohn]
---
July was very interesting for us. Part of our team enjoyed their holiday. However the rest of us managed a lot that month. We had a lot of package updates, fixes to a vulnerability affecting both AMD and Intel CPUs, slight improvements to our new homepage and some work done for upcoming hardware with Manjaro pre-installed.

### Manjaro Ruah
In July we managed to get out five point-releases for our current codename Ruah release. That included the 5.24.6 LTS update to **Plasma** and 5.96.0 update to **Frameworks**. On **Gnome** side of things packages got updated to 42.3. The latest version 21.3.6 images also include initial fixes to the security issue Retbleed.

### General Package updates highlights:
* **Kernel** got updated to <a href="https://9to5linux.com/linux-kernel-5-19-officially-released-this-is-whats-new">5.19</a>, which brings new features, improved hardware support, and many bug and security fixes
* **Virtualbox** <a href="https://www.virtualbox.org/wiki/Changelog-6.1#v36">6.1.36</a> fixed some crashes and got **Guest Additions** stabilized
* Mesa <a href="https://docs.mesa3d.org/relnotes/22.1.4.html">21.1.4</a> got some Radeon segfault fixes
* We had <a href="https://gitlab.freedesktop.org/pipewire/pipewire/-/releases">several updates</a> to **Pipewire**. This included a fix for a critical bug that could crash JACK applications. Some more regressions in audiomixer were fixed, including crackling and stuttering in some cases as well as some channel mapping regressions

As usual, regular packages like **Firefox, Thunderbird, Cinnamon** and others got renewed.

### Manjaro Hardware
Nick from <a href="https://www.youtube.com/c/TheLinuxExperiment">The Linux Experiment</a> did a <a href="https://www.youtube.com/watch?v=cKJU9IFDbE0">review</a> of our <a href="https://store.minisforum.com/products/deskmini-um350-x-manjaro-linux">UM350 Mini-PC</a> we collaborated with Minisforum. The compact PC with Ryzen APU works great for Office, work and casual gaming. Furkan worked on <a href="https://twitter.com/fkardame/status/1550213548760076290">Linux Gaming</a> on a Handheld-PC. We plan to use <a href="https://twitter.com/fkardame/status/1548783109734293513">Plasma-Mobile</a> in combination with Valve&#x27;s <a href="https://gist.github.com/red-dragon65/c7771a9347840fbcf5528f1528769836">DeckUI</a> for our upcoming devices to have a smooth gaming experience. More information coming on that matter in the following months.

### Manjaro Website
Vitor added <a href="https://manjaro.org/update-status/">Update-Status</a> as a new service to our homepage. Now it is easy to get the current voting status of Update Announcements in one single page. For more details you can follow the link to each announcement in our forum and check what the team and the community say about it, what does not work and possible fixes.
