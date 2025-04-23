import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import AnimatedSection from './AnimatedSection';

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('/content.json')
      .then(res => res.json())
      .then(data => setProjects(data.projects));
  }, []);

  return (
    <motion.div
      className="px-4 sm:px-8 py-12 bg-blue-950"
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
    >
      <section id="work" data-scroll-index="3">
        <AnimatedSection direction="right">
          <div className="text-center">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold opacity-30 mb-12">
              Projects
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            <ProjectCard name="WorkFlow" src="/project.png" />
            <ProjectCard name="Furniro" src="/project 01.png" />
            <ProjectCard name="Vexa" src="/pt02.png" />
          </div>
        </AnimatedSection>
      </section>
    </motion.div>
  );
}
