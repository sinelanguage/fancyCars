# FancyCars.ca

FancyCars is a full stack SPA. Front end was developed using React/Redux. It was initialized using `create-React-app` and then ejected for custom webpack configs. The back end was developed using node + express and was initialized using `express-generator`. This app was coded on a mac and tested in Chrome. It has not been tested on Windows. Production mode is not yet supported.

## To setup, build and run:

1.  Clone repo
2.  `yarn` or `npm install`
3.  `yarn setup` or `npm run setup`
4.  `yarn dev` or `npm run dev`
5.  If Chrome is your default browser, it should open the app to `localhost:3000` and it should look like the following screenshot

![FancyCars.ca](https://github.com/sinelanguage/fancyCars/blob/master/fancyCars.png)

# Question 2

## Front end scalable architecture

The ideal solution is to use the best parts of microservices pattern as well as dividing the concerns into layers of similar purpose modules. In this case we want to use a 4 tier solution.

The first tier deals with back end services, databases, setup of third party services such as API keys, config files, connections and auth for 3rd party services such as Push Notifications and Streaming Providers and Data and Analytics connections.

The second tier deals with creation our JSON stream, agregating 3rd party data into our JSON stream, Data API Routing and Controllers, Back end testing frameworks and config, Back end logging for errors or test suites API, Events and Analytics API.

The third tier is the API middleware, Client connection services, Component for client config and aggregator, Shared React component library, Client side content and asset Cache / Redis / Session Storage, Analytics middleware, Events middleware, Client side testing framework config and suite, CI Config.

The fourth tier is the client layer where we config and deliver web, touch screen, low bandwidth and AODA Optimized, Mobile Phone specific, Smart TV and a suite of internal in store client custom configs. This is the core React/Redux app.

![Front End Architecture](https://github.com/sinelanguage/fancyCars/blob/master/QuestionTwo.png)

# Question 3

## Ideal Architecture

I would create a mono repo that allows you to share a common build, config, CI, testing, share component library, React StoryBook to allow designers to make components independent of integration, and it would always allow devs to test different integrations and states in isolation. There would be an apps folder that have their own instance of the build, CI and testing config that can be extended and customized per app or module. Each module would represent each of domains: Restaurant Listing, Search, Restaurant Finder and Order Management. Each one of those would be its own React app and share the same common UI components via the component library. Having a mono repo with different domains/apps per module would allow a dev to always have the latest code base and switch to work on any module, or have one UI component change populate all the domains without reintegration.

## How to transition teams to use this architecture

I would first level everyone up on the latest architecture, organize lunch and learns and workshops and have a pattern recipe repo and points of reference for learning React/Redux/Webpack and mono repo architecture. Then I would have small teams be responsible for each domain. However there would be a ramp up period where only one team works on the UI library and StoryBook integration. Then I would have another team build all the tests for those components to learn how to use them. Once those two are done and we have a prototype app module, I would have one small team per domain, migrate the module they are responsible for, to a React app in the mono repo and consume all the shared webpack builds, components and styles.

## What would releases look like?

Because we are using a mono repo; teams can work autonomously. The key is that we would merge into a psudo trunk branch called "develop", which would trigger a dev build. Any team can merge into at any time, but we would make timed boxed releases into master where once every few weeks we would have a release into master and build into a preprod staging for QA to do a master pass before we push to prod.
