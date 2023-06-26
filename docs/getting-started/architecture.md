---
title: Architecture
sidebar_position: 2
---

# Architecture

:::caution
This page is currently under development.
:::

Astrysk has been designed to allow for extensibility through applets. Applets are self-contained applications that can provide additonal functionality customistaion options. These applets development in part by the community fosters a rich eco-system of tools and features to enhance the user experience.

An applet has a well defined interface that the main application can use to initialise the applet. The interface consists of 6 main views:
- Home [Required]
- Search [Required]
- Settings [Required]
- Detail
- Modal
- Fullscreen Modal

The applet interface also has two other major functions;
- Configure
- Context Menu (For the persistent applet icon)
