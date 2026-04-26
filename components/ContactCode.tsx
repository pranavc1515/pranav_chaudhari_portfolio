import styles from '@/styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'email',
    link: 'pranavc1515@gmail.com',
    href: 'mailto:pranavc1515@gmail.com',
  },
  {
    social: 'github',
    link: 'pranavc1515',
    href: 'https://github.com/pranavc1515',
  },
  {
    social: 'linkedin',
    link: 'thepranavchaudhari',
    href: 'https://www.linkedin.com/in/thepranavchaudhari',
  },
  {
    social: 'phone',
    link: '+91 88050 47968',
    href: 'tel:+918805047968',
  },
  {
    social: 'location',
    link: 'Bengaluru, India',
    href: 'https://maps.google.com/?q=Bengaluru,India',
  },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
