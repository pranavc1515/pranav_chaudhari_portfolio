'use client';

import { useState } from 'react';
import { VscCloudDownload, VscCheck, VscLoading } from 'react-icons/vsc';

import styles from '@/styles/DownloadResume.module.css';

type DownloadState = 'idle' | 'loading' | 'success';

interface DownloadResumeProps {
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

const DownloadResume = ({ variant = 'primary', size = 'md' }: DownloadResumeProps) => {
  const [state, setState] = useState<DownloadState>('idle');

  const handleDownload = async () => {
    if (state !== 'idle') return;

    setState('loading');

    await new Promise((resolve) => setTimeout(resolve, 800));

    const link = document.createElement('a');
    link.href = '/Pranav_Chaudhari_resume.pdf';
    link.download = 'Pranav_Chaudhari_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setState('success');
    setTimeout(() => setState('idle'), 2500);
  };

  return (
    <button
      onClick={handleDownload}
      disabled={state === 'loading'}
      className={`${styles.button} ${styles[variant]} ${styles[size]} ${styles[state]}`}
      aria-label="Download Resume PDF"
    >
      <span className={styles.iconWrap}>
        {state === 'loading' && (
          <span className={styles.spinner}>
            <VscLoading size={16} />
          </span>
        )}
        {state === 'success' && <VscCheck size={16} />}
        {state === 'idle' && <VscCloudDownload size={16} />}
      </span>

      <span className={styles.label}>
        {state === 'loading' && 'Preparing…'}
        {state === 'success' && 'Downloaded!'}
        {state === 'idle' && 'Download Resume'}
      </span>

      {state === 'idle' && (
        <span className={styles.shimmer} aria-hidden="true" />
      )}
    </button>
  );
};

export default DownloadResume;
