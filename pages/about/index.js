import React from 'react';
import Router from 'next/router';
import { Main } from '../../components/Main';


export default function About() {

	const handleBack = () => {
		Router.push('/')
	}

  return (
		<Main title="About page">
			<p>About</p>
			<button onClick={handleBack}>Go back to home</button>
		</Main>
	);
}