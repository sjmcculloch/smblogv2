---
title: Adding 301, 404 redirects in Azure Static Sites
slug: adding-301-404-redirects-azure-static-sites
date: 2020-05-31

# optional fields
published: true
generate-card: true
language: en
cover: ./cover.png
imageShare: ./adding-301-404-redirects-azure-static-sites-share.png
tags:
  - azure
  - code
---

During the migration of this site from [Jekyll](https://jekyllrb.com/) to [Gatsby](https://www.gatsbyjs.org/) and swapping the hosting to the newly announced **Azure Static Sites**, I was left with some URLs that required redirecting.

> It's important to redirect any URLs that have changed to preserve any SEO.

Some of my URLs had shortened:

```
/code/gamification-concepts-in-software-design
```

and became:

```
/gamification-concepts-in-software-design
```

The **preferred redirect** for a site migration is **301** which is **Moved Permanently**. This must be initiated from the server which rules out any clientside manipulation that could be done with Gatsby.

Fortunately, Azure Static Sites allows 301 redirects to be specified in a special **routes.json** file that exists in the root of your **deployed site**.

> For Gatsby, this meant I placed the file in the **/static folder** so that it is copied during build time to the root of the site.

The format of a redirect is as follows:

```JSON
  {
    "route": "/code/gamification-concepts-in-software-design",
    "serve": "/gamification-concepts-in-software-design",
    "statusCode": 301
  },
```

Wildcards are also supported by using the \* character:

```JSON
  {
    "route": "/code/gamification-concepts-in-software-design*",
    "serve": "/gamification-concepts-in-software-design",
    "statusCode": 301
  },
```

You can also override default status codes provided in the platform (Azure Static Sites have an inbuilt 404 page and I wanted to redirect to my own custom one):

```JSON
  "platformErrorOverrides": [
    {
      "errorType": "NotFound",
      "serve": "/404"
    }
  ]
```

A sample **routes.json** file may look like this:

```JSON

{
  "routes": [
    {
      "route": "/code/gamification-concepts-in-software-design",
      "serve": "/gamification-concepts-in-software-design",
      "statusCode": 301
    },
    {
      "route": "/code/netlify-contentful-jamstack",
      "serve": "/netlify-contentful-jamstack",
      "statusCode": 301
    },
    {
      "route": "/music/what-happened-to-kellyclarksonlive",
      "serve": "/what-happened-to-kellyclarksonlive",
      "statusCode": 301
    },
    {
      "route": "/sport/hard-knocks-season-13-australia",
      "serve": "/hard-knocks-season-13-australia",
      "statusCode": 301
    },
    {
      "route": "/code/logging-to-the-dnn-event-log",
      "serve": "/logging-to-the-dnn-event-log",
      "statusCode": 301
    },
    {
      "route": "/code/ventrian-modules-now-on-github",
      "serve": "/ventrian-modules-now-on-github",
      "statusCode": 301
    },
  ],
  "platformErrorOverrides": [
    {
      "errorType": "NotFound",
      "serve": "/404"
    }
  ]
}


```

You can do many other things with the **routes.json** file including controlling authorization. You can find more information in the official [Microsoft docs](https://docs.microsoft.com/en-us/azure/static-web-apps/routes).
