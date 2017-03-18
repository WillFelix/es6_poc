import React from "react";

export default class Movie extends React.Component {

	render() {
		return (
			<div>
				<hr/>

				<div class='content column'>
					<p><b>Categoria:</b> {this.props.category}</p>
					<p><b>Titulo:</b> {this.props.show_title}</p>
					<p><b>Elenco:</b> {this.props.show_cast}</p>
					<p><b>Duração:</b> {this.props.runtime}</p>
					<p><b>Diretor:</b> {this.props.director}</p>
					<p><b>Resumo:</b> {this.props.summary}</p>
					<p><b>Ano:</b> {this.props.release_year}</p>
					<p><b>Nota:</b> {this.props.rating}</p>
					<p><img src={this.props.poster} /></p>
				</div>
			</div>
		);
	}

}
