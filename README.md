# EventFinder

This project is designed for users to be able to browse and search for live events, including concerts, sports events, movies, arts and theater. 
Users can:
* browse popular attractions from the homepage
* search for specific events or attractions by keyword
* browse events by genre 
* create an account which allows you to save u

## Live Page
[https://event-finder.surge.sh/](https://event-finder.surge.sh/)
This includes a "test" login that can be used by clicking on "Login" from the homepage and logging in using the pre-filled form credentials. 

## Installation

Clone the repo.

```
git clone https://github.com/piwanaga/vet-wait.git
```

Install packages.

```
npm install
```

Run in local server.

```
npm start
```

## Usage

1. Add person and pet to queue by submitting their names and phone number using the form (use your real phone number to get a text from VetWait!).
2. When a person is added to the queue, clicking 'Send Text' will send a message to the provided phone number to let them know they are ready to be checked in.
3. Clicking 'Check In' next to a person in the queue will mark them as checked in, completing the process.
4. Click 'Clear Checked In' below the queue to remove people from the queue who have been marked as checked in.

## Key Features
- Form validation
- Input mask on phone number field to keep input consistent
- Interactive UI
- Responsive Design
- Send SMS using [textbelt api](https://textbelt.com/)


