---
title: Integrating the Peloton API with GatsbyJS
slug: integrating-peloton-api-gatsby-js
date: 2021-09-14

# optional fields
published: true
generate-card: true
language: en
cover: ./cover.png
imageShare: ./integrating-peloton-api-gatsby-js-share.png
tags:
  - fitness
  - peloton
---

I recently purchased a Peloton Bike+ and was amazed by the amount of raw statistics. It makes an ideal candidate for data integration ([checkout my stats page](/stats)) to showcase recent activity.

I'll be using javascript/react/gatsby to demonstrate how it was achieved.

## Peloton API

The Peloton API isn't documented in an official capacity (although there have been some [attempts by third parties](https://app.swaggerhub.com/apis/DovOps/peloton-unofficial-api/0.2.3)). To understand what is possible requires using browser devtools on their member website to sniff out API calls.

![Peloton DevTools](./devtools.png)

### Authentication Token

Any API call requires an authentication token. This can be accessed as follows:

```javascript
const body = {
  username_or_email: 'my-username',
  password: 'my-password',
}

const response = await fetch('https://api.onepeloton.com/auth/login', {
  method: 'post',
  body: JSON.stringify(body),
  headers: { 'Content-Type': 'application/json' },
})
```

> Remember to use secrets for your username/password and don't store in code!

A successful authentication will return an object as follows:

```javascript
const authData = {
  session_id: 'random-session-id',
  user_id: 'unique-user-id',
}
```

You'll use **session_id** as a header in API calls and **user_id** as a unique identifier for API paths.

### Example API call

The following code calls the overview method which returns the current user's workout information. It passes in the session_id in the header.

```javascript
const opts = {
  headers: {
    cookie: `peloton_session_id=${authData.session_id};`,
    'peloton-platform': 'web',
  },
}

const responseOverview = await fetch(
  `https://api.onepeloton.com.au/api/user/${authData.user_id}/overview?version=1`,
  opts
)
const overviewData = await responseOverview.json()
```

> note: methods on the Peloton API require that you pass **peloton-platform** in the header.

A full list of methods can be found at:

- https://app.swaggerhub.com/apis/DovOps/peloton-unofficial-api/0.2.3.

## Gatsby Integration

Gatsby is a wonderful framework for integration due to GraphQL. This allows integration from many different data sources into a single graph with one query language for access.

### Gatsby Source Nodes

Integration to the Peloton API can be configured in **gatsby-node.js**. The **sourceNodes** extension point allows a hook to source additional nodes into the graph -- perfect for an API.

```javascript
exports.sourceNodes = async ({
  actions,
  createNodeId,
  createContentDigest,
}) => {
  // step 1: authenticate with Peloton
  const body = {
    username_or_email: process.env.PELOTON_USERNAME,
    password: process.env.PELOTON_PASSWORD,
  }

  const response = await fetch('https://api.onepeloton.com/auth/login', {
    method: 'post',
    body: JSON.stringify(body),
    headers: { 'Content-Type': 'application/json' },
  })
  const authData = await response.json()

  const opts = {
    headers: {
      cookie: `peloton_session_id=${authData.session_id};`,
      'peloton-platform': 'web',
    },
  }

  // Step 2: retrieve workout data from the overview
  const responseOverview = await fetch(
    `https://api.onepeloton.com.au/api/user/${authData.user_id}/overview?version=1`,
    opts
  )
  const overviewData = await responseOverview.json()

  // Step 3: create nodes in the graph
  overviewData.workout_counts.workouts.forEach(workoutCount => {
    const newNode = {
      ...workoutCount,
      id: createNodeId(workoutCount.name),
      internal: {
        type: 'WorkoutCount',
        contentDigest: createContentDigest(workoutCount),
      },
    }
    actions.createNode(newNode)
  })
}
```

If you visit the GraphQL interface shipped with Gatsby (http://localhost:8000/\_\_\_graphql), you'll see the new **allWorkoutCount** node.

![Gatsby GraphQL](./graphql.png)

More documentation for Gatsby nodes can be found here:

- https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/#sourceNodes

## Gatsby/React Integration

Once the nodes are in GraphQL they can be integrated into a React component as follows (queries are mapped into props):

```js
import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Wrapper from '../components/Wrapper'
import SEO from '../components/SEO'
import Statistics from '../components/Statistics'

class Stats extends React.Component {
  render() {
    const workoutCounts = this.props.data.workoutCounts.nodes

    return (
      <Layout location={this.props.location}>
        <SEO title="My Peloton Stats" />
        <Wrapper>
          <Statistics workoutCounts={workoutCounts} />
        </Wrapper>
      </Layout>
    )
  }
}

export default Stats

export const pageQuery = graphql`
  query statQuery {
    workoutCounts: allWorkoutCount {
      nodes {
        id
        name
        count
        icon_url
        slug
      }
    }
  }
`
```

The full source on this blog can be found [here](https://github.com/sjmcculloch/smblogv2).

## Daily Schedule

Since statistics are generated on an ongoing basis, I wanted the statistics to be updated daily (not just on a pull request or push to master).

This site is hosted on Azure Static Websites with a CI/CD pipeline using Github Actions. My github actions workflow only required a small extension using schedule (running at 8am daily):

```yml
name: Azure Static Web Apps CI/CD

on:
  push:
    branches:
      - master
  pull_request:
    types: [opened, synchronize, reopened, closed]
    branches:
      - master
  schedule:
    - cron: '0 8 * * *'
```

## The End Result

As you can see by the [stats page](/stats), the integration to Peloton is relatively straight forward:

- Retrieve an authentication token
- Call a Peloton API method
- Build nodes in Gatsby based on API data
- Query GraphQL in React components
- Modify github action yml file to trigger daily

![Peloton Workout Overview](./workout-overview.png)
