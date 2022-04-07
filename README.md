# Google Books Search Project

This is a simple React Project that I am making to learn React and the Fetch
api.

## Contents

-   ## [Project Brief](#project-brief-1)

## Project Brief

### Aims

The aim of thie project is to reinforce my learning in React, Fetch api, and
asynchronous JavaScript.

### Project Requirements

**Basic Requirements**

1. Create a page that allows users to search for books.
2. Page should include the following
    - Header Section introducing the page.
    - Form containing a text input and a submit/search button.
    - A grid of books

**Details**

-   When the submit button is clicked you need to request books from the Google
    Books API using the input vlaue as your query string.
-   The books that you receive should be rendered in the books grid.
-   Each book in the grid should have an image, author, title and description
-   The grid should be responsive on different screen sizes You should use async
    / await for your request code, NOT .then

**Styling**

-   This application should look good.
-   Styling must use BEM, and each block should have its own SCSS file
-   Your palette should use variables

**Application Design**

-   You should separate DOM functions and non-DOM functions in different modules
    Example:
    https://github.com/nology-tech/kiribati-resources/tree/main/js/modules
-   Write as many non-DOM functions as you can
-   Functions should do 1 thing, and should be as pure and reusable as possible
-   Always use iterators over loops
-   Always parametrize and abstract large pieces of duplicate code.

**Optional but Bonus**

-   Give feedback to the user when no book results can be found for the query.
-   When a user clicks a book in the grid, a modal should appear with more book
    information, think about release, publish date, country, languages, etc.
