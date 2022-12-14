import React from 'react';
import { Link } from 'react-router-dom';

const Project = ({project,handleData}) => {
    const {picture,name,id}=project
    console.log(id)
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl   border border-[#64FFDA]">
  <figure><img  className='h-48' src={picture} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    
    <div className="card-actions justify-end">
    <button onClick={()=>handleData(project)} className="btn border-none  bg-[#64FFDA]"><Link>Details</Link></button>
    </div>
  </div>
</div>
    );
};

export default Project;