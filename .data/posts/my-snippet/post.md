---
date: 10/13/2024
title: My snippets
description: My collection of snippets I've used in my previous projects.
tags: [Collection, Svelte component]
---

## Lazy component in Svelte

```svelte
<LazyComponent />
```

```svelte
<script lang="ts">
 import viewport from '@jhenbert/viewport-action';

 let loadComponent;
 export { loadComponent as this };

 export let threshold: number = 0;

 let isShowingComponent = false;
 let componentPromise: Promise<{
  default: ConstructorOfATypedSvelteComponent;
 }>;

 const handleEnterViewport = () => {
  componentPromise = loadComponent();
  isShowingComponent = true;
 };
</script>

{#if !isShowingComponent}
 <div use:viewport={threshold} on:enterViewport={handleEnterViewport} />
{:else}
 {#await componentPromise}
  <slot name="fallback">Loading...</slot>
 {:then { default: Component }}
  <slot name="component" {Component} />
 {/await}
{/if}
```

Note: install first the package using command below to import the `viewport` observer.

```bash
npx jsr add @jhenbert/viewport-action
```

## Usage

- Component without props

```svelte
<!--Lazy loading component via dynamic import-->
<LazyComponent this={() => import('$lib/components/CallToAction.svelte')} threshold={100}
 ><div slot="fallback">loading component...</div>

 <svelte:fragment slot="component" let:Component><Component /></svelte:fragment>
</LazyComponent>
```

- Component with props

```svelte
<LazyComponent this={() => import('$lib/components/CommunityFeedback.svelte')} threshold={100}
 ><div slot="fallback">loading component...</div>

 <svelte:fragment slot="component" let:Component
  ><Component data={data.communityFeedback} />
 </svelte:fragment>
</LazyComponent>
```

Put this in your `app.d.ts`

```svelte
declare module "svelte/elements" {
  interface HTMLAttributes<T> {
    "on:enterViewport"?: (event: CustomEvent<void>) => void;
    "on:exitViewport"?: (event: CustomEvent<void>) => void;
  }
}
```

Happy Coding!
