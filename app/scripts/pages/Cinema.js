import React from "react";
import * as MovieAction from "../actions/MovieAction";
import MovieStore from "../stores/MovieStore";
import Movie from "../components/Movie";

export default class Cinema extends React.Component {

	constructor() {
		super();
		this.state = { name: "", movies: [] }
	}

	componentWillMount() {
		MovieStore.on("change", () => {
			this.setState({
				movies: MovieStore.all()
			});
		});
	}

	componentWillUnmount() {
		this.setState({
			name: "",
			movies: []
		});
	}

	changeActorName(e) {
		const actor = e.target.value;
		this.state.name = actor;
	}

	findByActor() {
		const name = this.state.name;
		console.info("Actor: ", name);
		MovieAction.findByActor(name);
	}

	render() {
		let { movies } = this.state;
		console.info("Movies: ", movies);
		movies = movies.map( (movie, id) => {
			return <Movie key={id} {...movie} />
		});

		return (
			<div>
				<br /><br /><br />
				<div class="container">
					<div class="jumbotron">
						<h1>Movie</h1>
						<p>This is a template showcasing the optional theme stylesheet included in Bootstrap. Use it as a starting point to create something more unique by building on or modifying it.</p>
						<input type="text" onChange={this.changeActorName.bind(this)} placeholder={this.state.name} />
						<button class="btn btn-primary" onClick={this.findByActor.bind(this)}>Buscar</button>
					</div>

					<div class="row">
						{movies}
					</div>
				</div>
			</div>
		);
	}

}
