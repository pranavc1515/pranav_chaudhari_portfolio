import { Metadata } from 'next';
import { VscShield, VscLinkExternal } from 'react-icons/vsc';

import CertificationsGrid, { Cert } from '@/components/CertificationsGrid';
import styles from '@/styles/ArticlesPage.module.css';

export const metadata: Metadata = {
  title: 'Certifications',
};

const certifications: Cert[] = [
  {
    name: 'IBM AI Product Manager Professional Certificate',
    issuer: 'IBM',
    platform: 'Coursera',
    date: 'Mar 2026',
    credentialId: 'VM0Z689O87H9',
    credentialUrl: 'https://www.coursera.org/account/accomplishments/professional-cert/VM0Z689O87H9',
    skills: ['Product Management', 'Product Strategy', 'Generative AI', 'Prompt Engineering', 'AI Product Development'],
    description: 'Covered AI product management fundamentals, generative AI, prompt engineering, and end-to-end product development. Hands-on experience with ChatGPT and DALL·E in real-world use cases.',
    color: '#4d8ef0',        /* IBM blue — readable on dark */
  },
  {
    name: 'Google Project Management Professional Certificate',
    issuer: 'Google',
    platform: 'Coursera',
    date: 'Mar 2026',
    credentialId: '29RT479K27EL',
    credentialUrl: 'https://www.coursera.org/account/accomplishments/specialization/29RT479K27EL',
    skills: ['Agile Project Management', 'Scrum', 'Stakeholder Communication', 'Risk Management', 'Jira', 'Asana'],
    description: 'Hands-on experience in Agile & Scrum methodologies, project planning, stakeholder management, risk management, and project lifecycle management.',
    color: '#5b9cf6',        /* Google blue */
  },
  {
    name: 'ServiceNow IT Leadership Professional Certificate',
    issuer: 'ServiceNow',
    platform: 'LinkedIn Learning',
    date: 'Nov 2024',
    credentialId: 'c073f5c8f0ec',
    credentialUrl: 'https://www.linkedin.com/learning/certificates/c073f5c8f0ec18cca09bbe16ab2ce4136536b9bddd4d733936d2798893943fef',
    skills: ['IT Project & Program Management', 'IT Architectures', 'IT Strategic Planning'],
    description: 'Comprehensive program covering IT leadership, architecture, strategic planning, and project program management.',
    color: '#62d84e',        /* ServiceNow green */
  },
  {
    name: 'Atlassian Agile Project Management Professional Certificate',
    issuer: 'Atlassian',
    platform: 'LinkedIn Learning',
    date: 'Aug 2024',
    credentialId: '913d67f732bc',
    credentialUrl: 'https://www.linkedin.com/learning/certificates/913d67f732bc13296df806f5ae5e09e71964c9084e00219cbd319bd593bf8bc6',
    skills: ['Agile Project Management', 'Jira', 'Scrum Frameworks', 'Kanban'],
    description: 'Deep understanding of Agile methodologies, Scrum frameworks, and project management best practices with hands-on Jira experience.',
    color: '#2684ff',        /* Atlassian brand blue */
  },
  {
    name: 'HackerRank Software Engineer Certification',
    issuer: 'HackerRank',
    platform: 'HackerRank',
    date: 'Oct 2024',
    credentialId: '0b99c4e79a8b',
    credentialUrl: 'https://www.hackerrank.com/certificates/iframe/0b99c4e79a8b',
    skills: ['Problem Solving', 'SQL', 'REST APIs', 'Data Structures'],
    description: 'Validates core software engineering skills including problem solving, SQL, and REST API design and implementation.',
    color: '#2db55d',        /* HackerRank green */
  },
  {
    name: 'HackerRank Frontend Developer (React) Certification',
    issuer: 'HackerRank',
    platform: 'CutShort',
    date: 'Oct 2024',
    credentialId: '75241',
    credentialUrl: 'https://cutshort.io/certificate/75241',
    skills: ['React.js', 'JavaScript', 'CSS', 'Front-end Coding'],
    description: 'Certifies proficiency in React.js, JavaScript, and CSS for building modern, responsive frontend applications.',
    color: '#61dafb',        /* React cyan */
  },
  {
    name: 'SQL (Advanced) Certificate',
    issuer: 'HackerRank',
    platform: 'HackerRank',
    date: 'Oct 2024',
    credentialId: '683b59b7ffb7',
    credentialUrl: 'https://www.hackerrank.com/certificates/iframe/683b59b7ffb7',
    skills: ['MySQL', 'SQL', 'Advanced Queries', 'Window Functions'],
    description: 'Demonstrates advanced SQL skills including complex queries, joins, window functions, and database optimization.',
    color: '#00bcd4',        /* SQL/database teal */
  },
  {
    name: 'Problem Solving (Intermediate) Certificate',
    issuer: 'HackerRank',
    platform: 'HackerRank',
    date: 'Nov 2024',
    credentialId: 'ba2c8e79239f',
    credentialUrl: 'https://www.hackerrank.com/certificates/iframe/ba2c8e79239f',
    skills: ['Problem Solving', 'C#', 'Data Structures', 'Algorithms'],
    description: 'Validates intermediate-level algorithmic problem-solving and data structures proficiency.',
    color: '#e8855f',        /* warm orange — algorithms */
  },
  {
    name: 'JavaScript (Intermediate) Certificate',
    issuer: 'HackerRank',
    platform: 'HackerRank',
    date: 'Nov 2024',
    credentialId: 'db4134221d99',
    credentialUrl: 'https://www.hackerrank.com/certificates/db4134221d99',
    skills: ['JavaScript', 'ES6+', 'Data Structures', 'Closures & Promises'],
    description: 'Certifies intermediate JavaScript proficiency including ES6+ features, closures, promises, and data structures.',
    color: '#e8c547',        /* JS yellow — toned down for dark bg */
  },
  {
    name: 'Career Essentials in GitHub Professional Certificate',
    issuer: 'GitHub',
    platform: 'LinkedIn Learning',
    date: 'Mar 2024',
    credentialId: '91d078da4cc9',
    credentialUrl: 'https://www.linkedin.com/learning/certificates/91d078da4cc97bf429a1c53e72f3ec7935d5cef4924225b38fe771b202ccc91a',
    skills: ['GitHub', 'Version Control', 'CI/CD', 'Collaboration'],
    description: 'Covers GitHub fundamentals, version control best practices, CI/CD workflows, and collaborative development.',
    color: '#79b8ff',        /* GitHub accent blue — visible on dark */
  },
  {
    name: 'LinkedIn Learning Certificate',
    issuer: 'LinkedIn Learning',
    platform: 'LinkedIn Learning',
    date: '2024',
    credentialId: '8219cb69',
    credentialUrl: 'https://www.linkedin.com/learning/certificates/8219cb692f3702b13ee69f4076b390e325539d615ec7a9c9b9b0c609165a7794',
    skills: ['Professional Development'],
    description: 'LinkedIn Learning course completion certificate. Update name via your LinkedIn profile.',
    color: '#4a9eed',        /* LinkedIn blue — readable */
  },
  {
    name: 'LinkedIn Learning Certificate',
    issuer: 'LinkedIn Learning',
    platform: 'LinkedIn Learning',
    date: '2024',
    credentialId: '17da6b66',
    credentialUrl: 'https://www.linkedin.com/learning/certificates/17da6b6668407d3b11844272c478466bf012d5dd7eda28c4ce076d3cabcce753',
    skills: ['Professional Development'],
    description: 'LinkedIn Learning course completion certificate. Update name via your LinkedIn profile.',
    color: '#4a9eed',
  },
  {
    name: 'LinkedIn Learning Certificate',
    issuer: 'LinkedIn Learning',
    platform: 'LinkedIn Learning',
    date: '2024',
    credentialId: 'b4d5fdae',
    credentialUrl: 'https://www.linkedin.com/learning/certificates/b4d5fdae98a038e805a7729a705f2092b3d1cbfd75708a21d646c1a18e1405ad',
    skills: ['Professional Development'],
    description: 'LinkedIn Learning course completion certificate. Update name via your LinkedIn profile.',
    color: '#4a9eed',
  },
  {
    name: 'LinkedIn Learning Certificate',
    issuer: 'LinkedIn Learning',
    platform: 'LinkedIn Learning',
    date: '2024',
    credentialId: '351fcdc8',
    credentialUrl: 'https://www.linkedin.com/learning/certificates/351fcdc88ff064dee49edc90d6cd522d7b13c40199bff0c8643fc64f140e68d1',
    skills: ['Professional Development'],
    description: 'LinkedIn Learning course completion certificate. Update name via your LinkedIn profile.',
    color: '#4a9eed',
  },
  {
    name: 'LinkedIn Learning Certificate',
    issuer: 'LinkedIn Learning',
    platform: 'LinkedIn Learning',
    date: '2024',
    credentialId: '7e94a2fd',
    credentialUrl: 'https://www.linkedin.com/learning/certificates/7e94a2fde42bcaa2f0cb14994b524fafc60b83562ec5074b1863f60369c70c05',
    skills: ['Professional Development'],
    description: 'LinkedIn Learning course completion certificate. Update name via your LinkedIn profile.',
    color: '#4a9eed',
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
                software engineering, and full-stack development. Click any card to verify.
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

        <CertificationsGrid certifications={certifications} />
      </div>
    </div>
  );
}
