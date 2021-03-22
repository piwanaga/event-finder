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
