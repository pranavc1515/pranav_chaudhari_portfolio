'use client';

import Link from 'next/link';
import { VscArrowRight, VscGithub, VscMail, VscCode } from 'react-icons/vsc';

import DownloadResume from '@/components/DownloadResume';
import styles from '@/styles/HomePage.module.css';

const techStack = ['Python', 'LangChain', 'RAG', 'OpenSearch', 'React.js', 'FastAPI', 'TypeScript', 'Vue.js'];

const stats = [
  { number: '4+', label: 'Years Exp.' },
  { number: '4', label: 'Companies' },
  { number: '15+', label: 'Certifications' },
  { number: '∞', label: 'Coffee' },
];

export default function HomePage() {
  return (
    <div className={styles.page}>
      {/* Animated background grid */}
      <div className={styles.bgGrid} aria-hidden="true" />
      <div className={styles.bgGlow} aria-hidden="true" />

      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.header}>
            <div className={styles.icon}>
              <VscCode size={28} />
            </div>
            <span className={styles.statusBadge}>
              <span className={styles.statusDot} />
              Open to Work
            </span>
          </div>

          <div className={styles.intro}>
            <p className={styles.greeting}>Hello, I&apos;m</p>

            <h1 className={styles.name}>Pranav Chaudhari</h1>

            <div className={styles.roleWrap}>
              <p className={styles.role}>AI Software Engineer</p>
            </div>

            <div className={styles.divider} />

            <p className={styles.description}>
              Building production AI systems — RAG pipelines, LLM integrations, agent workflows, and
              semantic search. 4+ years shipping full-stack web applications and GenAI products at scale.
            </p>
          </div>

          {/* Tech stack pills */}
          <div className={styles.techStack}>
            {techStack.map((tech, i) => (
              <span
                key={tech}
                className={styles.techPill}
                style={{ animationDelay: `${i * 0.07}s` }}
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Stats row */}
          <div className={styles.statsRow}>
            {stats.map((s) => (
              <div key={s.label} className={styles.statItem}>
                <span className={styles.statNumber}>{s.number}</span>
                <span className={styles.statLabel}>{s.label}</span>
              </div>
            ))}
          </div>

          {/* CTA Actions */}
          <div className={styles.actions}>
            <Link href="/projects" className={styles.primaryAction}>
              <span>View Projects</span>
              <VscArrowRight size={16} />
            </Link>

            <Link href="/about" className={styles.secondaryAction}>
              <span>About Me</span>
            </Link>

            <DownloadResume variant="outline" size="md" />
          </div>

          {/* Social Links */}
          <div className={styles.links}>
            <a
              href="https://github.com/pranavc1515"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              <VscGithub size={15} />
              <span>GitHub</span>
            </a>

            <span className={styles.linkSeparator}>/</span>

            <a
              href="https://www.linkedin.com/in/thepranavchaudhari"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              <span>LinkedIn</span>
            </a>

            <span className={styles.linkSeparator}>/</span>

            <Link href="/contact" className={styles.link}>
              <VscMail size={15} />
              <span>Contact</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
