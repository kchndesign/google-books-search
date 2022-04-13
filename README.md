# Google Books Search Project

This is a simple React Project that I am making to learn React and the Fetch
api.

## Contents

-   ## [Project Brief](#project-brief-1)
-   ## [Technical Implementation](#technical-implementation-1)

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
-   Write as many non-DOM functions as you can
-   Functions should do 1 thing, and should be as pure and reusable as possible
-   Always use iterators over loops
-   Always parametrize and abstract large pieces of duplicate code.

**Optional but Bonus**

-   Give feedback to the user when no book results can be found for the query.
-   When a user clicks a book in the grid, a modal should appear with more book
    information, think about release, publish date, country, languages, etc.

## Technical Implementation

This ended up being a relatively simple application that uses the `fetch` api to render a number of reusable 'BookBox' components to the page.

### Implementing Placeholders

I know that there are packages available that make placeholders easy to implement in React, but I wanted to give this a try myself. I used a CSS animation [from aji on codepen](https://codepen.io/aji/pen/evMKWN) and created a number of 'utility components'.

When fetching data, I would first render a number of `BookBox` components that are given `null` data as props. These `BookBox` components know to render placeholders when they have been given `null` as a property.

Since images loaded slower than the text, I also created a `BookImage` component that had similar logic, as well as extra provisions to show a predetermined image in the case that the API did not provide a link to an image.

This was intended to provide users semantic feedback, telling them that their content is being loaded.

**Challenges**

While manualling implementing these features, there were some obstacles to overcome.

The placeholders were `div`s that had a set width, height and background. However, with flexboxes, they were unable to fill the content of their parents and so when I tried to emulate the layout of the `BookBox` component with placeholders, all of them were squashed together.

Another thing was managing the logic that replaced the placeholders with actual content. Having to do this manually was tedious and massively inflated my components with extra states and conditional rendering. Particularly, the images that needed to use the `onLoad` method, I had to render both image and placeholder and toggle their `display: block | none` styles.

### Component Composition

Having the BookImage components nested inside the BookBox components nested inside a SearchResults component might result in some prop drilling.

To avoid this, I flattened the structure of the application using component composition. This means using `props.children` or otherwise passing children as a prop to be rendered by the component. This is useful when a bunch of nested components all require the same state from a single parent. This avoids passing unused props through container components like SearchResults.
