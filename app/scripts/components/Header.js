import React from "react";

export default class Header extends React.Component {

	render() {
		return (
			<header>
				<div class='content'>
					<span>{this.props.title}</span>
				</div>

				<hr/>
			</header>
		);
	}

}
