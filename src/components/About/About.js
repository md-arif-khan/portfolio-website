import React from 'react';
import developer from '../../images/developer.json'
import Lottie from "lottie-react";
import arifkhan from '../../images/arif.jpg'
import Skills from '../Skills/Skills';
const About = () => {
    return (
        <div class="bg-[#0A192F] py-6 sm:py-8 lg:py-12 ">
  <div class="px-4 md:px-8 mx-auto mb-8 max-w-7xl mx-auto">
    <div class="md:h-80 flex flex-col sm:flex-row bg-gray-200 rounded-lg overflow-hidden">
     
      <div class="w-full sm:w-1/2 lg:w-2/5 h-48 sm:h-auto order-first sm:order-none bg-gray-300">
        <img src={arifkhan} loading="lazy" alt="Photo by Andras Vas" class="w-full h-full object-cover object-center" />
      </div>
    

      
      <div class="w-full border text-white bg-[#0A192F] sm:w-1/2 lg:w-3/5 flex flex-col p-4 sm:p-8">
        <h2 class="text-white text-xl md:text-2xl lg:text-4xl font-bold mb-1 text-center lg:text-left ">I'am Arif Khan</h2>
		<p className='lg:text-lg text-md text-center lg:text-left font-bold mb-2'>Front End Web Developer</p>
        <p class=" text-white mb-8">A self-motivated and enthusiastic web developer with a deep interest in JavaScript. To work in the Software industry with modern web technologies of different local & multinational Software/IT agencies of Bangladesh and grow rapidly with increasing responsibilities.</p>

             </div>
    
    </div>
  </div>
  
  <Skills></Skills>
</div>
    );
};

export default About;