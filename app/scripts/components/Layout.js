import React from 'react';
import { BrowserRouter as Router, Route, Link, browserHistory as history } from 'react-router-dom';

import Header from "./Header";
import Footer from "./Footer";

import Home from "../pages/Home";
import ChuckNorrisP from "../pages/ChuckNorris";
import MovieP from "../pages/Cinema";
import QuoteP from "../pages/Quote";
import GifP from "../pages/Gif";

export default class Layout extends React.Component {

	constructor() {
		super();
	}

	render() {
		return (
			<Router history={history}>
				<div>
					<Header title="React + ES6"/>
					<div>
						<Route exact path="/" component={Home} />
						<Route path="/chuck" component={ChuckNorrisP} />
						<Route path="/movies" component={MovieP} />
						<Route path="/quote" component={QuoteP} />
						<Route path="/gif" component={GifP} />
					</div>
					<Footer title="Crow Studio" />
				</div>
			</Router>
		);
	}
}
