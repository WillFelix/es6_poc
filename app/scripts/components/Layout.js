import React from 'react';
import { BrowserRouter as Router, Route, Link, browserHistory as history } from 'react-router-dom';

import Header from "./Header";
import Footer from "./Footer";

import Home from "../pages/Home";
import ChuckNorris from "../pages/ChuckNorris";
import Cinema from "../pages/Cinema";
import MyQuotes from "../pages/Quote";
import DailyGIF from "../pages/Gif";

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
						<Route path="/chuck" component={ChuckNorris} />
						<Route path="/movies" component={Cinema} />
						<Route path="/quote" component={MyQuotes} />
						<Route path="/gif" component={DailyGIF} />
					</div>
					<Footer title="Crow Studio" />
				</div>
			</Router>
		);
	}
}
