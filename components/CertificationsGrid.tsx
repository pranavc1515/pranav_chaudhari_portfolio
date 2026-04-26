'use client';

import { motion, Variants } from 'framer-motion';
import { VscLinkExternal } from 'react-icons/vsc';

import certStyles from '@/styles/CertificationsPage.module.css';

export interface Cert {
  name: string;
  issuer: string;
  platform: string;
  date: string;
  credentialId: string;
  credentialUrl: string;
  skills: string[];
  description: string;
  color: string;
}

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.055,
      delayChildren: 0.08,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 18, scale: 0.985 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.42, ease: [0.23, 1, 0.32, 1] },
  },
};

const CertificationsGrid = ({ certifications }: { certifications: Cert[] }) => {
  return (
    <motion.div
      className={certStyles.certList}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {certifications.map((cert, index) => (
        <motion.a
          key={index}
          href={cert.credentialUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={certStyles.certCard}
          variants={cardVariants}
          whileHover={{
            x: 5,
            transition: { duration: 0.2, ease: 'easeOut' },
          }}
          whileTap={{ scale: 0.985 }}
        >
          <div className={certStyles.certLeft}>
            <motion.div
              className={certStyles.certBadge}
              style={{ background: `${cert.color}18`, borderColor: `${cert.color}35` }}
              whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
            >
              <span style={{ color: cert.color, fontSize: '11px', fontWeight: 700 }}>
                {cert.issuer.slice(0, 2).toUpperCase()}
              </span>
            </motion.div>
            <div className={certStyles.certMeta}>
              <span className={certStyles.certDate}>{cert.date}</span>
              <span className={certStyles.certPlatform}>{cert.platform}</span>
            </div>
          </div>

          <div className={certStyles.certBody}>
            <div className={certStyles.certNameRow}>
              <h3 className={certStyles.certName}>{cert.name}</h3>
              <span className={certStyles.viewCert}>
                View <VscLinkExternal size={11} />
              </span>
            </div>
            <p className={certStyles.certIssuer}>{cert.issuer}</p>
            <p className={certStyles.certDescription}>{cert.description}</p>
            <div className={certStyles.certSkills}>
              {cert.skills.map((skill) => (
                <span key={skill} className={certStyles.certSkillTag}>{skill}</span>
              ))}
            </div>
            <span className={certStyles.certId}>Credential ID: {cert.credentialId}</span>
          </div>
        </motion.a>
      ))}
    </motion.div>
  );
};

export default CertificationsGrid;
