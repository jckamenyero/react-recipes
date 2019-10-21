import React, { Component } from 'react';

export default class ContentItem extends Component {
	render() {
		//console.log(this.props.recipe);
		const {
			image_url,
			title,
			source_url,
			publisher,
			recipe_id
		} = this.props.recipe;
		const { handleDetails } = this.props;
		return (
			<>
				<div>
					<img src={image_url} alt="{title}" />
					<h3>{title}</h3>
					<p className="source">
						Provided by{' '}
						<a href={source_url} target="_blank" rel="noopener noreferrer">
							{publisher}
						</a>
					</p>

					<div className="details" onClick={() => handleDetails(0, recipe_id)}>
						Recipe Details
					</div>
				</div>
			</>
		);
	}
}
