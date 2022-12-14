import React from "react";
import developer from '../../images/developer.json'
import html from '../../images/html.json'
import js from '../../images/js.json'
import node from '../../images/node.json'
import react from '../../images/react.json'
import mongo from '../../images/mongo.json'
import firebase from '../../images/firebase.json'
import github from '../../images/github.json'
import css from '../../images/css.json'
import Lottie from "lottie-react";
const Skills = () => {
  return (
    <div>
   
      <section className="dark:bg-gray-800 dark:text-gray-100">
	<div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
		<div className="flex items-center justify-center p-8 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-80 xl:h-96 2xl:h-128">
			<Lottie className="h-[500px]" animationData={developer}></Lottie>
		</div>
		<div className="flex-col flex justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
			<h1 className="text-3xl text-white font-bold leading-none sm:text-4xl">
				SKILLS
			</h1>
			
			<div className="grid grid-cols-4 space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
             <Lottie className="" animationData={html}></Lottie>
            <Lottie className="" animationData={js}></Lottie>
            <Lottie className="" animationData={react}></Lottie>
            <Lottie className="" animationData={node}></Lottie>
           
            <Lottie className="" animationData={firebase}></Lottie>  
            <Lottie className="" animationData={mongo}></Lottie>           
             
            <Lottie className="" animationData={css}></Lottie>  
            <Lottie className="" animationData={github}></Lottie>  
         
			</div>
		</div>
	</div>
</section>
    </div>
  );
};

export default Skills;
