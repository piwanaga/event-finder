# EventFinder

This project is designed for users to be able to browse and search live events, including concerts, sports events, movies, arts and theater. 

Users can:

* Browse popular attractions from the homepage
* Search for specific events or attractions by keyword
* Browse events by genre 
* Create an account and save favorite attractions

## Live Page
[https://event-finder.surge.sh/](https://event-finder.surge.sh/)

This includes a "test" login that can be used by clicking on "Login" from the homepage and logging in using the pre-filled credentials. 

## Tech Used
* Node, Express, PostgreSQL, BCrypt, JSON Web Tokens
* React, Redux, TailwindCSS

## To Run Locally
#### Clone repo.

```
git clone https://github.com/piwanaga/vet-wait.git
```

#### Install packages.

* ```cd``` into project directory

* Server packages:
	* ```cd server```
	* ```npm install```

* Client packages:
	* ```cd client```
	* ```npm install```

#### Add secrets file and API Key
* You can sign up for your own Ticketmaster API Key [here](https://developer-acct.ticketmaster.com/user/register):  
* From project root directory:
	* ```cd client/src```
* Create new file called ```secrets.js```
* Add the following line to ```secrets.js```:

	*	```export const API_KEY = <YOUR_API_KEY>```

#### Create database
* ```cd``` into server directory
* Create database:
	* ```createdb event_finder```
* Run schema file:
	* ```psql -d event_finder_dev -f schema.sql```
* Seed db with test user:
	* ```psql -d event_finder_dev -f data.sql```
	* This is optional. You can also just create a new account.

#### Run in local server.
You will need to run both the server and client separately.

* To run server:
	* ```cd``` into server directory
	* ```nodemon server.js```
* To run client
	* ```cd``` into client directory
	* ```npm start```  

You should now be able to view the application at localhost:3000





