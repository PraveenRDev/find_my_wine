import { useState } from 'react';
import styled from 'styled-components';

const SearchBarWrapper = styled.form`
	font-family: 'Roboto', sans-serif;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin-top: 3em;
	& label {
		font-size: 3em;
		letter-spacing: 0.2em;
		margin-bottom: 0.5em;
		color: #3e0848;
	}
	& input {
		margin-bottom: 1.2em;
		outline: none;
		border: none;
	}
	& input[type='text'] {
		border-bottom: 2px solid #d3316b;
		color: #3e0848;
		text-align: center;
		text-transform: uppercase;
		font-family: inherit;
		width: 15em;
		font-size: 1.6em;
		letter-spacing: 0.2em;
		padding-bottom: 0.2em;
		:focus {
			border-bottom: 2px solid red;
		}
	}
	& input[type='submit'] {
		padding: 1em 2em;
		font-family: inherit;
		cursor: pointer;
		color: #fff;
		background-color: #d3316b;
		font-size: 1.3em;
		letter-spacing: 0.2em;
		:hover {
			background-color: #e7457f;
		}
		:active {
			color: #d3316b;
		}
	}
`;

function SearchBar({ searchWine }) {
	const [searchTerm, setSearchTerm] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		if (searchTerm.trim()) {
			searchWine(searchTerm);
		}
	};

	return (
		<SearchBarWrapper onSubmit={handleSubmit}>
			<label htmlFor='searchBar'>What's Your Meal?</label>
			<input
				id='searchBar'
				type='text'
				autoComplete='off'
				value={searchTerm}
				onChange={(e) => setSearchTerm(e.target.value)}
			/>
			<input type='submit' value="What's My Wine" />
		</SearchBarWrapper>
	);
}

export default SearchBar;
