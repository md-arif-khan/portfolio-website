import React from 'react';

const Project = ({project}) => {
    const {image,name}=project
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl   border border-[#64FFDA]">
  <figure><img  className='h-48' src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    
    <div className="card-actions justify-end">
    <button className="btn border-none  bg-[#64FFDA]">Details</button>
    </div>
  </div>
</div>
    );
};

export default Project;