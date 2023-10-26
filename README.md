# Foodie Fusion

Foodie Fusion is a CRUD app that allows users(foodies) to store and manage reviews of meals they have tried.

## Technologies Used
Foodie Fusion uses:
React as it's front-end framework and JSX to build the user interface.
Express is the back-end framework used to build our server. This is deployed to Heroku, and linked to MongoDB Atlas to store our reviews data.
Axios is used for user authentication.

## Approach

Our team divided the project into three parts, backend, frontend, and authentication. The backend was built while researching third-party APIs. We were not able to find an API that satisfied our requirements, but while researching, our priority was building and testing all our endpoints and HTTP request methods to make sure they were working. This was linked with the frontend React app, and adjustments and changes were made accordingly.

## Unsolved Problems

In the future, our app can look at making our models have relationships so that there is less repetition in our app in terms of fetching data. 

## User Stories

As a user, I want to create a review and view it on the homepage. I would like to be able to click and edit button to make changes to my review, or click a button to delete the review entirely. I would also like to be able to login and view only the reviews I have made. 