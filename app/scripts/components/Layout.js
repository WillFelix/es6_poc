import React from "react";

import Header from "./Header";
import Footer from "./Footer";
import axios from "axios";

import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";

export default class Layout extends React.Component {

	constructor() {
		super();
		this.state = { name: "Will" };
		this.name = "Will";
	}

	// componentWillMount() {
	// 	axios.get("http://api.icndb.com/jokes/random/5")
	// 	.then((result) => {
	// 		let arr = result.data.value;
	// 	});
	// }

	render() {
		return (
			<div>
				<Header title="ES6 | Ninja Edition"/>

				<Router>
					<Route exact path="/" component={Home}/>
					<Route path="/about" component={About}/>
				</Router>

				<Footer title="Crow Studio" />
			</div>
		);
	}
}
