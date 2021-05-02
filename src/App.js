import axios from 'axios';
import { useState, useEffect } from 'react';
import logo from './assets/logo.png';
import './App.css';
import styled from 'styled-components';
import SearchBar from './components/SearchBar';
import WineReccomendation from './components/WineReccomendation';
import DishReccomendation from './components/DishReccomendation';
import Footer from './components/Footer';

const LogoWrapper = styled.div`
	background-color: #3e0848;
	display: flex;
	align-items: center;
	justify-content: center;
	height: 40vh;
`;

const Container = styled.main`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	max-width: 1200px;
	margin: 0 auto;
	min-height: 40vh;
`;

function App() {
	const [winePairing, setWinePairing] = useState(null);
	const [dishPairing, setDishPairing] = useState(null);

	useEffect(() => {
		if (
			dishPairing &&
			winePairing &&
			(winePairing.status === 'failure' || winePairing.pairedWines.length === 0)
		) {
			setDishPairing(null);
		}
	}, [winePairing, dishPairing]);

	const searchWine = async (wine) => {
		// get wine suggestion
		let response = await axios.get(
			`https://api.spoonacular.com/food/wine/pairing?apiKey=0cc99dfe6a54439ca2b22197c6d0ee30&food=${wine}`
		);
		if (response && response.status === 200 && response.data) {
			setWinePairing(response.data);
			// get alternate dish suggestion for wine
			if (response.data.pairedWines && response.data.pairedWines.length > 0) {
				response = await axios.get(
					`https://api.spoonacular.com/food/wine/dishes?apiKey=0cc99dfe6a54439ca2b22197c6d0ee30&wine=${response.data.pairedWines[0]}`
				);

				if (response.data && response.data.pairings.length > 0) {
					let randomDish = null;
					const reccomendedDishes = response.data.pairings.filter(
						(dish) => dish.toLowerCase() !== wine.toLowerCase()
					);
					randomDish =
						reccomendedDishes[
							Math.floor(Math.random() * reccomendedDishes.length)
						];
					// get dish details
					const wordSplit = randomDish.split(' ');
					console.log(randomDish);
					console.log(wordSplit);
					randomDish =
						wordSplit.length > 1
							? randomDish[wordSplit.length - 1]
							: randomDish;

					response = await axios.get(
						`https://www.themealdb.com/api/json/v1/1/search.php?s=${randomDish}`
					);
					let dish = null;
					if (response && response.status === 200 && response.data) {
						dish =
							response && response.data.meals && response.data.meals.length > 0
								? response.data.meals[0]
								: null;
					}
					setDishPairing(dish);
				}
			}
		}
	};

	return (
		<div className='App'>
			<LogoWrapper>
				<img className='app-logo' src={logo} alt='Logo of WMW' />
			</LogoWrapper>
			<Container>
				<SearchBar searchWine={searchWine} />
				{winePairing && <WineReccomendation {...winePairing} />}
				{dishPairing && <DishReccomendation {...dishPairing} />}
			</Container>
			<Footer />
		</div>
	);
}

export default App;
