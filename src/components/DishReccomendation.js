import { ContentWrapper } from './Wine';
function DishReccomendation({
	strMeal,
	strInstructions,
	strMealThumb,
	strYoutube,
}) {
	return (
		<ContentWrapper>
			<h4>Reccomended Dish: {strMeal}</h4>
			{strMealThumb && <img src={strMealThumb} alt='dish' />}
			{strInstructions && strInstructions.trim() && <p>{strInstructions}</p>}
			{strYoutube && strYoutube.trim() && (
				<a href={strYoutube} target='_blank' rel='noreferrer'>
					Watch on YouTube
				</a>
			)}
		</ContentWrapper>
	);
}

export default DishReccomendation;
