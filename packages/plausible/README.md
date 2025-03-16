# Astro Plausible loader

This package provides a [Plausible](https://plausible.io/) content loader for Astro's [content layer](https://docs.astro.build/en/guides/content-collections/). You can access the Stats API **v2** to view historical and real-time stats of your website.

**Want to see an overview of all my loaders? Visit [astro-loaders.lekoarts.de](https://astro-loaders.lekoarts.de) ✨**

<!-- automd:badges license -->

[![npm version](https://img.shields.io/npm/v/@lekoarts/plausible-loader)](https://npmjs.com/package/@lekoarts/plausible-loader)
[![npm downloads](https://img.shields.io/npm/dm/@lekoarts/plausible-loader)](https://npm.chart.dev/@lekoarts/plausible-loader)
[![license](https://img.shields.io/github/license/LekoArts/astro-loaders)](https://github.com/LekoArts/astro-loaders/blob/main/LICENSE)

<!-- /automd -->

## Prerequisites

- Astro 5 or later installed
- A Plausible API key
  - Go to your Plausible Analytics account, navigate to **"Account Settings"** and click on the section called **"API Keys"**.

## Installation

<!-- automd:pm-install separate auto=false -->

```sh
# npm
npm install @lekoarts/plausible-loader
```

```sh
# yarn
yarn add @lekoarts/plausible-loader
```

```sh
# pnpm
pnpm install @lekoarts/plausible-loader
```

<!-- /automd -->

## Usage

Import `@lekoarts/plausible-loader` into `src/content.config.ts` and define your collections.

**Important:** You need to either define the Plausible API key as an environment variable (`PLAUSIBLE_API_KEY`) or pass it as the `api_key` option.

```ts
import { plausibleLoader } from '@lekoarts/plausible-loader'

const plausible = defineCollection({
  loader: plausibleLoader({
    query: {
      site_id: 'example.com',
      metrics: ['visitors'],
      date_range: '7d',
    },
  }),
})
```

Similar to the Stats API [response structure](https://plausible.io/docs/stats-api#response-structure) the loader returns an object of `{ results, meta }`. If you want to access the computed `query`, you can run Astro with the `--verbose` flag to read that.

## Options

### `query` (required)

The Plausible Stats API v2 accepts a `query` object. Pass the [request query](https://plausible.io/docs/stats-api#request-structure) to the endpoint through this option.

Read the documentation on the individual keys you can use in said object. You always **have to** include the `site_id`, `date_range`, and `metrics` keys.

For example, to get a timeseries, pass in this object:

```ts
import { plausibleLoader } from '@lekoarts/plausible-loader'

const plausible = defineCollection({
  loader: plausibleLoader({
    query: {
      site_id: 'example.com',
      metrics: ['visitors', 'events'],
      date_range: '7d',
      filters: [
        ['is', 'visit:os', ['GNU/Linux', 'Mac']]
      ],
      dimensions: ['time:day']
    },
  }),
})
```

### `api_key`

If you didn't define the `PLAUSIBLE_API_KEY` environment variable you have to pass in your Plausible API key here.

```ts
import { plausibleLoader } from '@lekoarts/plausible-loader'

const plausible = defineCollection({
  loader: plausibleLoader({
    api_key: 'your-api-key',
    query: {/* Your query */},
  }),
})
```

### `api_url`

If you self-host Plausible, you can set the URL to your instance here. By default, `https://plausible.io` is used.

```ts
import { plausibleLoader } from '@lekoarts/plausible-loader'

const plausible = defineCollection({
  loader: plausibleLoader({
    api_url: 'https://plausible.io',
    query: {/* Your query */},
  }),
})
```
