'use client';

import { motion, Variants } from 'framer-motion';

import ProjectCard from '@/components/ProjectCard';
import { Project } from '@/types';

const container: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const ProjectsList = ({ projects }: { projects: Project[] }) => (
  <motion.div
    variants={container}
    initial="hidden"
    animate="visible"
  >
    {projects.map((project, index) => (
      <ProjectCard key={project.slug} project={project} index={index + 1} />
    ))}
  </motion.div>
);

export default ProjectsList;
