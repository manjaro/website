---
title: "New Packages Service Is Online"
draft: true
date: 2022-06-16 12:00:00
kind: article
image: header.jpg
description: "Old Service Branch-Compare Is Now Back Rewritten From Scratch To Integrate In Our Infrastructure."
authors: [vlopes]
---
Packages is a service to search for software packages and visualize some package details, it can be tried <a href="https://packages.manjaro.org/">here</a>, this service was known before as branch-compare and renamed to packages to better reflect what the service does. This service was mostly used by manjaro developers, after we moved on to the new infrastructure this service was not a priority and was left in our to-do list. We have noticed some members of our community that also used that service miss it.

The first implementation of package search was a few bash scripts and cron jobs glued together to generate some HTML, we needed something that could integrate with our current infrastructure and at the same time could scale in the future to provide API's that we could use in other future services.

Christian Finnberg a community member has written an entire new implementation in Flask, that he has put online for users until we had time to publish our own implementation. We took some ideas from that instance. As much as it is tempting to use something already coded, doing something from scratch guarantees that it will work the way we need it. Even as we did not use its code, it is always interesting to see the community stepping up to build something cool, and that is what Open Source is all about.

### Features
* Compare versions across branches
* Ability to use regex
* visualize package details
* distinguish between manjaro packages and upstream

### Commands can be used as pre-defined regex searches.
* #manjaro, for displaying manjaro packages
* #kernels, for displaying available Kernels
* #eol, for displaying end of life packages
