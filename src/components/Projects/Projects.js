import React, { useEffect, useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import Project from './Project';
const Projects = () => {
   const [details,setDetails]=useState([])
   const navigate = useNavigate();
   useEffect(()=>{
      fetch('data.json')
      .then(res=>res.json())
      .then(data=>setDetails(data))
   },[])

   const handleData=project=>{
      navigate('/details',{state:project});
   }
   
    return (
       <div className='max-w-7xl mx-auto pb-6'>
        <h1 className='text-center text-3xl font-bold py-6 text-[#64FFDA]'>PROJECTS</h1>
        <div className='md:grid-cols-2 grid-cols-1 lg:grid-cols-3 grid'>
             {
              details.map(project=><Project handleData={handleData}  project={project}></Project>)
             }
        </div>
       </div>
    );
};

export default Projects;