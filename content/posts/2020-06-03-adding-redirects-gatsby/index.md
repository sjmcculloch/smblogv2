---
title: Adding redirects in Gatsby
slug: adding-redirects-gatsby
date: 2020-06-03

# optional fields
published: true
generate-card: true
language: en
cover: ./cover.jpg
imageShare: ./cover.jpg
tags:
  - code
  - gatsby
---

During the recent migration of this site from Jekyll to Gatsby, I was left with some URLs that had changed.

```
/code/gamification-concepts-in-software-design
```

had became:

```
/gamification-concepts-in-software-design
```

There are two approaches to adding redirects in Gatsby.

## Client-Side redirects using Gatsby Plugins

The first approach is to use the Gatsby plugin system. These typically generate **stub** pages that do a client-side redirect when the page is served.

### Using gatsby-redirect-from Plugin

The **gatsby-redirect-from** plugin extends the frontmatter of posts to include **redirect_from** configuration.

To install:

```
cd yourproject/
npm i gatsby-redirect-from gatsby-plugin-meta-redirect
```

Then load the plugins in **gatsby-config.js**:

```json
plugins: [
  'gatsby-redirect-from',
  'gatsby-plugin-meta-redirect' // make sure this is always the last one
]
```

You can now extend your posts using:

```
---
title: Aperture File Types
redirect_from:
  - /code/gamification-concepts-in-software-design/
  - /code/another-url/
---
```

> Note: trailing slashes are required

## Redirects using Hosting Service

The plugin approach is not ideal for Search Engine Optimisation (SEO) as it still resolves the old page with a **HTTP Status Code of 200** and then does a clientside redirect.

The preferred option is for the server to send a **HTTP Status Code of 301 (Permanently Moved)**. For sites generated statically you generally have no control over the server as pages are published via a Content Delivery Network (CDN).

Fortunately some hosting services provide additional configuration to allow this.

### 301 Redirects with Netlify

One of my favourite hosting services is [Netlify](https://www.netlify.com/). It is quite mature and is the market leader for hosting of statically generated sites.

To implement 301 redirects, add a **\_redirect** file to the root of your site:

```
# Redirects from what the browser requests to what we serve
/code/gamification-concepts-in-software-design      /gamification-concepts-in-software-design
/code/another-url                                   /another-url
```

> For Gatsby sites, add it to your **static** folder so it will be copied at build time.

If you want further granular control (e.g. 404 redirects, authorisation), Netlify also supports a global configuration file. The full documentation can be found [here](https://docs.netlify.com/routing/redirects/#syntax-for-the-redirects-file).
