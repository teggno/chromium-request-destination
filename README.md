# chromium-request-destination

This repo contains a website that aims to reproduce a Chromium issue.

## Issue Description

The `request.destination` that can be observed in a service worker's `fetch` event handler is `video` instead of `audio` when using an `<audio>` element in certain circumstances.

[Open the website to reproduce the issue](https://teggno.github.io/chromium-request-destination/)
