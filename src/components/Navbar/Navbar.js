import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
 <div  className=' bg-[#0a192fc5]'>
      <div className='max-w-7xl mx-auto'>
      <div className="navbar">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost text-white lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow text-[#64FFDA]  rounded-box w-52">
      <li><Link to='/'>Home</Link></li>
      
      <li><Link to='/about'>About</Link></li>
      <li><Link to="/blog">Blog</Link></li>
      </ul>
    </div>
    <Link to='/' className="btn btn-ghost font-bold  text-[#64FFDA] normal-case text-2xl">Arif Khan</Link>
  </div>
  <div className="navbar-end hidden lg:flex">
    <ul className="menu text-white menu-horizontal px-1">
      <li><Link to='/'>Home</Link></li>
      
      <li><Link to='/about'>About</Link></li>
      <li><Link to="/blog">Blog</Link></li>
    </ul>
  </div>
  
</div>
      </div>
 </div>
  );
};

export default Navbar;