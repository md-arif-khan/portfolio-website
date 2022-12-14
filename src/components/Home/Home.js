import React from 'react';
import Contact from '../Contact/Contact';
import Feature from '../Feature/Feature';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';

const Home = () => {
	return (
		<div className='bg-[#0A192F]'>
			
			<Header></Header>
			<Projects></Projects>
			<Skills></Skills>
			<Feature></Feature>
			<Contact></Contact>
		</div>
	);
};

export default Home;