---
title: Generating Fake Data in Node.JS
slug: generating-fake-data-in-node-js
date: 2020-06-23

# optional fields
published: true
generate-card: true
language: en
cover: ./node-js.jpg
imageShare: ./generating-fake-data-in-node-js-share.png
tags:
  - code
  - nodejs
---

Each month I like to do a few courses on [Udemy](https://www.udemy.com/) to sharpen my skills.

Recently, I was working through Stephen Grider's [Microservices with Node JS and React](https://www.udemy.com/course/microservices-with-node-js-and-react/) and it used a package for generating sample data.

The package is called **Faker**, a useful utility for generating sample data for entities such as **Address**, **Company**, **Images**, etc.

To install on Node:

```bash
npm install faker
```

To generate fake data:

```js
var faker = require('faker');

var randomName = faker.name.findName();
var randomEmail = faker.internet.email();
var randomCard = faker.helpers.createCard(); // random contact card
```

You may also access via an API call only:

- **http://faker.hook.io?property=name.findName&locale=de**

The full list of properties can be found [here](https://www.npmjs.com/package/faker).

> If you are a .NET developer, there is also a port of this popular library via nuget: https://www.nuget.org/packages/Faker.Net/
