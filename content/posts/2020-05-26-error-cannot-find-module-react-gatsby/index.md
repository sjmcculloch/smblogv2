---
title: 'Error: Cannot find module "react" in Gatsby'
slug: error-cannot-find-module-react-gatsby
cover: ./cover.jpg
generate-card: true
date: 2020-05-27
language: en
tags:
  - code
  - gatsby
imageShare: ./error-cannot-find-module-react-gatsby-share.png
---

During the migration of [this site](https://www.smcculloch.com) from [Jekyll](https://jekyllrb.com/) to [Gatsby](https://www.gatsbyjs.org/) and switching hosting to [Azure Static Web Apps](https://azure.microsoft.com/en-au/services/app-service/static/), the only Gatsby related issue I experienced was:

> ERROR
>
> There was a problem loading the local develop command. Gatsby may not be installed. Perhaps you need to run "npm install"? **Cannot find module 'react'**

This issue occured after I **added a new plugin** to handle [gatsby redirects](https://www.gatsbyjs.org/packages/gatsby-plugin-client-side-redirect/).

The issue appears because of conflicting versions of React and npm unable to reconcile them individually.

For most people, the solution was to clean out all node_modules and reinstall:

```
rm -Rf node_modules package-lock.json
npm install
```

If you still experience issues after trying the above, try swapping to **yarn**.

```
rm -Rf node_modules package-lock.json
yarn install
```

Incidentally, Azure Static Web Apps uses **yarn**, so I swapped over permanently for this project.
