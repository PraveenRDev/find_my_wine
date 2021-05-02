import styled from 'styled-components';
import { useState } from 'react';
import StripeCheckoutForm from './CheckoutForm';

const FooterWrapper = styled.footer`
	background-color: #3e0848;
	height: 15vh;
	font-family: 'Roboto', sans-serif;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin-top: 3em;
	color: #fff;
	font-size: 1.2em;
	letter-spacing: 0.1em;
	& > button {
		outline: none;
		border: 0;
		margin-top: 0.5em;
		text-decoration: none;
		padding: 0.5em 2em;
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

function Footer() {
	const [showCheckoutForm, setShowCheckoutForm] = useState(false);

	return (
		<FooterWrapper>
			{showCheckoutForm && (
				<StripeCheckoutForm close={()=>setShowCheckoutForm(false)} setShowCheckoutForm={setShowCheckoutForm} />
			)}
			<button onClick={() => setShowCheckoutForm(true)}>Donate</button>
			<p>Created By Praveen | 2021</p>
		</FooterWrapper>
	);
}

export default Footer;
