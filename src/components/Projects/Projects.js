import React from 'react';
import image1 from  '../../images/project1.png'
import image2 from  '../../images/project3.png'
import image3 from  '../../images/project4.png'
import Project from './Project';
const Projects = () => {
   const projectDetails=[
         {
          id:1,
          name:'Whole Sale',
          image:image1,

         },
         {
          id:2,
          name:'Carrer Plus',
          image:image2,

         },
         {
          id:3,
          name:'Holy Tour',
          image:image3,

         },
   ]
    return (
       <div className='max-w-7xl mx-auto pb-6'>
        <h1 className='text-center text-3xl font-bold py-6 text-[#64FFDA]'>PROJECTS</h1>
        <div className='md:grid-cols-2 grid-cols-1 lg:grid-cols-3 grid'>
             {
              projectDetails.map(project=><Project  project={project}></Project>)
             }
        </div>
       </div>
    );
};

export default Projects;