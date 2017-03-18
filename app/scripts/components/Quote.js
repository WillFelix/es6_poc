import React from "react";

export default class Quote extends React.Component {

	render() {
		const content = `${this.props.content}`;
		return (
			<div class="row">
				<div class="col-md-2"></div>
				<div class='column vc col-md-8 center'>
					<h3><span dangerouslySetInnerHTML={{ __html: content }}></span></h3>
					<p style={{fontSize: '15px'}}>{this.props.title}</p>
				</div>
				<div class="col-md-2"></div>

				<hr/>
			</div>
		);
	}

}
