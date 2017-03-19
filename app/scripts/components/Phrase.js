import React from "react";

export default class Phrase extends React.Component {

	render() {
		return (
			<div class="col-lg-4">
				<h2>#{this.props.id}</h2>
				<p>{this.props.joke}</p>
			</div>
		);
	}

}
