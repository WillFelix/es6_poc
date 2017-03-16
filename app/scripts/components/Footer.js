import React from "react";

export default class Footer extends React.Component {

	render() {
		return (
			<footer id='footer'>
				<hr/>

				<div class='content'>
					<span>{this.props.title}</span>
				</div>
			</footer>
		);
	}

}
