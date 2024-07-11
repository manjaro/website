---
title: "All New on manjaro.org"
draft: true
date: 2024-07-11 16:00:00
kind: article
image: header.webp
description: "The Manjaro website has been rewritten with a focus on professional design and tech simplicity."
authors: [romangg]
---
The Manjaro project has a long history. What stayed the same all this time was the main domain [manjaro.org](https://manjaro.org). Naturally though over the years changes to its design and underlying tech were made.

Now the website has been completely rewritten one more time from scratch. And it just went live. Welcome to the all new [manjaro.org](https://manjaro.org)!

## Features
### Unclutter
One goal of the rewrite was to reduce the amount of content the website presents and focus on the important aspects the flagship website of a Linux distribution should provide. For that the main interface was radically simplified, now featuring only a single top navigation bar without additional dropdown menus. Other features that might sometimes be useful to people can be found in the footer.

### Commercial Offerings
An important area of work was restructuring the presentation of our commercial offerings. The Manjaro company is currently expanding with its enterprise service offerings. We help businesses and public institutions to run Manjaro on their employee's devices and integrating it with their overall internal IT infrastructure.

More information on enterprise services can now be found directly from the [Enterprise link](/enterprise) in the main navigation.

On the other side links to the old merchandise shop and other advertisement has been removed from the site. We will discuss in the future if and how we will bring some form of Manjaro-branded "swag" back, but in any case it won't be featured in a prominent style on our website anymore.

### Design
Overall, the new design has been moved in a more professional direction, with less color usage and only a few animations. This is in line with our commercial focus on enterprise services.

While the overall vibrancy of the design has been reduced, on the other side, the design also has more variation in a sense with the introduction of a native dark mode.

## Technology
### Static with Nuxt
The old website was based on Wagtail, a well-known content management system based on Django. It is a good technology choice overall for more feature-rich websites, but in our case we can simplify the tech stack a lot by going fully static on the server side.

To achieve this in a comfortable way we use [Nuxt](https://nuxt.com/), a great Javascript and Vue.js meta-framework. The resulting code base is very tidy and minimal.

### Easy to Maintain
All code and content of the website is now contained in a single [GitHub repo](https://github.com/manjaro/website). On changes a new version of the website is automatically deployed. As the site is static, we can use the free hosting offer of [Cloudflare Pages](https://pages.cloudflare.com/) for that.

## Feedback and Contribute
We look forward to hearing your feedback. For that join the discussion in the [Manjaro Forum](https://forum.manjaro.org/t/our-new-official-manjaro-website/165270) or on [Reddit](https://www.reddit.com/r/manjaro/comments/1e0ss7t/new_manjaroorg_website/).

And in case you want to contribute to the website directly, you can do that through a pull request to the GitHub repo. There are also some [open tickets](https://github.com/manjaro/website/issues) if you're looking for inspiration for a task.
