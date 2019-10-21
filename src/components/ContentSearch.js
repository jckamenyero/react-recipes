import React, { Component } from 'react';

export default class ContentSearch extends Component {
	render() {
		const { value, handleChange, handleSubmit } = this.props;

		return (
			<>
				<div className="search_box">
					<form onSubmit={handleSubmit}>
						<label htmlFor="search" className="text-capitalize">
							type recipes separared by comma
						</label>
						<div className="input-group">
							<input
								type="text"
								name="search"
								placeholder="chicken,onion,carrots"
								value={value}
								onChange={handleChange}
							/>
							<div className="input-group-append">
								<button
									type="submit"
									className="input-group-text bg-primary text-white"
								>
									<i className="fas fa-search" />
								</button>
							</div>
						</div>
					</form>
				</div>
			</>
		);
	}
}
