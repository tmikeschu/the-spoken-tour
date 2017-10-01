[![Build Status](https://travis-ci.org/tmikeschu/the-spoken-tour.svg?branch=master)](https://travis-ci.org/tmikeschu/the-spoken-tour)

# The Spoken Tour

![](https://www.thespokentour.com//static/media/spoken-logo.6fa3a5cd.jpg)

Some friends of mine are going to bike from Denver, Colorado to Buenos Aires, Argentina, so I helped build their travel blog using React (thanks to [CRA](https://github.com/facebookincubator/create-react-app) and [RGM](https://github.com/tomchentw/react-google-maps)).

↓ Click to see a video demo of the app ↓
[![Demo Video](https://img.youtube.com/vi/f4KtCjMEZM8/0.jpg)](http://www.youtube.com/watch?v=f4KtCjMEZM8 "The Spoken Tour Demo")

## Links

clicky clicky clicky

* [Rails API](https://github.com/tmikeschu/the-spoken-tour-api)

* [Production site](http://www.thespokentour.com)

## Setup

To get your machine and this code friendly and acquainted:

Clone this repository using your preferred method and `cd` into it. If you're not sure, I
recommend the SSH route:

```
git clone git@github.com:tmikeschu/spoke-n.git
cd spoke-n
```

Then, install dependencies:

```
npm install
```

### Credentials

```
# copy configuration
cp .env.example .env
```

You'll need to create your own Google Maps API key, and you'll have to
contact me for the Rails API key.

## Testing

First things first: get a dopamine hit from a verdant test suite! Run the tests with:

```
npm test
```

then *read* the tests to get oriented with the application.

## Local Development

What fun is setting up and running tests if you can't do some of your own stuff? Start the local server with:

```
npm start
```

## Stack

Node: `8.1.2`

Languages: JavaScript/ES6

DBs: External API

Major Libraries: 

* [React.js](https://reactjs.org/) via [Facebook's Create React App](https://github.com/facebookincubator/create-react-app)
* [Flow](https://flow.org/)
* [Jest](https://facebook.github.io/jest/docs/en/api.html)
* [Enzyme](https://github.com/airbnb/enzyme)
* [Redux](http://redux.js.org/)
* [React Google Maps](https://github.com/tomchentw/react-google-maps)

DevOps: [Heroku](https://www.heroku.com/home)

CI: [Travis CI](https://travis-ci.org/)

## Style

When contributing to code, be the tofu. In other words, take on the style of the
existing code. Here are some main approaches I follow:

* If a component doesn't hold its own state, write it as a pure function
* ES6
* No semi-colons
* Unit tests for functions that process data
* For functions with side effects, unit test with mock `jest.fn()` functions to verify the call of other functions.
* Dependency injection for any API service functions

## Contributing

Interested in helping out?

1. Reach out to me and say hello! I'd love to hear about what you're interested
   in.

2. Once we've confirmed what you can work on, fork this repo and work on you
   masterpiece.

3. Once your work is done, squash your work to a single commit, and open a PR
   from your feature branch to this repo's master branch.

