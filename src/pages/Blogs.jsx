import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import BlogCard from '../components/BlogCard';
import Contact from './Contact';
import AnimatedSection from './AnimatedSection';
export default function Blogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch('/content.json')
      .then(res => res.json())
      .then(data => setBlogs(data.blogs));
  }, []);

  return (
    <motion.div className="p-8" initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
      <AnimatedSection direction="left">
      <div className='flex justify-center mt-16'>
        <h2 className='text-7xl font-bold opacity-30'>Blogs</h2>
      </div>
    
      
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-20">
                    <BlogCard
                        date="14"
                        month="JAN"
                        title="Prevent 75% of visitors from google analytics"
                        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt..."
                        imageUrl="/blog-1.jpg"
                    />
                    <BlogCard
                        date="14"
                        month="JAN"
                        title="Prevent 75% of visitors from google analytics"
                        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt..."
                        imageUrl="/blog-2.jpg"
                    />
                    <BlogCard
                        date="14"
                        month="JAN"
                        title="Prevent 75% of visitors from google analytics"
                        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt..."
                        imageUrl="/blog-3.jpg"
                    />
                    <BlogCard
                        date="14"
                        month="JAN"
                        title="Prevent 75% of visitors from google analytics"
                        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt..."
                        imageUrl="/blog-4.jpg"
                    />
                    <BlogCard
                        date="14"
                        month="JAN"
                        title="Prevent 75% of visitors from google analytics"
                        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt..."
                        imageUrl="/blog-5.jpg"
                    />
                    <BlogCard
                        date="14"
                        month="JAN"
                        title="Prevent 75% of visitors from google analytics"
                        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt..."
                        imageUrl="/blog-1.jpg"
                    />
                  
                </div>
                </AnimatedSection>
                
    </motion.div>
  );
}