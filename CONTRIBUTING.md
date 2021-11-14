# Contributing to Smart Notes website

👍🎉 Thanks for taking the time to contribute! 🎉👍

## Summary

- [Code of conducts](#code-of-conducts)
- [Issue and Pull Requests](#issue-and-pull-requests)
- [Commit messages](#commit-messages)
- [Project setup](#project-setup)
- [Aliases](#aliases)
- [Submitting changes](#submitting-changes)
- [Deployment](#deployment)

## Code of conducts

This project adheres to the Contributor Covenant code of conduct. By participating, you are expected to uphold this code. Please report unacceptable behavior to [@yesnoruly](https://t.me/yesnoruly).

## Issue and Pull Requests

- If you're not sure about adding something, [open an issue](https://github.com/yesnoruly/loripsum-generator) to discuss it.
- Feel free to open a Pull Request early so that a discussion can be had as changes are developed.
- Include screenshots and animated gifs of your changes whenever possible.
- **DON'T** surprise us with big pull requests. Instead, file an issue and start a discussion so we can agree on a direction before you invest a large amount of time. surprise us with big pull requests. Instead, file an issue and start a discussion so we can agree on a direction before you invest a large amount of time.
- Please try to keep your pull request focused in scope and avoid including unrelated commits.

## Commit messages

We use the [Conventional Commits](https://www.conventionalcommits.org) specification to standardize our commit history. <br> The commit message summary (or pull request title) is constructed by prepending the type of change being made (e.g., *feat*, *fix*, *refactor*), followed by an imperative, present tense sentence (without a period). Example: `fix: make header bold`. 

> Types other than *fix:* and *feat:* are allowed.

## Project setup

If you do need to set the project up locally yourself, feel free to follow these instructions:

### System Requirements

- [Node.js](https://nodejs.org/en/) >= 16.0.0

### Setup steps

1. Create [your own issue](https://github.com/yesnoruly/loripsum-generator/issues/new/) or visit the [Issue tracker](https://github.com/yesnoruly/loripsum-generator/issues) to find a list of open issues that need attention.
2. Fork the repo. 
3. Create your own branch (`my-feature`), then do this:

#### `npm install`:

**Install the dependencies**

#### `npm run dev`:

**Run the app, you can view the app by visiting `http://localhost:3000/`**

---

Other commands:

#### `npm run build`:

**Builds the app for production to the dist folder**

#### `npm run serve`:

**Serves the production build from the dist folder.**

#### `npm run eslint`:

**Run ESLint**

#### `npm run lint:fix`:

**Run ESLint with fix**

## Aliases

> View [`jsconfig.json`](https://github.com/yesnoruly/loripsum-generator/blob/master/jsconfig.json) and [`vite.config.js#L8`](https://github.com/yesnoruly/loripsum-generator/blob/master/vite.config.js#L8)

Base url: `src/` <br>
To start using aliases before the path type: `@/`

Example:

```js
import { Button } from '@/shared/ui';
```

## Submitting changes
1. Make sure that the eslint tests are passed.
2. Submit a pull requests.

## Deployment
[This application](https://loripsum-generator.vercel.app) is automatically deployed using [Vercel](https://vercel.com).
