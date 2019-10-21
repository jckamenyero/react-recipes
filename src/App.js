import React, { Component } from 'react';
import './App.css';
import { recipes } from './tempList';
import ContentList from './components/ContentList';
import ContentDetails from './components/ContentDetails';

export default class App extends Component {
	state = {
		//recipes: [],
		recipes: recipes,
		url:
			//'https://www.food2fork.com/api/search?key=f89992a28a9a034c968d2f0483346486',
			//'https://www.food2fork.com/api/search?key=8fd1ab04e0b8dfa6052b0fee06e1730c',
			'https://www.food2fork.com/api/search?key=f62b0b92975c39d9bd58be6824b9dac4',
		base_url:
			'https://www.food2fork.com/api/search?key=f62b0b92975c39d9bd58be6824b9dac4',
		details_id: 35380,
		pageIndex: 1,
		search: '',
		query: '&q='
	};

	async getRecipes() {
		try {
			const data = await fetch(this.state.url);
			const jsonData = await data.json();
			console.log(jsonData);

			this.setState({
				recipes: jsonData.recipes
			});
		} catch (error) {
			console.log(error);
		}
	}
	componentDidMount() {
		this.getRecipes();
	}

	displayPage = index => {
		switch (index) {
			case 1:
				return (
					<ContentList
						recipes={this.state.recipes}
						handleDetails={this.handleDetails}
						value={this.state.search}
						handleChange={this.handleChange}
						handleSubmit={this.handleSubmit}
					/>
				);
			case 0:
				return (
					<ContentDetails
						id={this.state.details_id}
						handleIndex={this.handleIndex}
					/>
				);
			default:
		}
	};

	handleIndex = index => {
		this.setState({
			pageIndex: index
		});
	};

	handleDetails = (index, id) => {
		this.setState({
			pageIndex: index,
			details_id: id
		});
	};

	handleChange = e => {
		//console.log('hello from change');
		this.setState(
			{
				search: e.target.value
			},
			() => {
				console.log(this.state.search);
			}
		);
	};

	handleSubmit = e => {
		e.preventDefault();
		//console.log('Hello from submit');
		const { url, query, search } = this.state;
		this.setState(
			() => {
				return { url: `${url}${query}${search}`, search: '' };
			},
			() => {
				this.getRecipes();
			}
		);
	};

	render() {
		//console.log(this.state.recipes);

		return (
			<>
				<div className="container">
					<header>
						<h1>Featured Recipes with Food2Fork</h1>
					</header>
					{this.displayPage(this.state.pageIndex)}
				</div>
			</>
		);
	}
}
