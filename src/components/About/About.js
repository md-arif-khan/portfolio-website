import React from 'react';
import developer from '../../images/FB_IMG_15934968832606380-removebg-preview-removebg-preview.jpg'
import Lottie from "lottie-react";
import arifkhan from '../../images/arif.jpg'
import Skills from '../Skills/Skills';
const About = () => {
    return (
  //       <div class="bg-[#0A192F] py-12 sm:py-8 lg:py-24 ">
  // <div class="px-4 md:px-8 mx-auto mb-8 max-w-7xl mx-auto">
  //   <div class="md:h-80 flex flex-col sm:flex-row bg-gray-200 rounded-lg overflow-hidden">
     
  //     <div class="w-full sm:w-1/2 lg:w-2/5 h-48 sm:h-auto order-first sm:order-none bg-gray-300">
  //       <img src={arifkhan} loading="lazy" alt="Photo by Andras Vas" class="w-full h-full object-cover object-center" />
  //     </div>
    

      
  //     <div class="w-full border text-white bg-[#0A192F] sm:w-1/2 lg:w-3/5 flex flex-col p-4 sm:p-8">
  //       <h2 class="text-white text-xl md:text-2xl lg:text-4xl font-bold mb-1 text-center lg:text-left ">I'am Arif Khan</h2>
	// 	<p className='lg:text-lg text-md text-center lg:text-left font-bold mb-2'>Front End Web Developer</p>
  //       <p class=" text-white mb-8">A self-motivated and enthusiastic web developer with a deep interest in JavaScript. To work in the Software industry with modern web technologies of different local & multinational Software/IT agencies of Bangladesh and grow rapidly with increasing responsibilities.</p>

  //            </div>
    
  //   </div>
  // </div>
  
  
  //       </div>
  <section class="bg-white dark:bg-gray-900">
    <div class="max-w-6xl px-6 py-10 mx-auto">
        <p class="text-xl font-medium text-blue-500 ">About Myself</p>

       

        <main class="relative z-20 w-full mt-8 md:flex md:items-center xl:mt-12">
            <div class="absolute w-full bg-blue-600 -z-10 md:h-96 rounded-2xl"></div>
            
            <div class="w-full p-6 bg-blue-600 md:flex md:items-center rounded-2xl md:bg-transparent md:p-0 lg:px-12 md:justify-evenly">
                <img class="h-24 w-24 md:mx-6 rounded-full object-cover shadow-md md:h-[32rem] md:w-80 lg:h-[36rem] lg:w-[26rem] md:rounded-2xl" src={developer} alt="client photo" />
                
                <div class="mt-2 md:mx-6">
                    <div>
                        <p class="text-xl font-medium tracking-tight text-white">Md Arif Khan</p>
                        <p class="text-blue-200 ">Full Stack Developer</p>
                    </div>

                    <p class="mt-4 text-lg leading-relaxed text-white md:text-xl"> “I am a web developer. I came this way because of my love for programming. So, I decided to learn about the web and how it works. In the last two years, I have learned many technologies about web development. Technologies I have learned are JavaScript, ReactJs, NodeJs, MongoDB, Express Js, Firebase Authentication, CSS, Tailwind CSS, Bootstrap etc. Now I dedicate myself to learning backend development. Also I am trying to learn new technology. Day by day I am trying to improve my skills.”.</p>
                    
                   
                </div>
            </div>
        </main>
    </div>
</section>
    );
};

export default About;