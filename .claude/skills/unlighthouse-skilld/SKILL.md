---
name: unlighthouse-skilld
description: "ALWAYS use when writing code importing \"unlighthouse\". Consult for debugging, best practices, or modifying unlighthouse."
metadata:
  version: 0.18.0
  generated_by: Anthropic · Sonnet 4.6
  generated_at: 2026-07-09
---

# harlan-zw/unlighthouse `unlighthouse@0.18.0`
**Tags:** latest: 0.18.0

**References:** [package.json](./.skilld/pkg/package.json) • [README](./.skilld/pkg/README.md) • [Docs](./.skilld/docs/_INDEX.md)

## Search

Use `skilld search "query" -p unlighthouse` instead of grepping `.skilld/` directories. Run `skilld search --guide -p unlighthouse` for full syntax, filters, and operators.

<!-- skilld:api-changes -->
## API Changes

This section documents version-specific API changes for unlighthouse v0.18.0 — prioritize recent releases.

- DEPRECATED: `@unlighthouse/nuxt` — build tool integration deprecated, will be removed in v1.0; migrate to `unlighthouse-ci --site localhost:3000` instead [source](./.skilld/docs/integration-deprecations.md:L20)

- DEPRECATED: `@unlighthouse/vite` — build tool integration deprecated, will be removed in v1.0; migrate to CLI or CI integration [source](./.skilld/docs/integration-deprecations.md:L20)

- DEPRECATED: `@unlighthouse/webpack` — build tool integration deprecated, will be removed in v1.0; migrate to CLI or CI integration [source](./.skilld/docs/integration-deprecations.md:L20)

- NEW: `defineUnlighthouseConfig` import path changed — must import from `unlighthouse/config`, not from `@unlighthouse/core` directly; `import { defineUnlighthouseConfig } from 'unlighthouse/config'` [source](./.skilld/docs/3.api-doc/index.md:L51)

- NEW: Node.js >=22.18.0 required — engine requirement raised; projects on older Node versions will fail to install [source](./.skilld/pkg/package.json:L44)

- NEW: `generateClient({ static: true })` — `generateClient()` from `@unlighthouse/core` now accepts a `static` boolean option to produce a self-contained static HTML report for hosting [source](./.skilld/docs/3.api-doc/index.md:L69)

- NEW: `--reporter lighthouseServer` flag — upload results directly to an LHCI server via `--reporter lighthouseServer --lhci-host <url> --lhci-build-token <token>`; replaces manual LHCI upload steps [source](./.skilld/docs/2.integrations/1.ci.md:L63)

- NEW: `--reporter jsonExpanded` / `csvExpanded` — expanded reporter variants expose full per-metric Lighthouse data in addition to summary scores [source](./.skilld/docs/2.integrations/1.ci.md:L119)

- NEW: `scanner.sitemap` accepts `string[]` — in addition to `boolean`, pass an array of sitemap paths to override robots.txt sitemap discovery [source](./.skilld/docs/3.api-doc/config.md:L344)

- NEW: `ci.buildStatic` config option — set `ci: { buildStatic: true }` in config file to generate a static HTML report during CI runs without passing `--build-static` flag each time [source](./.skilld/docs/3.api-doc/config.md:L183)

- NEW: `discovered-internal-links` hook — fires when a scanned path discovers internal links during crawl mode; signature `(path: string, internalLinks: string[]) => HookResult` [source](./.skilld/docs/3.api-doc/index.md:L253)

- NEW: `puppeteer:before-goto` hook — fires after Puppeteer opens a page before navigation; signature `(page: Page) => HookResult`; useful for injecting auth or overriding request headers [source](./.stilld/docs/3.api-doc/index.md:L259)

- NEW: `--sitemaps <sitemaps>` CLI flag — pass a comma-separated list of sitemap URLs that override any sitemap entries found in robots.txt [source](./.skilld/docs/2.integrations/1.ci.md:L170)

- NEW: `--exclude-urls` / `--include-urls` CLI flags — filter scanned paths by relative path string or regex pattern as a comma-separated list; replaces manual `scanner.exclude`/`scanner.include` config for CLI usage [source](./.skilld/docs/2.integrations/1.ci.md:L173)

- NEW: `--default-query-params <params>` CLI flag — append query parameters to every scanned request, e.g. `--default-query-params foo=bar,bar=foo`; mirrors `defaultQueryParams` config key [source](./.skilld/docs/2.integrations/1.ci.md:L184)

- NEW: `scanner.robotsTxt` config key — boolean to enable/disable reading robots.txt for sitemap and disallowed-path configuration; default `true` [source](./.skilld/docs/3.api-doc/config.md:L329)

- NEW: `scanner.ignoreI18nPages` config key — when `true` (default), pages identified via `x-default` link as i18n duplicates are skipped automatically [source](./.skilld/docs/3.api-doc/config.md:L241)

