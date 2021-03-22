# EventFinder
Try it out: http://tm-event-finder.surge.sh/

EventFinder is a website for finding events and sharing them with friends. It uses the Ticketmaster API found here:
https://developer.ticketmaster.com/products-and-docs/apis/getting-started/

The goal for this site was to build a React application on top of Node.js and integrating Material UI, authentication, a basic social aspect, and an external API.

Using this site, users are able to create accounts, add friends and follow artists. They can also search for events, browse top artists/attractions and view event details.
The key features include:
  - Searching and filtering events based on keywords, location, event type and date
  - Creating an account and being able to add friends and follow artists

Basic Userflow:
  - Visit the homepage and find top artists by type (i.e. music, theatre, film, sports)
  - From homepage:
    - Click an artist to view details/events
    - View all events for a particular event type
    - Search events by keyword and location
    - Login/create an account
    - If logged in, can view profile/logout
  - From artist detail page:
    - Follow/unfollow artist (if logged in)
    - View events for that artist
  - From Profile page:
    - View friends
    - Seach users by username to add/remove from friends
    - View artists following
    - Unfollow artists
    - Edit profile

Technology Stack:
  - Frontend:
    - React
    - Redux
    - Material UI
    - React Router DOM
  - Backend:
    - Node
    - Express
    - Postgresql

To Run Locally:
  - Download code
  - In both frontend and backend directories, install dependencies with npm install
  - To run application, use command npm start
  


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
