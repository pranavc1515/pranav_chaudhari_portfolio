'use client';

import Link from 'next/link';
import { VscArrowRight, VscGithub, VscMail, VscCode } from 'react-icons/vsc';

import styles from '@/styles/HomePage.module.css';

export default function HomePage() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.header}>
            <div className={styles.icon}>
              <VscCode size={32} />
            </div>
          </div>

          <div className={styles.intro}>
            <p className={styles.greeting}>Hello, I&apos;m</p>

            <h1 className={styles.name}>Pranav Chaudhari</h1>

            <p className={styles.role}>AI Software Engineer</p>

            <div className={styles.divider} />

            <p className={styles.description}>
              Building production AI systems — RAG pipelines, LLM integrations, agent workflows, and
              semantic search. 4+ years shipping full-stack web applications and GenAI products at scale.
            </p>
          </div>

          <div className={styles.actions}>
            <Link href="/projects" className={styles.primaryAction}>
              <span>View Projects</span>
              <VscArrowRight size={18} />
            </Link>

            <Link href="/about" className={styles.secondaryAction}>
              <span>Learn More</span>
            </Link>
          </div>

          <div className={styles.links}>
            <a
              href="https://github.com/pranavc1515"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              <VscGithub size={16} />
              <span>GitHub</span>
            </a>

            <span className={styles.linkSeparator}>/</span>

            <Link href="/contact" className={styles.link}>
              <VscMail size={16} />
              <span>Contact</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
