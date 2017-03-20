import React from "react";

import * as MovieAction from "../actions/MovieAction";
import MovieStore from "../stores/MovieStore";
import Movie from "../components/Movie";

export default class Cinema extends React.Component {

	constructor() {
		super();
		this.state = { name: "", movies: [], errorMsg: "" };

		this.all = this.all.bind(this);
	}

	componentWillMount() {
		MovieStore.on("change", this.all);
	}

	componentWillUnmount() {
		MovieStore.removeListener("change", this.all);
	}

	all() {
		let movies = [];
		let errorMsg = "";

		if ( MovieStore.hasError() ) {
			errorMsg = "<div class='col-md-12'><div class='alert alert-danger'>Nenhum filme encontrado com este ator.</div></div>";
		} else {
			movies = MovieStore.all();
		}

		this.setState({
			movies, errorMsg
		});
	}

	changeActorName(e) {
		const actor = e.target.value;
		this.state.name = actor;
	}

	findByActor() {
		const name = this.state.name;
		MovieAction.findByActor(name);
	}

	render() {
		let { movies, errorMsg } = this.state;
		movies = movies.map( (movie, id) => {
			return <Movie key={id} {...movie} />;
		});

		return (
			<div class="container m-t">
				<div class="jumbotron">
					<h1>Movie</h1>
					<p>This API uses the Netflix Catalog to brings up the movies based of the actors name.</p>
					<hr/>
					
					<div class="row">
						<div class="col-md-8">
							<input type="text" class="form-control" onChange={this.changeActorName.bind(this)} placeholder="Insira o nome do ator" />
						</div>
						<div class="col-md-4">
							<button class="btn btn-primary" onClick={this.findByActor.bind(this)}>Buscar</button>
						</div>
					</div>
				</div>

				<div class="row">
					<div dangerouslySetInnerHTML={{ __html: errorMsg }}></div>
					{movies}
				</div>
			</div>
		);
	}

}
