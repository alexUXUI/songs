# Developer notes

I made several assumptions about the data while approaching this exercise:

1.  Each of these data sources is coming from a different place / endpoint / service, etc. and we always know
    where each type of karaoke data is coming from.
2.  The shape of the three types of karaoke data will not change
    so we don't need to worry about handling changing data formats.
3.  The karaoke data is coming from a server. It's not actually coming from a server but I'm going to treat it that way. To mimic the network behavior, I've
    decided to simulate a network fetch for the data in the useSongData hook with a setTimeout of 1 second.

## Reasons for assumptions:

I would normally advise against putting unneeded code into an application, but I put the setTimeout in the Hook because I wanted to try to give the reviewers a good idea of how I approach FE web development. The decision to do this for the sake of the exercise is important because it opens the doors for demonstrating things like loading and no-data states.

### Outstanding Questions

Not sure if there is a way to infer the location of the karaoke data based on the seed data but I thought about trying to get the general timezone location from the time but couldnt find any time zone or other location data in the time stamps.

## Running the Repo:

```shell
$ git clone <repo>
$ cd <repo>
$ yarn install
$ yarn start
$ yarn test
```

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
