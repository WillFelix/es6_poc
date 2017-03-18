import React from "react";

import * as QuoteAction from "../actions/QuoteAction";
import QuoteStore from "../stores/QuoteStore";
import Quote from "../components/Quote";

export default class MyQuotes extends React.Component {
	constructor() {
		super();
		this.state = { quotes: [] };

		QuoteAction.generate();
	}

	componentWillMount() {
		QuoteStore.on("change", () => {
			this.setState({
				quotes: QuoteStore.all()
			})
		});
	}

	componentWillUnmount() {
		this.setState({
			quotes: []
		});
	}

	render() {
		let { quotes } = this.state;
		quotes = quotes.map( (quote, id) => {
			return <Quote key={id} {...quote} />;
		});

		return (
			<div class="container m-t">
				<div class="jumbotron">
					<h1>Quote</h1>
					<p>Do you want to be inspired for some quotes of smart people in the world. Lets check some right below.</p>
				</div>

				{quotes}
			</div>
		);
	}

}
