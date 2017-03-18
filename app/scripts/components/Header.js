import React from 'react';
import { Link } from 'react-router-dom';

export default class Header extends React.Component {

	render() {
		return (
			<div class="navbar-wrapper">
			    <div class="container">

			        <nav class="navbar navbar-inverse navbar-static-top">
			            <div class="container">
			                <div class="navbar-header">
			                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
			                        <span class="sr-only">Toggle navigation</span>
			                        <span class="icon-bar"></span>
			                        <span class="icon-bar"></span>
			                        <span class="icon-bar"></span>
			                    </button>
			                    <Link to="/" className="navbar-brand">{this.props.title}</Link>
			                </div>
			                <div id="navbar" class="navbar-collapse collapse">
			                    <ul class="nav navbar-nav">
									<li><Link to="/">Home</Link></li>
									<li><Link to="/chuck">ChuckNorris</Link></li>
									<li><Link to="/movies">Movies</Link></li>
									<li><Link to="/quote">Quotes</Link></li>
									<li><Link to="/gif">Gif</Link></li>
			                    </ul>
			                </div>
			            </div>
			        </nav>

			    </div>
			</div>
		);
	}

}
