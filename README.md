# A Song of Ice and Fire

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


## Routes

### /
Home page, displays a list of books, sortable by id. Each book is a link to a page with further info about the book.

### /books/:bookId
Book detail page, displays information about a book, along with a sortable list of characters. For convenience, the number of characters is capped at 20. Each character is a link to a page with more information about that character.

### /books/:bookId/char/:charId
Character detail page. Displays information about a character.

## App architecture
This app uses React Router for routing, but is otherwise mostly vanilla-React.  The base component creates the 3 main routes listed above. Each route renders a component that fetches the relevant data based on the ids in the url path.  Custom, reusable hooks are used for each resource, and all hooks conform to a basic API returning data, loading, and error values.  Each hook uses the API object (written with the standard Fetch API) that is available via React context, to allow for easy mocking during testing. The API uses a very simple cache to save resources. There is no eviction policy since this data is very unlikely to change.

### Common components
 * Breadcrumb - a navigation component that compares the current active route to the list of possible routes, and displays links back to the root route.
 * Data Component - a simple wrapper that displays loading/error states if applicable, and custom children if not.
 * SortableList - a custom list component that takes items, a sorting function, and key/value extractors to render a list that can be sorted by custom properties, ascending and descending.

## Conspiciously absent
Some things that got left off due to time that would make a better app:
* Styling - in order to focus on functionality, styling has largely been ignored, although semantic HTML has been used as much as possible.
* State management - in a real app you would definitely want to have a more full-featured state management solution than a simple object cache, as well as a better resolver mechanism to determine if data needs to be re-fetched or not.
* Testing - in order to focus on functionality, unit tests have been left off. However, components and the app architecture have been designed to hopefully be easily testable.
* Full character listing - the ASOIAF books have famously expansive cast lists - in the interest of not overwhelming the user I limited the shown characters per book to 20 (this is configurable in the src/config file). Instead of that, one could implement pagination, or even an infinite scroll, although that would complicate the character sorting requirement.


## Running the project

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run lint`

Runs the linting test

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
