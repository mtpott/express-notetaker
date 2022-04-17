# Note Taker Application

## Table of Contents
### -[Installation](#installation)
### -[Technologies](#technologies)
### -[Questions](#questions)

## Description
In this project, our task was to connect the already existing front-end to the back-end that we created for a note-taking application. Using Express.js, the user should be able to click on the "take notes" button at "index.html" page and connect to "notes.html", where they are able to write and save notes to the page. I was able to do this by creating GET and POST requests! The GET request to '/notes' returns the 'notes.html' file, while the POST request to '/notes' receives input from the user, adds it to the db.json file, and shows it to the user on the left side of the screen.

Inside of my POST request, the function validateNote is called; here, if req.body (or, the formatted user input) is not properly formatted for whatever reason, it will throw a 400 error and tell the user that their note is not properly formatted. If everything looks okay, a new note is created with createNote. This function pushes req.body to the notes array, which in turn writes the data to the file. This data appears in the list of notes to the left of the user's screen.

Additionally--if you included '/api/notes' at the end of the URL, you can see the entire notes array!

addendum: We were given a bonus as well, to be able to delete notes that appear on the left side of the screen. I tried to get it and wrote out the functionality for it, but the notes do not disappear from the left side of the screen. I went ahead and left all of this in. I do not anticipate receiving bonus credit for this work, but wanted to show that I tried!
    Even though it didn't work quite as I expected it to, I used the findById function to access the id value of each note object in the note array. If it's unable to find the correct note, it sends a 404 error. 
  
## Installation
### Instructions for Project Installation:
To ensure this works as expected, please install Express before attempting to run this code.
  
## Technologies
### Built With:
This project is built using Express.js.
  
## Questions
### Please reach out with any questions or concerns!
Github: https://github.com/mtpott

Email: mtpott23@gmail.com