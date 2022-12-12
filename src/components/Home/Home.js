import React from 'react';
import Contact from '../Contact/Contact';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';

const Home = () => {
	return (
		<div className='bg-[#0A192F]'>
			
			<Header></Header>
			<Projects></Projects>
			<Contact></Contact>
		</div>
	);
};

export default Home;