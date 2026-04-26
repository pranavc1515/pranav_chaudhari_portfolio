'use client';

import { VscGithub, VscMail, VscLinkExternal } from 'react-icons/vsc';
import Link from 'next/link';

import AnimatedSection from '@/components/AnimatedSection';
import DownloadResume from '@/components/DownloadResume';
import styles from '@/styles/AboutPage.module.css';

const experiences = [
  {
    period: 'Mar 2025 – Present',
    role: 'Software Developer (AI / Full Stack)',
    company: 'Kaitongo',
    location: 'Toronto, Ontario, Canada · Remote',
    type: 'ai',
    bullets: [
      'Built RAG pipelines for document retrieval and context-aware LLM response generation',
      'Developed agent-based workflows for automated research and multi-step reasoning',
      'Engineered semantic search with OpenSearch + vector embeddings, query re-ranking, and relevance tuning',
      'Integrated LangChain for chains, tools, and memory management across AI features',
      'Shipped AI-generated content recommendations using Gemini API with prompt optimization',
      'Implemented SSE streaming responses for real-time AI interactions',
      'Built FastAPI backends for model integration and API orchestration',
    ],
    tech: ['Python', 'FastAPI', 'LangChain', 'OpenSearch', 'Gemini API', 'React.js', 'TypeScript', 'Tailwind CSS', 'Docker', 'AWS'],
  },
  {
    period: 'Mar 2024 – Mar 2025',
    role: 'Frontend Developer',
    company: 'Avathi',
    location: 'Bengaluru, Karnataka, India · On-site',
    type: 'fullstack',
    bullets: [
      'Developed the customer-facing travel platform using Vue.js 3 and Nuxt.js',
      'Built a multi-property booking engine integrated with Channex API and HyperGuest API',
      'Implemented real-time inventory sync, rate management, and reservation processing',
      'Developed a conversational AI chatbot for trip planning and booking assistance',
      'Optimized performance via code splitting and lazy loading — reducing page load times by 30%',
    ],
    tech: ['Vue.js 3', 'Nuxt.js', 'TypeScript', 'Tailwind CSS', 'Channex API', 'HyperGuest API', 'Laravel'],
  },
  {
    period: 'Jan 2023 – Mar 2024',
    role: 'Software Developer',
    company: 'Metapercept Technology Services',
    location: 'Pune, Maharashtra, India · On-site',
    type: 'fullstack',
    bullets: [
      'Built full-stack features on a document migration SaaS across Vue.js, React.js, and Node.js',
      'Implemented complex state management with Vuex and Redux across multi-module workflows',
      'Built REST APIs with Node.js, Express.js, and MongoDB with authentication flows',
      'Worked on document parsing and content-processing pipelines (foundational to modern RAG)',
      'Improved team delivery velocity by 20% through Jira-based workflow optimization',
    ],
    tech: ['Vue.js', 'React.js', 'Node.js', 'Express.js', 'MongoDB', 'Redux', 'Vuex', 'Tailwind CSS'],
  },
  {
    period: 'Jan 2022 – Jan 2023',
    role: 'Full Stack Developer',
    company: 'Prism Infoways',
    location: 'Manesar, Haryana, India · Remote',
    type: 'fullstack',
    bullets: [
      'Built scalable MERN stack web applications with responsive React.js and Vue.js interfaces',
      'Developed Node.js / Express backend services and REST APIs',
      'Optimized data transmission, reducing response times by 30%',
      'Deployed and scaled applications on AWS (S3, EC2) for production traffic',
    ],
    tech: ['React.js', 'Vue.js', 'Node.js', 'Express.js', 'MongoDB', 'AWS (S3, EC2)', 'Redux'],
  },
];

