# Skool Me
Just to learn React and Django a little bit, I'm going to make a fake little student portal applet thing. The current plan is to make the frontend in React and backend in Django seperately first and then smoosh them together and then maybe polish the whole thing off but we'll see lolz.

Current Todos:

# Plan for front end
- flashcards
    - make flipping happen on click
    - center text vertically for cards
    - make study mode pretty lolz
- assignments
    - there should be submissions and quizes
    - I'm not sure if there should be a middle thing or side thing
    - quizes should have a start page
    - and then following pages with multiple pages or response sections
    - or even submissions
    - then they should finish with a submit thing
    - submission pages should have a description, then a submission part
    - after submissions 
- lessons
    - the lessons should just be a page with 
    - special fields
    - or pictures
    - and subheadings
    - the sidebar should have a little dropdown for the current lesson
    - with hyperlinks that scroll down to the subheading/image of choice

# Plan for back end
- setup database
    - make schemas for all the stuff
        - figure out how we're storing the info for the lessons
    - run whatever the migration command thing is
- create APIs for CRUD with the data
    - make a little crappy UI for displaying these
    - make a little crappy UI for submitting these 
    - figure out how we're encoding this (in the url or body)

# Connection plan
- make it so that Django app serves the React app
- work in http requests when retrieving info into the UI components
- start adding the CUD out of the CRUD functionality in the front end

git rm --cached db.sqlite3
