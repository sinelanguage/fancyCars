# FancyCars.ca

FancyCars is a full stack SPA. Front end was developed using React/Redux. It was initialized using `create-react-app` and then ejected for custom webpack configs. The back end was developed using node + express and was initialized using `express-generator`. This app was coded on a mac and tested in Chrome. It has not been tested on Windows. Production mode is not yet supported.

## To setup, build and run:

1.  Clone repo
2.  `yarn` or `npm install`
3.  `yarn setup` or `npm run setup`
4.  `yarn dev` or `npm run dev`
5.  If Chrome is your default browser, it should open the app to `localhost:3000` and it should look like the following screenshot

# Question 2

## Front end scalable architecture

The ideal solution is to use the best parts of microservices pattern as well as dividing the concerns into layers of similar purpose modules. In this case we want to use a 4 tier solution.

The first tier deals with back end services, databases, setup of third party services such as API keys, config files, connections and auth for 3rd party services such as Push Notifications and Streaming Providers and Data and Analytics connections.

The second tier deals with creation our JSON stream, agregating 3rd party data into our JSON stream, Data API Routing and Controllers, Back end testing frameworks and config, Back end logging for errors or test suites API, Events and Analytics API

The third tier is the API middleware, Client connection services, Component for client config and aggregator, Shared React component library, Client side content and asset Cache / Redis / Session Storage, Analytics middleware, Events middleware, Client side testing framework config and suite, CI Config.

The fourth tier is the client layer where we config and deliver web, touch screen, low bandwidth and AODA Optimized, Mobile Phone specific, Smart TV and a suite of internal in store client custom configs. This is the core react/redux app.

![Front End Architecture](https://github.com/sinelanguage/fancyCars/blob/master/QuestionTwo.png)
