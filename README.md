# Project 2 Anime Facts App

# Anime Faxx
Love Anime? Me too! Did you know that characters, conflicts, storylines and other incredible details in many well known anime are inspired by real people/events? It's True! Welcome to Anime Faxx, the app that let's you search by anime title for true facts about that anime!

# User Stories
- As a user i want to search anime by title
- As a user i want to see all fact results found 
- As a user i want to be able to save favorited facts
- As a user i want to be able to delete favorited facts
- As a user i want to be able to see the facts i have favorited & which anime they are from

# MVP
- Sign up page
- Log in page
- Search page to search for true facts about an anime by title
- The ability to save favorite facts
- User's page that shows their saved favorites (& which anime they are from)
- The ability to delete favorited facts from user's favorites

# Sign Up
![Sign Up](./imgs/animefaxxSignup.jpeg)

# Log In
![Log In](./imgs/animefaxxLogin.jpeg)

# Search
![Search Page](./imgs/animefaxxSearch.jpeg)

# Results
![Results Page](./imgs/animefaxxResults.jpeg)

# User's Favorite Faxx
![Favorite Faxx](./imgs/animefaxxFavs.jpeg)

# REST Routes

| Verb | Path | Action | Decription |
| ---- | ---- | ---- | ---- |
| Get | /signup | show | display sign up form |
| Post | /signup | create | creates new user |
| Get | /login | show | displays log in form |
| Put | /login | update | clear cookies to auth user |
| Get | /search  | index | anime title search form |
| Get | /search/:id | show | show facts about anime |
| Put | /search/:id | update | updates users favorites |
| Get | /favorites | show | show user profile & favorite facts |
| Delete | /favorites | destroy | delete a saved fact from user favs |
