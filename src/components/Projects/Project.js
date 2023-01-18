import React from 'react';
import { Link } from 'react-router-dom';

const Project = ({project,handleData}) => {
    const {picture,name,id}=project
    console.log(id)
    return (
//         <div className="card card-compact mx-0 lg:mx-4 lg:mb-0 md:mb-0 mb-6  bg-base-100 shadow-xl   border border-[#64FFDA]">
//   <figure><img  className='h-48' src={picture} alt="Shoes" /></figure>
//   <div className="card-body">
//     <h2 className="card-title">{name}</h2>
    
//     <div className="card-actions justify-end">
//     <button onClick={()=>handleData(project)} className="btn border-none  bg-[#64FFDA]"><Link>Details</Link></button>
//     </div>
//   </div>
// </div>
<div class="overflow-hidden mx-4 bg-cover rounded-lg cursor-pointer h-80  my-4 lg:my-0 group"
                style={{
                  background: `url(${picture})`,
                 
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat'
                }}>
                <div
                    class="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
                    <h2 class="mt-4 text-2xl font-semibold text-white capitalize">{name}</h2>
                    <p onClick={()=>handleData(project)}  class="mt-2 text-lg tracking-wider text-blue-400 uppercase ">Details</p>
                   
                </div>
            </div>

    );
};

export default Project;