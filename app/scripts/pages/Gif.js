import React from "react";

import * as GifAction from "../actions/GifAction";
import GifStore from "../stores/GifStore";

export default class Gif extends React.Component {

	constructor() {
		super();
		this.state = { gif: GifStore.gif() };
		this.gif = this.gif.bind(this);
	}

	componentWillMount() {
		GifStore.on("change", this.gif);
	}

	componentWillUnmount() {
		GifStore.removeListener("change", this.gif);
	}

	gif() {
		this.setState({
			gif: GifStore.gif()
		});
	}

	generate() {
		GifAction.generate();
	}

	render() {
		return (
			<div class="container m-t">
				<div class="jumbotron">
					<h1>Gif</h1>
					<p>Gif API to you have some fun during your sadly life. Enjoy it press the button below.</p>
					<p><button class='btn btn-primary' onClick={this.generate.bind(this)}>Generate GIF</button></p>
				</div>

				<div class='row'>
					<div class='col-md-3'></div>
					<div class='col-md-6'>
						<img src={this.state.gif} width='100%' />
					</div>
					<div class='col-md-3'></div>
				</div>
			</div>
		);
	}

}