const skillGroups = [
  {
    label: 'AI Engineering',
    skills: ['LLMs (Gemini, GPT, Claude)', 'RAG Pipelines', 'LangChain', 'AI Agents', 'Vector Search', 'OpenSearch', 'Prompt Engineering', 'Streaming SSE', 'Conversational AI'],
  },
  {
    label: 'Frontend',
    skills: ['React.js', 'Next.js', 'Vue.js 3', 'Nuxt.js', 'TypeScript', 'Tailwind CSS', 'Redux', 'Vuex'],
  },
  {
    label: 'Backend',
    skills: ['Python', 'FastAPI', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs'],
  },
  {
    label: 'DevOps & Tools',
    skills: ['AWS (Lambda, EC2, S3)', 'Docker', 'Git', 'CI/CD', 'Vercel', 'Jira'],
  },
];

const certifications = [
  { name: 'IBM AI Product Manager Professional Certificate', issuer: 'IBM · Coursera', date: 'Mar 2026', url: 'https://www.coursera.org/account/accomplishments/professional-cert/VM0Z689O87H9' },
  { name: 'Google Project Management Professional Certificate', issuer: 'Google · Coursera', date: 'Mar 2026', url: 'https://www.coursera.org/account/accomplishments/specialization/29RT479K27EL' },
  { name: 'ServiceNow IT Leadership Professional Certificate', issuer: 'ServiceNow', date: 'Nov 2024', url: 'https://www.linkedin.com/learning/certificates/c073f5c8f0ec18cca09bbe16ab2ce4136536b9bddd4d733936d2798893943fef' },
  { name: 'Atlassian Agile Project Management Professional Certificate', issuer: 'Atlassian', date: 'Aug 2024', url: 'https://www.linkedin.com/learning/certificates/913d67f732bc13296df806f5ae5e09e71964c9084e00219cbd319bd593bf8bc6' },
  { name: 'HackerRank Software Engineer Certification', issuer: 'HackerRank', date: 'Oct 2024', url: 'https://www.hackerrank.com/certificates/iframe/0b99c4e79a8b' },
  { name: 'HackerRank Frontend Developer (React) Certification', issuer: 'HackerRank / CutShort', date: 'Oct 2024', url: 'https://cutshort.io/certificate/75241' },
  { name: 'SQL (Advanced) Certificate', issuer: 'HackerRank', date: 'Oct 2024', url: 'https://www.hackerrank.com/certificates/iframe/683b59b7ffb7' },
  { name: 'Problem Solving (Intermediate) Certificate', issuer: 'HackerRank', date: 'Nov 2024', url: 'https://www.hackerrank.com/certificates/iframe/ba2c8e79239f' },
  { name: 'JavaScript (Intermediate) Certificate', issuer: 'HackerRank', date: 'Nov 2024', url: 'https://www.hackerrank.com/certificates/db4134221d99' },
  { name: 'Career Essentials in GitHub Professional Certificate', issuer: 'GitHub', date: 'Mar 2024', url: 'https://www.linkedin.com/learning/certificates/91d078da4cc97bf429a1c53e72f3ec7935d5cef4924225b38fe771b202ccc91a' },
];

const AboutPage = () => {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        {/* Header */}
        <header className={styles.header}>
          <div className={styles.headerContent}>
            <div className={styles.avatar}>PC</div>
            <div className={styles.headerText}>
              <h1 className={styles.name}>Pranav Chaudhari</h1>
              <p className={styles.role}>AI Software Engineer @ Kaitongo</p>
              <div className={styles.location}>
                <span className={styles.dot} />
                Bengaluru, Karnataka, India · Open to Remote
              </div>
            </div>
          </div>

          <div className={styles.headerActions}>
            <a
              href="https://github.com/pranavc1515"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.iconButton}
            >
              <VscGithub size={20} />
            </a>
            <Link href="/contact" className={styles.iconButton}>
              <VscMail size={20} />
            </Link>
          </div>
        </header>

        <div className={styles.content}>
          {/* About */}
          <AnimatedSection>
            <section className={styles.section}>
              <div className={styles.sectionHeader}>
                <span className={styles.sectionNumber}>01</span>
                <h2 className={styles.sectionTitle}>About</h2>
              </div>

              <div className={styles.sectionBody}>
                <p className={styles.paragraph}>
                  AI Engineer and Full Stack Developer with 4+ years of experience shipping production
                  web applications and AI-powered products. Currently building GenAI features at
                  Kaitongo — RAG pipelines, agent-based workflows, semantic search, and LLM integrations
                  for a B2B intelligence platform.
                </p>
                <p className={styles.paragraph}>
                  My AI journey started with conversational AI (an AI-powered travel chatbot at Avathi),
                  grew through document-processing pipelines at Metapercept (a foundation of today&apos;s RAG
                  systems), and is now focused deeply on building production LLM systems at Kaitongo.
                </p>
                <p className={styles.paragraph}>
                  Particularly interested in RAG systems, agent architectures, and teams building tooling
                  that makes AI actually work in production — not just demos.
                </p>
              </div>
            </section>
          </AnimatedSection>

          {/* Experience */}
          <AnimatedSection delay={50}>
            <section className={styles.section}>
              <div className={styles.sectionHeader}>
                <span className={styles.sectionNumber}>02</span>
                <h2 className={styles.sectionTitle}>Experience</h2>
              </div>

              <div className={styles.sectionBody}>
                {experiences.map((exp, i) => (
                  <AnimatedSection key={i} delay={i * 60}>
                    <div className={styles.experienceCard}>
                      <div className={styles.expMeta}>
                        <span className={styles.expPeriod}>{exp.period}</span>
                        <span className={styles.expLocation}>{exp.location}</span>
                      </div>
                      <h3 className={styles.expRole}>{exp.role}</h3>
                      <p className={styles.expCompany}>{exp.company}</p>
                      <ul className={styles.expList}>
                        {exp.bullets.map((b, j) => (
                          <li key={j}>{b}</li>
                        ))}
                      </ul>
                      <div className={styles.expTech}>
                        {exp.tech.map((t) => (
                          <span key={t} className={styles.techTag}>{t}</span>
                        ))}
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </section>
          </AnimatedSection>

          {/* Skills */}
          <AnimatedSection delay={80}>
            <section className={styles.section}>
              <div className={styles.sectionHeader}>
                <span className={styles.sectionNumber}>03</span>
                <h2 className={styles.sectionTitle}>Skills</h2>
              </div>

              <div className={styles.sectionBody}>
                <div className={styles.skillsGrid}>
                  {skillGroups.map((group, i) => (
                    <AnimatedSection key={group.label} delay={i * 60}>
                      <div className={styles.skillCategory}>
                        <h4 className={styles.skillTitle}>{group.label}</h4>
                        <div className={styles.skillTags}>
                          {group.skills.map((skill) => (
                            <span key={skill} className={styles.skillTag}>{skill}</span>
                          ))}
                        </div>
                      </div>
                    </AnimatedSection>
                  ))}
                </div>
              </div>
            </section>
          </AnimatedSection>

          {/* Education */}
          <AnimatedSection delay={60}>
            <section className={styles.section}>
              <div className={styles.sectionHeader}>
                <span className={styles.sectionNumber}>04</span>
                <h2 className={styles.sectionTitle}>Education</h2>
              </div>

              <div className={styles.sectionBody}>
                <div className={styles.experienceCard}>
                  <div className={styles.expMeta}>
                    <span className={styles.expPeriod}>Jan 2026 – Jan 2028</span>
                  </div>
                  <h3 className={styles.expRole}>Master of Business Administration — Marketing</h3>
                  <p className={styles.expCompany}>SVKM&apos;s Narsee Monjee Institute of Management Studies (NMIMS)</p>
                  <p className={styles.expDesc}>
                    Focusing on Product Strategy, Consumer Behavior, Growth Marketing, and Data-driven decision making.
                    Bridging software engineering and product management toward AI product leadership.
                  </p>
                </div>

                <div className={styles.experienceCard}>
                  <div className={styles.expMeta}>
                    <span className={styles.expPeriod}>Aug 2018 – Jul 2022</span>
                  </div>
                  <h3 className={styles.expRole}>Bachelor of Technology — Mechanical Engineering</h3>
                  <p className={styles.expCompany}>Rajiv Gandhi Proudyogiki Vishwavidyalaya · GPA: 7.80</p>
                </div>
              </div>
            </section>
          </AnimatedSection>

          {/* Certifications */}
          <AnimatedSection delay={70}>
            <section className={styles.section}>
              <div className={styles.sectionHeader}>
                <span className={styles.sectionNumber}>05</span>
                <h2 className={styles.sectionTitle}>Certifications</h2>
              </div>

              <div className={styles.sectionBody}>
                <div className={styles.certGrid}>
                  {certifications.map((cert, i) => (
                    <a
                      key={i}
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.certCard}
                      style={{ animationDelay: `${i * 40}ms` }}
                    >
                      <div className={styles.certHeader}>
                        <span className={styles.certDate}>{cert.date}</span>
                        <VscLinkExternal size={10} className={styles.certExtIcon} />
                      </div>
                      <p className={styles.certName}>{cert.name}</p>
                      <p className={styles.certIssuer}>{cert.issuer}</p>
                    </a>
                  ))}
                </div>
                <Link href="/articles" className={styles.writingLink} style={{ marginTop: '16px', display: 'flex' }}>
                  <span>View all certifications →</span>
                </Link>
              </div>
            </section>
          </AnimatedSection>

          {/* Languages */}
          <AnimatedSection delay={60}>
            <section className={styles.section}>
              <div className={styles.sectionHeader}>
                <span className={styles.sectionNumber}>06</span>
                <h2 className={styles.sectionTitle}>Languages</h2>
              </div>

              <div className={styles.sectionBody}>
                <div className={styles.skillsGrid}>
                  <div className={styles.skillCategory}>
                    <h4 className={styles.skillTitle}>English</h4>
                    <div className={styles.skillTags}>
                      <span className={styles.skillTag}>Full Professional Proficiency</span>
                    </div>
                  </div>
                  <div className={styles.skillCategory}>
                    <h4 className={styles.skillTitle}>Hindi</h4>
                    <div className={styles.skillTags}>
                      <span className={styles.skillTag}>Full Professional Proficiency</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </AnimatedSection>
        </div>

        <footer className={styles.footer}>
          <div className={styles.footerActions}>
            <Link href="/projects" className={styles.footerLink}>
              View my projects →
            </Link>
            <DownloadResume variant="outline" size="sm" />
          </div>
        </footer>
      </div>
    </div>
  );
};

export default AboutPage;
