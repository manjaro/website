---
title: "New Features in Pamac"
draft: true
date: 2023-04-20 12:00:00
kind: article
image: header.png
description: "Pamac Package Manager with latest improvements"
authors: [philm]
---
Pamac Package Manager and its latest improvements
Offline Updates
One of the most notable improvements in the latest version of Pamac is the addition of offline updates. Users can now install system updates even if they are not connected to the internet, making it more convenient for those who are frequently on the go.

Better Performance When Searching
Another significant improvement is the better performance when searching for packages. The database is now loaded at the beginning, making the search function much faster and efficient. Users can easily find the packages they need, saving them valuable time.

Enabling Offline Upgrades
To enable the offline upgrade feature, go to the preferences menu and enable the "Automatically download updates" and "Upgrade the system at shutdown" options. Once enabled, Pamac will download and install updates automatically at shutdown, even if you haven't applied them yet. If you use Plymouth with a compatible theme, a dedicated screen will appear at shutdown.

![Image](/news/2023/package-manager/offline-upgrade-screenshot.width-800.png)

Offline Upgrade
Using Pamac
To use Pamac, simply launch it from the application menu or run the command "pamac-manager" in the terminal. The graphical interface allows users to search for, install, remove, and update packages with ease. With the new offline upgrade feature, users can keep their systems up to date, even when they're not connected to the internet.

Changes to the CLI
The latest version of Pamac also brings changes to the command-line interface (CLI). One notable change is the way the polkit password dialog is displayed. Instead of a graphical pop-up, the dialog now appears in the terminal, making it more convenient to use the CLI on systems without a graphical interface or when accessing the system remotely via SSH. Users will still be prompted to enter their password when necessary, but the dialog will appear within the terminal itself.

In summary, Pamac's latest improvements showcase its commitment to providing a seamless and efficient experience for all types of users, whether they prefer a graphical or command-line interface. The addition of offline updates and improved performance when searching for packages make it even more user-friendly and convenient to use.
