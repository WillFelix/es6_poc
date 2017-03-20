import React from "react";

import Phrase from "../components/Phrase";
import * as ChuckAction from "../actions/ChuckAction";
import ChuckStore from "../stores/ChuckStore";

export default class ChuckNorris extends React.Component {

	constructor() {
		super();
		this.state = { phrases: ChuckStore.all() };
		this.setAll = this.setAll.bind(this);
	}

	componentWillMount() {
		ChuckAction.generate();
		ChuckStore.on("change", this.setAll );
	}

	componentWillUnmount() {
		ChuckStore.removeListener("change", this.setAll );
	}

	setAll() {
		this.setState({
			phrases: ChuckStore.all()
		});
	}

	render() {
		const { phrases } = this.state;
		let res = phrases.map((phrase, i) => {
			return <Phrase key={i} {...phrase} />;
		});

		return (
			<div class="container m-t">
				<div class="jumbotron">
					<h1>ChuckNorris</h1>
					<p>This is a template showcasing the optional theme stylesheet included in Bootstrap. Use it as a starting point to create something more unique by building on or modifying it.</p>
				</div>

				<div class="row">
					{res}
				</div>
			</div>
		);
	}
}
