import React from 'react';
import { useLoaderData } from 'react-router-dom';
import {useLocation} from 'react-router-dom';
const Details = (props) => {
    const location = useLocation();

    const {picture,image2,image3,name,dec,facilities,live,githubClient,githubServer,technology}=location.state
    
    return (
        <div className='bg-[#0A192F] pt-8'>
            <div class="py-6 sm:py-8 lg:py-12">
  <div class="max-w-screen-lg px-4 md:px-8 mx-auto">
    <div class="grid md:grid-cols-2 gap-8">
    
      <div class="space-y-4">
        <div class="bg-gray-100  rounded-lg overflow-hidden relative">
          <img src={picture} loading="lazy" alt="Photo by Himanshu Dewangan" class="w-full h-full object-cover object-center" />

          
        </div>

        <div class="grid grid-cols-2 gap-4">
          <div class="bg-gray-100 rounded-lg overflow-hidden">
            <img src={image2} loading="lazy" alt="Photo by Himanshu Dewangan" class="w-full h-48 object-cover object-center" />
          </div>

          <div class="bg-gray-100 rounded-lg overflow-hidden">
            <img src={image3} class="w-full h-48 object-cover object-center" />
          </div>
        </div>
      </div>
     

     
      <div class="md:py-8">
       
        <div class="mb-2 md:mb-3">
         
          <h2 class="text-white text-2xl lg:text-3xl font-bold">{name}</h2>
        </div>
        

      
       
       

      
        <div class="mb-4 md:mb-6">
         

          <div class="flex flex-wrap mb-4 gap-2">
            
          <button className="btn btn-outline btn-success"><a href={live}>Live Link</a></button>
          <button className="btn btn-outline btn-success"><a href={githubClient}>GitHub Client Code</a></button>
          <button className="btn btn-outline btn-success"><a href={githubServer}>GitHub Server Code</a></button>
          </div>
          <p className='text-white'><span className='font-bold'>Technology</span>: {technology}</p>
        </div>
    
        <div class="mt-8 md:mt-16 lg:mt-6">
          <div class=" text-lg font-semibold mb-3 text-white">Description</div>
            <div>
                {
                    facilities.map(p=><li className='text-white'>{p}</li>)
                }
            </div>
          <p class="text-gray-100 mt-8">
            {dec}
          </p>
        </div>
      
      </div>
     
    </div>
  </div>
</div>
        </div>
    );
};

export default Details;






