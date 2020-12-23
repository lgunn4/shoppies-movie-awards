import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {Provider} from "react-redux";
import configureAppStore from "./Redux/Store";

const preloadedState = {
    Nominations: [
        {
            Title: "Logan Rules",
            Year: "1998",
            imdbID: "123513",
            Type: "movie",
            Poster: "https://thispage"
        },
        {
            Title: "Ready Player One",
            Year: "2018",
            imdbID: "tt1677720",
            Type: "movie",
            Poster: "https://m.media-amazon.com/images/M/MV5BY2JiYTNmZTctYTQ1OC00YjU4LWEwMjYtZjkwY2Y5MDI0OTU3XkEyXkFqcGdeQXVyNTI4MzE4MDU@._V1_SX300.jpg"
        }
    ]
};

const store = configureAppStore(preloadedState);


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);