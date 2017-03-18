import React from "react";
import axios from "axios";

export default class Home extends React.Component {

	constructor() {
		super();
		this.state = { phrases: [] };
	}

	componentWillMount() {
		axios.get("http://api.icndb.com/jokes/random/3")
		.then((result) => {
			let arr = result.data.value;
			this.setState({ phrases: arr })
		});
	}

	render() {
		const { phrases } = this.state;
		let res = phrases.map((phrase, i) => (

			<div class="col-lg-4" key={i}>
				<img class="img-circle" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Generic placeholder image" width="140" height="140" />
				<h2>{phrase.id}</h2>
				<p>{phrase.joke}</p>
			</div>

		))

		return (
			<div class="container marketing">
				<div class="row">
					{res}
				</div>
			</div>
		);
	}

}
