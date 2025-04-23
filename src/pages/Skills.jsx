import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Contact from './Contact';
import AnimatedSection from './AnimatedSection';

export default function Skills() {
  

  return (
    <motion.div className="p-8 bg-gray-900 text-white" initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}>
     <AnimatedSection direction="right">
    <div className="container mx-auto py-12 text-center ">
        <h1 className="text-6xl font-bold mb-2 relative opacity-30">
            My Skills
        </h1>
        <p className="text-gray-300 mb-12">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quod architecto mollitia non sint.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-0">
          <div>
            <span className='font-bold text-2xl text-red-500'>Html</span>
            <div className='flex gap-4 mt-2'>
            <span className='font-bold text-red-500'>90%</span>
          <div className='w-[90%] bg-gray-800 rounded-full h-2.5 mt-2 shadow-[0_0_15px_5px_rgba(255,0,0,0.4)] transition-shadow duration-300'>
            <div className='bg-red-500 h-2.5 rounded-full w-[90%]'></div>
          </div>
          </div>
          </div>
          <div>
            <span className='font-bold text-2xl text-blue-700'>Css</span>
            <div className='flex gap-4 mt-2'>
            <span className='font-bold text-blue-700'>80%</span>
          <div className='w-[90%] bg-gray-800 rounded-full h-2.5 mt-2 shadow-[0_0_15px_5px_rgba(0,0,255,0.4)] transition-shadow duration-300'>
            <div className='bg-blue-700 h-2.5 rounded-full w-[80%]'></div>
          </div>
          </div>
          </div>
          <div>
            <span className='font-bold text-2xl text-yellow-600'>Javascript</span>
            <div className='flex gap-4 mt-2'>
            <span className='font-bold text-yellow-600'>60%</span>
          <div className='w-[90%] bg-gray-800 rounded-full h-2.5 mt-2 shadow-[0_0_15px_5px_rgba(255,255,0,0.4)] transition-shadow duration-300'>
            <div className='bg-yellow-600 h-2.5 rounded-full w-[60%]'></div>
          </div>
          </div>
          </div>
          <div>
            <span className='font-bold text-2xl text-pink-600'>React</span>
            <div className='flex gap-4 mt-2'>
            <span className='font-bold text-pink-600'>70%</span>
          <div className='w-[90%] bg-gray-800 rounded-full h-2.5 mt-2 shadow-[0_0_15px_5px_rgba(255,105,180,0.4)] transition-shadow duration-300'>
            <div className='bg-pink-600 h-2.5 rounded-full w-[70%]'></div>
          </div>
          </div>
          </div>
          <div>
            <span className='font-bold text-2xl text-green-900'>Tailwind</span>
            <div className='flex gap-4 mt-2'>
            <span className='font-bold text-green-900'>80%</span>
          <div className='w-[90%] bg-gray-800 rounded-full h-2.5 mt-2 shadow-[0_0_15px_5px_rgba(0,128,0,0.4)] transition-shadow duration-300'>
            <div className='bg-green-900 h-2.5 rounded-full w-[80%]'></div>
          </div>
          </div>
          </div>
          <div>
            <span className='font-bold text-2xl text-orange-900'>Bootstrap</span>
            <div className='flex gap-4 mt-2'>
            <span className='font-bold text-orange-900'>80%</span>
          <div className='w-[90%] bg-gray-800 rounded-full h-2.5 mt-2 shadow-[0_0_15px_5px_rgba(255,83,73,0.4)] transition-shadow duration-300'>
            <div className='bg-orange-900 h-2.5 rounded-full w-[80%]'></div>
          </div>
          </div>
          </div>
        </div>
    </div>
    </AnimatedSection>
    </motion.div>
  );
}