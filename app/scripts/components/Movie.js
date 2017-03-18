import React from "react";

export default class Movie extends React.Component {

	render() {
		return (
			<div>
				<div class='row flex f-row vc'>
					<div class='flex column col-md-8'>
						<h1>{this.props.show_title}</h1>

						<p><b>Duração:</b> {this.props.runtime}</p>
						<p><b>Categoria:</b> {this.props.category}</p>
						<p><b>Elenco:</b> {this.props.show_cast}</p>
						<p><b>Diretor:</b> {this.props.director}</p>
						<p><b>Ano:</b> {this.props.release_year}</p>
						<p><b>Nota:</b> {this.props.rating}</p>

						<p><b>Resumo:</b></p>
						<p>{this.props.summary}</p>
					</div>
					<div class='content vc col-md-4'>
						<p><img src={this.props.poster} /></p>
					</div>
				</div>
				
				<hr/>
			</div>
		);
	}

}
