import React from "react";
import { Router, Route, IndexRoute } from 'react-router';

import App from './components/App';
import Home from  './components/Home';
import Movie from './components/Movie';
import Music from './components/Music';
import Book from './components/Book';

export default (
	<Route path="/" component={App}>
     	<IndexRoute component={Home}/>
     	<Route path="movie" component={Movie}/>
     	<Route path="music" component={Music}/>
     	<Route path="book" component={Book}/>
    </Route>
)