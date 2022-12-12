import React from 'react';
import './Header.css'
import arif from '../../images/arif.jpg'
import Particle from '../Particles/Particle';

const Header = () => {
    return (
       <div>
          <Particle></Particle>
             <div className='bg-images-overly flex justify-center mx-2  items-center'>
            
            <div className=''>
          
                <div>
                <div className="avatar flex justify-center">
  <div className="w-32 rounded-full ring ring-[#64FFDA]  ring-offset-base-100 ring-offset-2">
    <img className='' src={arif} alt=''/>
  </div>
</div>
                   <h1 className='text-white font-bold md:text-6xl mt-4 text-6xl lg:text-8xl text-center'>ARIF KHAN</h1>
                   <h3 className='text-white md:text-3xl text-lg lg:text-4xl text-center mt-4'>MERN STACK & FRONT END WEB DEVELOPER</h3>
                <div className='flex justify-center mt-4'>
                
                <a href="resume-of-md-arif-khan.pdf" download={"resume-of-md-arif-khan.pdf"}>
                 <button className="btn btn-outline btn-success">Download Resume</button>
                </a>
                </div>
                </div>
                
            </div>
          
        </div>
        
       </div>
    );
};

export default Header;