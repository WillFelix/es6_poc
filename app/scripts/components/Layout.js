import React from "react";

import Header from "./Header"
import Footer from "./Footer"

export default class Layout extends React.Component {

	constructor() {
		super();
		this.state = { name: "Will" };
		this.name = "Will";
	}

	render() {
		return (
			<div>
				<Header title="MODAFOCA HEADER" />

				<h1 className='center'>{this.state.name}</h1>

				<Footer title="MODAFOCA FOOTER" />
			</div>
		);
	}
}
