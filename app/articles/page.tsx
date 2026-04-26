import { Metadata } from 'next';
import { VscShield, VscLinkExternal } from 'react-icons/vsc';

import styles from '@/styles/ArticlesPage.module.css';
import certStyles from '@/styles/CertificationsPage.module.css';

export const metadata: Metadata = {
  title: 'Certifications',
};

const certifications = [
  {
    name: 'IBM AI Product Manager Professional Certificate',
    issuer: 'IBM',
    platform: 'Coursera',
    date: 'Mar 2026',
    credentialId: 'VM0Z689O87H9',
    skills: ['Product Management', 'Product Strategy', 'Generative AI', 'Prompt Engineering', 'AI Product Development'],
    description:
      'Covered AI product management fundamentals, generative AI, prompt engineering, and end-to-end product development. Hands-on experience with ChatGPT and DALL·E in real-world use cases.',
    color: '#0062ff',
  },
  {
    name: 'Google Project Management Professional Certificate',
    issuer: 'Google',
    platform: 'Coursera',
    date: 'Mar 2026',
    credentialId: '29RT479K27EL',
    skills: ['Agile Project Management', 'Scrum', 'Stakeholder Communication', 'Risk Management', 'Jira', 'Asana'],
    description:
      'Hands-on experience in Agile & Scrum methodologies, project planning, stakeholder management, risk management, and project lifecycle management.',
    color: '#4285f4',
  },
  {
    name: 'ServiceNow IT Leadership Professional Certificate',
    issuer: 'ServiceNow',
    platform: 'ServiceNow',
    date: 'Nov 2024',
    credentialId: 'c073f5c8f0ec',
    skills: ['IT Project & Program Management', 'IT Architectures', 'IT Strategic Planning'],
    description:
      'Comprehensive program covering IT leadership, architecture, strategic planning, and project program management.',
    color: '#62d84e',
  },
  {
    name: 'Atlassian Agile Project Management Professional Certificate',
    issuer: 'Atlassian',
    platform: 'Atlassian',
    date: 'Aug 2024',
    credentialId: '913d67f732bc',
    skills: ['Agile Project Management', 'Jira', 'Scrum Frameworks', 'Kanban'],
    description:
      'Deep understanding of Agile methodologies, Scrum frameworks, and project management best practices with hands-on Jira experience.',
    color: '#0052cc',
  },
  {
    name: 'HackerRank Software Engineer Certification',
    issuer: 'HackerRank',
    platform: 'HackerRank',
    date: 'Oct 2024',
    credentialId: '0b99c4e79a8b',
    skills: ['Problem Solving', 'SQL', 'REST APIs', 'Data Structures'],
    description:
      'Validates core software engineering skills including problem solving, SQL, and REST API design and implementation.',
    color: '#2ec866',
  },
  {
    name: 'HackerRank Frontend Developer (React) Certification',
    issuer: 'HackerRank',
    platform: 'HackerRank',
    date: 'Oct 2024',
    credentialId: '0b99c4e79a8b',
    skills: ['React.js', 'JavaScript', 'CSS', 'Front-end Coding'],
    description:
      'Certifies proficiency in React.js, JavaScript, and CSS for building modern, responsive frontend applications.',
    color: '#2ec866',
  },
  {
    name: 'SQL (Advanced) Certificate',
    issuer: 'HackerRank',
    platform: 'HackerRank',
    date: 'Oct 2024',
    credentialId: '683b59b7ffb7',
    skills: ['MySQL', 'SQL', 'Advanced Queries', 'Database Design'],
    description:
      'Demonstrates advanced SQL skills including complex queries, joins, window functions, and database optimization.',
    color: '#2ec866',
  },
  {
    name: 'Problem Solving (Intermediate) Certificate',
    issuer: 'HackerRank',
    platform: 'HackerRank',
    date: 'Nov 2024',
    credentialId: 'ba2c8e79239f',
    skills: ['Problem Solving', 'C#', 'Data Structures', 'Algorithms'],
    description:
      'Validates intermediate-level algorithmic problem-solving and data structures proficiency.',
    color: '#2ec866',
  },
  {
    name: 'JavaScript (Intermediate) Certificate',
    issuer: 'HackerRank',
    platform: 'HackerRank',
    date: 'Nov 2024',
    credentialId: 'db4134221d99',
    skills: ['JavaScript', 'Data Structures', 'ES6+', 'Closures & Promises'],
    description:
      'Certifies intermediate JavaScript proficiency including ES6+ features, closures, promises, and data structures.',
    color: '#2ec866',
  },
  {
    name: 'Career Essentials in GitHub Professional Certificate',
    issuer: 'GitHub',
    platform: 'LinkedIn Learning',
    date: 'Mar 2024',
    credentialId: '91d078da4cc9',
    skills: ['GitHub', 'Version Control', 'CI/CD', 'Collaboration'],
    description:
      'Covers GitHub fundamentals, version control best practices, CI/CD workflows, and collaborative development.',
    color: '#f0f6fc',
  },
];

export default function CertificationsPage() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.headerMain}>
            <div className={styles.iconWrapper}>
              <VscShield className={styles.icon} size={24} />
            </div>

            <div className={styles.headerContent}>
              <div className={styles.headerTop}>
                <h1 className={styles.title}>Certifications</h1>
                <div className={styles.stats}>
                  <div className={styles.stat}>
                    <span>{certifications.length} credentials</span>
                  </div>
                  <div className={styles.divider} />
                  <div className={styles.stat}>
                    <span>IBM · Google · HackerRank · Atlassian</span>
                  </div>
                </div>
              </div>

              <p className={styles.subtitle}>
                Professional certifications spanning AI product management, agile methodologies,
                software engineering, and full-stack development.
              </p>
            </div>
          </div>

          <a
            href="https://www.linkedin.com/in/thepranavchaudhari"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.profileLink}
          >
            <span>LinkedIn Profile</span>
            <VscLinkExternal size={14} />
          </a>
        </header>

        <div className={certStyles.certList}>
          {certifications.map((cert, index) => (
            <div key={index} className={certStyles.certCard}>
              <div className={certStyles.certLeft}>
                <div
                  className={certStyles.certBadge}
                  style={{ background: `${cert.color}18`, borderColor: `${cert.color}30` }}
                >
                  <span style={{ color: cert.color, fontSize: '11px', fontWeight: 700 }}>
                    {cert.issuer.slice(0, 2).toUpperCase()}
                  </span>
                </div>
                <div className={certStyles.certMeta}>
                  <span className={certStyles.certDate}>{cert.date}</span>
                  <span className={certStyles.certPlatform}>{cert.platform}</span>
                </div>
              </div>

              <div className={certStyles.certBody}>
                <h3 className={certStyles.certName}>{cert.name}</h3>
                <p className={certStyles.certIssuer}>{cert.issuer}</p>
                <p className={certStyles.certDescription}>{cert.description}</p>
                <div className={certStyles.certSkills}>
                  {cert.skills.map((skill) => (
                    <span key={skill} className={certStyles.certSkillTag}>{skill}</span>
                  ))}
                </div>
                <span className={certStyles.certId}>ID: {cert.credentialId}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
