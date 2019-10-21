import React, { Component } from 'react';
import { recipe } from '../tempDetails';

export default class ContentDetails extends Component {
	state = {
		recipe: recipe
	};

	async componentDidMount() {
		//const url = `https://www.food2fork.com/api/get?key=f89992a28a9a034c968d2f0483346486&rId=${this.props.id}`;
		//const url = `https://www.food2fork.com/api/get?key=8fd1ab04e0b8dfa6052b0fee06e1730c&rId=${this.props.id}`;
		const url = `https://www.food2fork.com/api/get?key=f62b0b92975c39d9bd58be6824b9dac4&rId=${this.props.id}`;

		try {
			const data = await fetch(url);
			const jsonData = await data.json();
			this.setState(
				(state, props) => {
					return { recipe: jsonData.recipe };
				},
				() => {}
			);
		} catch (error) {
			console.log(error);
		}
	}

	render() {
		//console.log(this.state.recipe);
		const {
			image_url,
			publisher,
			publisher_url,
			source_url,
			title,
			ingredients
		} = this.state.recipe;
		const { handleIndex } = this.props;

		return (
			<>
				<section>
					<div className="details-grid">
						<div className="nav-back">
							<div className="details" onClick={() => handleIndex(1)}>
								Back To List
							</div>
						</div>
						<div className="left-side">
							<img src={image_url} alt="{title}" />
						</div>
						<div className="right-side">
							<h1>{title}</h1>
							<p className="source">
								Provided by{' '}
								<a href={source_url} target="_blank" rel="noopener noreferrer">
									{publisher}
								</a>
							</p>
							<div className="details-content">
								<h3>Ingredients</h3>
								{ingredients.map((ingredient, index) => {
									return (
										<span key={index}>
											<input type="checkbox" id={index} />
											<label htmlFor={index}>{ingredient}</label>
										</span>
									);
								})}
							</div>
						</div>
					</div>
				</section>
			</>
		);
	}
}
