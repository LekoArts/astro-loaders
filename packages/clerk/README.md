# Astro Clerk loader

This package provides a [Clerk](https://clerk.com) content loader for Astro's [content layer](https://docs.astro.build/en/guides/content-collections/). You can access a selection of Clerk Backend APIs by simply providing the method name.

**Want to see an overview of all my loaders? Visit [astro-loaders.lekoarts.de](https://astro-loaders.lekoarts.de) ✨**

## Prerequisites

- Astro 5 or later installed
- An existing Clerk application. [Setup your Clerk account](https://clerk.com/docs/quickstarts/setup-clerk).

## Installation

```shell
npm install @lekoarts/clerk-loader
```

## Usage

Import `@lekoarts/clerk-loader` into `src/content.config.ts` and define your collections.

**Important:** You need to either define the Clerk Secret Key as an environment variable (`CLERK_SECRET_KEY`) or pass it as the `secretKey` option inside `clientOptions`.

```ts
import { clerkLoader } from '@lekoarts/clerk-loader'

const clerk = defineCollection({
  loader: clerkLoader({
    method: {
      name: 'users.getUserList',
    },
  }),
})
```

## Options

### `method` (required)

You **must** pass `method.name` to the loader. The available method names are generated through the [`PublicLoaderAPI`](https://github.com/LekoArts/astro-loaders/blob/main/packages/clerk/src/types.ts) and stored in dot notation (`api.method`).
If the endpoint takes parameters, you can define them through `method.options`.

Use your IDE's autocompletion to discover all available options and method names.

```ts
import { clerkLoader } from '@lekoarts/clerk-loader'

const clerk = defineCollection({
  loader: clerkLoader({
    method: {
      name: 'users.getUserList',
      options: {
        last_active_at_since: 1234567890,
      }
    },
  }),
})
```

### `clientOptions` (optional)

You can configure the underlying [`createClerkClient()`](https://clerk.com/docs/references/backend/overview#create-clerk-client-options) call by passing in these options.
