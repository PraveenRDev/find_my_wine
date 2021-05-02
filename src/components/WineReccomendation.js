import styled from 'styled-components';
import Wine from './Wine';

const RecommendationWrapper = styled.section`
	margin-top: 3em;
	color: #fff;
	h3 {
		font-size: 2em;
		letter-spacing: 0.15em;
		font-family: 'Roboto Slab', serif;
		background-color: #3e0848;
		padding: 1em 2em;
		text-align: center;
	}
	p {
		font-size: 1.6em;
		font-family: 'Roboto', sans-serif;
		color: #3e0848;
		padding: 0em 2em;
		line-height: 1.8;
		display: block;
		letter-spacing: 0.1em;
	}
`;

function WineReccomendation({ pairedWines, pairingText, productMatches }) {
	return (
		<RecommendationWrapper>
			{pairedWines && pairedWines.length > 0 ? (
				<h3>
					Reccomended Wines{' '}
					{pairedWines &&
						pairedWines.length > 0 &&
						':' +
							pairedWines.join(', ').replace(/\b\w/g, (l) => l.toUpperCase())}
				</h3>
			) : (
				<p>Sorry! We couldn't find a right wine to pair with your dish.</p>
			)}
			{pairingText && pairingText.trim() && <p>{pairingText}</p>}
			{productMatches &&
				productMatches.length > 0 &&
				productMatches.map((wine) => <Wine key={wine.id} {...wine} />)}
		</RecommendationWrapper>
	);
}

export default WineReccomendation;
