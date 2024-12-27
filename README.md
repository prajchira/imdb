Praj Chirathivat: FilmMaster IMDB Project

1. I created this project so that film enthusiasts can see what movies are currently popular and what movies they want to watch in the future. This project is an IMDb clone in which there are 2 main components. 

The first component is the trending page outputs the 20 most trending movies of the week. Trendiness is ranked by "popularity", in which database tMDB has its own algorithm to calculate. The higher the score means the more popular the movie is. The score constantly updates everytime you refresh the page.

The second component is the "find" page, which serves as a search engine for learning about different movies. You can also "favorite" movies by clicking on the "heart" symbol to keep track of movies you enjoy or want to watch. You can view your liked movies through pressing the "Favorite Movies" button at the top. To remove the movie, just click on the "no" emoji. Users can also sort their search with 3 different modes: popularity, rating, and normal. Normal is just a regular search in which your query tries to match the closest word to the title name. Rating puts the highest rated movies at the front of the results. Popularity puts the highest popularity score movies at the front of the results. The "Ratings" and "Popularity" setting ranks only the top 20 movies whose titles are spelled most similar to the query. 

2. I included a React/Tailwind CSS Frontend with different visible components, such as search bar, navigation bar, "favorite" button, and many images. I also worked on mobile responsiveness whereby the pictures and the grid organization changes as I adjust the screen size. When you scroll down in the "trending", I also created a background gradient which turns pink from white. I also created a custom 404 not found page.

    Regarding the Backend, I performed several API calls to the tMDB database, retrieving all of my movie data for the website, including photos. I used the Axios library to easily make HTTP requests to TMDb's API. To make sure that I retreive the right information, I used the Console to analyze the Objects outputted from my API calls. These objects would be furthur utilized for mappings, which is key for outputting my results in both "trending" page and "find" page. Fuzziness and weighting during search comes with the tMDB movie database when querying, meaning the query alright takes in to account typos and prioritizes movie title when querying.

    I also deployed my site through netlify!

2. Deployment link: https://64fa61e1d2c16501d6310338--snazzy-sable-44fcdb.netlify.app/


Below is how to use react:

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

