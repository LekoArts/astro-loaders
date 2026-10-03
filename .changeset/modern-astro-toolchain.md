---
"@lekoarts/clerk-loader": major
"@lekoarts/flickr-loader": major
"@lekoarts/plausible-loader": major
"@lekoarts/trakt-loader": major
---

Require Astro 7 and update the build toolchain for Vite 8, tsdown 0.23, and TypeScript 7. Clerk and Trakt include TypeScript 6 as a runtime dependency because their generated collection schemas use the compiler API through `zod-to-ts`, which is not available in TypeScript 7.