- NEW: `userAgent` root config key — set a custom user agent string for all Axios and Puppeteer requests; previously required manual puppeteerOptions override [source](./.skilld/docs/3.api-doc/config.md:L101)

- NEW: `defaultQueryParams` root config key — `false | QueryObject`; appends query parameters to every request; useful for bypassing caches or feature flags during scanning [source](./.skilld/docs/3.api-doc/config.md:L110)

**Also changed:** `TTI` removed from Lighthouse 10 (Feb 2023) — use TBT for lab and INP for field measurement · `INP` replaced FID as Core Web Vital · `scanner.crawler` boolean controls link-crawl URL discovery (default `true`) · `scanner.dynamicSampling` default `5` samples per dynamic route group
<!-- /skilld:api-changes -->

<!-- skilld:best-practices -->
## Best Practices

- Use `defineUnlighthouseConfig()` from `unlighthouse/config` as the config wrapper — it enables type inference and is the canonical pattern for `unlighthouse.config.ts` at project root [source](./.skilld/docs/1.guide/guides/0.config.md#the-config-file)

- Pass a factory function to `defineUnlighthouseConfig()` for environment-based config — lets you toggle `samples`, `throttle`, and `site` between dev and production without duplication [source](./.skilld/docs/1.guide/guides/0.config.md#environment-based-config)

- For reliable CI scores, combine `scanner.samples: 5`, `scanner.throttle: true`, and `puppeteerClusterOptions.maxConcurrency: 1` — each addresses a different source of score variability (averaging, network variance, CPU contention); use `samples: 3` in development [source](./.skilld/docs/1.guide/recipes/improving-accuracy.md#recommended-production-config)

- Use `scanner.dynamicSampling` (default: 5) to cap how many pages per URL group are scanned — prevents blogs or e-commerce catalogs from running thousands of nearly-identical Lighthouse audits; set to `false` only when every URL is structurally unique [source](./.skilld/docs/1.guide/guides/dynamic-sampling.md#usage)

- When dynamic sampling misgroups URL patterns (e.g., `/q-search-term` style paths), use `scanner.customSampling` with a regex key — maps arbitrary URL shapes to a single named route so sampling still works correctly [source](./.skilld/docs/1.guide/guides/route-definitions.md#custom-sampling)

- Sitemap discovery automatically disables the crawler when over 50 paths are found — rely on sitemaps for large sites rather than the crawler, and provide multiple sitemap paths via `scanner.sitemap` array when needed [source](./.skilld/docs/1.guide/guides/url-discovery.md#sitemapxml)

- For SPA scanning, set `scanner.skipJavascript: false` — the default skips JS execution, which causes link discovery to miss client-side routes and Core Web Vital measurements to be inaccurate for hydrated content [source](./.skilld/docs/1.guide/recipes/spa.md#enable-javascript-execution)

- Use `hooks.authenticate` with Puppeteer page API for complex login flows — the session persists across all subsequent page scans, so you only pay the login cost once [source](./.skilld/docs/1.guide/guides/authentication.md#programmatic-login-complex-flows)

- When cookie or localStorage auth is not persisting between pages, add `lighthouseOptions.disableStorageReset: true` and `lighthouseOptions.skipAboutBlank: true` alongside a `puppeteerOptions.userDataDir` — Lighthouse clears storage between pages by default [source](./.skilld/docs/1.guide/guides/authentication.md#auth-not-sticking)

- Use `hooks['puppeteer:before-goto']` with `page.evaluateOnNewDocument()` to inject localStorage tokens before navigation — this is the correct hook for setting browser state that must exist before the page loads [source](./.skilld/docs/1.guide/guides/puppeteer.md#before-page-load)

- In Docker/CI, always pass `--no-sandbox`, `--disable-setuid-sandbox`, `--disable-dev-shm-usage`, and `--disable-gpu` via `puppeteerOptions.args` — Chrome sandbox restrictions cause silent failures in containerized environments [source](./.stilld/docs/1.guide/guides/docker.md#unlighthouse-config)

- Narrow scanned categories with `lighthouseOptions.onlyCategories` when you only care about specific metrics — the Unlighthouse UI adapts automatically, and skipping unused categories meaningfully reduces scan time [source](./.skilld/docs/1.guide/guides/lighthouse.md#selecting-categories)

- Use `unlighthouse-ci` (not `unlighthouse`) in pipelines — it has a clean exit code contract (0 = pass, 1 = budget fail), auto-discovers all URLs, and supports per-category budgets via `ci.budget` in config rather than a single `--budget` number [source](./.skilld/docs/2.integrations/1.ci.md#performance-budgets)

- Use `hooks['task-complete']` to react to individual page results during a scan — enables real-time alerting on pages that drop below a threshold without waiting for the full scan to finish [source](./.skilld/docs/1.guide/guides/0.config.md#react-to-scan-events)
<!-- /skilld:best-practices -->
