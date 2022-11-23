# The News App

## Setup
This project is set up using Vue and Vite

You can read more about
* Vite here https://vitejs.dev/guide/ and
* Vue here https://vuejs.org/guide/introduction.html

## Prerequisites
To run this project you need Node version 16 or later
Setup .env, take a look on  .env.sample file.

## Run the news app to get started
Install the dependencies `yarn install` 
Start the app by running `yarn dev`  

This will give you a localhost instance where you can inspect that the server is running.  

index.html is the main entry-point and some resources and components are already present for you to get started.

## The News App support:
* The content for the 3 pages should be fetched from the API
* There should be a routing mechanism so that it is easy to navigate between the pages
* The Frontpage and the Free Article is marked as free and can therefore be displayed without limitations
* The Paid Article is not free, and shall therefore only display the first 20 words of its article content
* The Paid Article should have a button overlaying the article with a text similar to "Read the entire article for free by clicking here"
* When clicking the button the user will get access to all the content within the Paid Article.

## Some test coverage
The news app should also contain some relevant unit and/or component tests  
Run the tests with  `yarn test`
