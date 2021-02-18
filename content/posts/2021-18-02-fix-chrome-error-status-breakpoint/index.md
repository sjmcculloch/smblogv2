---
title: How to fix Chrome error 'status_breakpoint'
slug: fix-chrome-error-status-breakpoint
date: 2021-02-18

# optional fields
published: true
generate-card: true
language: en
cover: ./cover.jpg
imageShare: ./adding-redirects-gatsby-share.png
tags:
  - chrome
  - edge
  - windows
---

Recently I put together a new PC build and occasionally my Chrome browser would crash with a **'status_breakpoint'** error.

Researching this issue, there are a [few solutions](https://www.chromestory.com/2020/07/status-breakpoint-chrome-edge/):

1. Update to latest version of Chrome
2. Disable Chrome extensions
3. Rename Chrome executable to chm.exe (C:\Program Files\Google\Chrome\Application\chrome.exe)

None of these worked for me 😬

Coincidentally I had been receiving an occasional **blue screen of death** on Windows 10 with a **memory management** error. This indicated an issue with my computer's memory (RAM). To test RAM you can use the free utility Memtest86 [(full guide)](https://www.overclockersclub.com/guides/memtest86_memory_guide/). This test revealed a number of bad sectors on my RAM and allowed me to return it for a full replacement.

I'm happy to report that since swapping out the RAM I have not received any more **'status_breakpoint'** errors. So if you have this issue, try checking your RAM.
