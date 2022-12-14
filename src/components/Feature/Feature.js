import React from 'react';
import profile1 from '../../images/arif.jpg'
import profile2 from '../../images/FB_IMG_15934968832606380-removebg-preview-removebg-preview.jpg'
const Feature = () => {
    return (
        <div>
           <section class="py-10 bg-white sm:py-16 lg:py-24">
    <div class="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
        <div class="grid items-center md:grid-cols-2 gap-y-10 md:gap-x-20">
            <div class="pr-12 sm:pr-0">
                <div class="relative max-w-xs mb-12">
                    <img class="object-bottom rounded-md" src={profile2} alt="" />

                    <img class="absolute origin-bottom-right scale-75 rounded-md -bottom-12 -right-12" src={profile1} alt="" />
                </div>
            </div>

            <div>
                <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Grow Your Skill with Web Development.</h2>
                <p class="mt-4 text-base leading-relaxed text-gray-600">Preparation for your career in tech begins here with free resources! Gain access to free skill-building resources with Microsoft's Learn Student Hub. Become a Web Developer. Learn Career Connect. Learn about Tech Careers. Learn to Build Apps. Learn Programing.</p>
            </div>
        </div>
    </div>
</section>

        </div>
    );
};

export default Feature;