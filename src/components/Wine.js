import styled from 'styled-components';

export const ContentWrapper = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	font-family: 'Roboto Slab', serif;
	h4 {
		font-size: 4em;
		font-weight: 100;
		color: #d3316b;
	}
	& > img {
		max-height: 25em;
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
	a {
		margin-top: 0.5em;
		text-decoration: none;
		padding: 1em 2em;
		cursor: pointer;
		color: #fff;
		background-color: #d3316b;
		font-size: 1.3em;
		letter-spacing: 0.2em;
		font-family: 'Roboto', sans-serif;
		:hover {
			background-color: #e7457f;
		}
		:active {
			color: #d3316b;
		}
	}
`;

function Wine({ title, description, imageUrl, link }) {
	return (
		<ContentWrapper>
			{title && title.trim() && <h4>Buy a bottle of {title}</h4>}
			{imageUrl && <img src={imageUrl} alt='wine' />}
			{description && description.trim() && <p>{description}</p>}
			<a href={link} target='_blank' rel='noreferrer'>
				Buy Now
			</a>
		</ContentWrapper>
	);
}

export default Wine;
