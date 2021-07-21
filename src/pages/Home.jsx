import React from 'react';
import Footer from '../section/Footer';
import Hero from '../section/Hero';
import Library from '../section/Library';
import Plan from '../section/Plan';

const Home = () => {
	return (
		<React.Fragment>
			<Hero />
			<Library />
			<Plan />
			<Footer />
		</React.Fragment>
	);
};

export default Home;
