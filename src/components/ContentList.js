import React, { Component } from 'react';
import ContentSingle from './ContentSingle';
import ContentSearch from './ContentSearch';

export default class ContentList extends Component {
	render() {
		const {
			recipes,
			handleDetails,
			value,
			handleChange,
			handleSubmit
		} = this.props;
		//console.log(recipes);
		return (
			<>
				<ContentSearch
					value={value}
					handleChange={handleChange}
					handleSubmit={handleSubmit}
				/>
				<section>
					<div className="master-grid">
						{recipes.map(recipe => {
							return (
								<ContentSingle
									key={recipe.recipe_id}
									recipe={recipe}
									handleDetails={handleDetails}
								/>
							);
						})}
					</div>
				</section>
			</>
		);
	}
}
