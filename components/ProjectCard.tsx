'use client';

import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import { VscLinkExternal } from 'react-icons/vsc';

import { Project } from '@/types';

import styles from '@/styles/ProjectCard.module.css';

const cardVariants: Variants = {
  hidden: { opacity: 0, x: -16 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: [0.23, 1, 0.32, 1] },
  },
};

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <motion.a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.card}
      variants={cardVariants}
      whileHover={{
        x: 6,
        transition: { duration: 0.2, ease: 'easeOut' },
      }}
      whileTap={{ scale: 0.985 }}
    >
      <div className={styles.number}>
        <span>{String(index).padStart(2, '0')}</span>
      </div>

      <div className={styles.content}>
        <div className={styles.main}>
          <div className={styles.header}>
            <motion.div
              className={styles.logoWrapper}
              whileHover={{ scale: 1.12, rotate: 3, transition: { duration: 0.2 } }}
            >
              <Image
                src={project.logo}
                alt={`${project.title} logo`}
                width={18}
                height={18}
                className={styles.logo}
              />
            </motion.div>
            <h3 className={styles.title}>{project.title}</h3>
          </div>

          <p className={styles.description}>{project.description}</p>

          {project.tags && project.tags.length > 0 && (
            <div className={styles.tags}>
              {project.tags.map((tag) => (
                <span key={tag} className={styles.tag}>{tag}</span>
              ))}
            </div>
          )}
        </div>

        <div className={styles.action}>
          <span className={styles.link}>
            View on GitHub
            <VscLinkExternal size={12} />
          </span>
        </div>
      </div>
    </motion.a>
  );
};

export default ProjectCard;
