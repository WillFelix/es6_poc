import React from "react";
import Link from "react-router-dom";

export default class Header extends React.Component {

	render() {
		return (
			<header>
				<nav class="navbar navbar-inverse navbar-fixed-top">
					<div class="container">
						<div class="navbar-header">
							<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
								<span class="sr-only">Toggle navigation</span>
								<span class="icon-bar"></span>
								<span class="icon-bar"></span>
								<span class="icon-bar"></span>
							</button>
							<a class="navbar-brand" href="/">{this.props.title}</a>
						</div>
						<div id="navbar" class="navbar-collapse collapse">
							<ul class="nav navbar-nav">
								<li class="active"><Link to="/">Home</Link></li>
								<li><Link to="/about">About</Link></li>
								<li><Link to="contact">Contact</Link></li>
							</ul>
						</div>
					</div>
				</nav>
			</header>
		);
	}

}
