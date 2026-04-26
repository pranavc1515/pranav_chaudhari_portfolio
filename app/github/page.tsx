import { Metadata } from 'next';
import Image from 'next/image';
import GitHubCalendar from 'react-github-calendar';
import { VscRepo, VscPerson, VscStarEmpty, VscRepoForked, VscLinkExternal, VscGithub } from 'react-icons/vsc';

import RepoCard from '@/components/RepoCard';
import { Repo, User } from '@/types';

import styles from '@/styles/GithubPage.module.css';

export const metadata: Metadata = {
  title: 'GitHub',
};

export const revalidate = 600;

const GITHUB_USERNAME = process.env.NEXT_PUBLIC_GITHUB_USERNAME || 'pranavc1515';

async function getGithubData(): Promise<{ user: User | null; repos: Repo[] }> {
  try {
    const headers: HeadersInit = process.env.GITHUB_API_KEY
      ? { Authorization: `token ${process.env.GITHUB_API_KEY}` }
      : {};

    const userRes = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`, { headers });
    if (!userRes.ok) {
      console.error(`Failed to fetch GitHub user: ${userRes.status}`);
      return { user: null, repos: [] };
    }
    const user: User = await userRes.json();

    const repoRes = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=pushed&per_page=6`,
      { headers }
    );
    const repos: Repo[] = repoRes.ok ? await repoRes.json() : [];

    return { user, repos };
  } catch {
    return { user: null, repos: [] };
  }
}

export default async function GithubPage() {
  const { user, repos } = await getGithubData();

  if (!user) {
    return (
      <div className={styles.page}>
        <div className={styles.container}>
          <header className={styles.header}>
            <div className={styles.profile}>
              <div className={styles.avatarPlaceholder}>
                <VscGithub size={36} />
              </div>
              <div className={styles.profileInfo}>
                <h1 className={styles.name}>{GITHUB_USERNAME}</h1>
                <span className={styles.handle}>@{GITHUB_USERNAME}</span>
              </div>
            </div>
            <a
              href={`https://github.com/${GITHUB_USERNAME}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.profileLink}
            >
              <VscGithub size={18} />
              <span>View Profile</span>
              <VscLinkExternal size={14} />
            </a>
          </header>
          <div className={styles.section}>
            <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '14px' }}>
              GitHub data will appear once NEXT_PUBLIC_GITHUB_USERNAME is set to a valid GitHub account.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        {/* Header */}
        <header className={styles.header}>
          <div className={styles.profile}>
            <Image
              src={user.avatar_url}
              className={styles.avatar}
              alt={user.login}
              width={80}
              height={80}
              priority
            />
            <div className={styles.profileInfo}>
              <h1 className={styles.name}>{user.login}</h1>
              <span className={styles.handle}>@{user.login}</span>
            </div>
          </div>

          <a
            href={`https://github.com/${user.login}`}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.profileLink}
          >
            <VscGithub size={18} />
            <span>View Profile</span>
            <VscLinkExternal size={14} />
          </a>
        </header>

        {/* Stats */}
        <div className={styles.statsGrid}>
          <div className={styles.statCard}>
            <div className={styles.statIcon}>
              <VscRepo size={20} />
            </div>
            <div className={styles.statInfo}>
              <span className={styles.statValue}>{user.public_repos}</span>
              <span className={styles.statLabel}>Repositories</span>
            </div>
          </div>

          <div className={styles.statCard}>
            <div className={styles.statIcon}>
              <VscPerson size={20} />
            </div>
            <div className={styles.statInfo}>
              <span className={styles.statValue}>{user.followers}</span>
              <span className={styles.statLabel}>Followers</span>
            </div>
          </div>

          <div className={styles.statCard}>
            <div className={styles.statIcon}>
              <VscStarEmpty size={20} />
            </div>
            <div className={styles.statInfo}>
              <span className={styles.statValue}>
                {repos.reduce((acc, repo) => acc + repo.stargazers_count, 0)}
              </span>
              <span className={styles.statLabel}>Total Stars</span>
            </div>
          </div>

          <div className={styles.statCard}>
            <div className={styles.statIcon}>
              <VscRepoForked size={20} />
            </div>
            <div className={styles.statInfo}>
              <span className={styles.statValue}>
                {repos.reduce((acc, repo) => acc + repo.forks, 0)}
              </span>
              <span className={styles.statLabel}>Total Forks</span>
            </div>
          </div>
        </div>

        {/* Contribution Graph */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Contribution Activity</h2>
          <div className={styles.contributions}>
            <GitHubCalendar
              username={GITHUB_USERNAME}
              hideColorLegend
              hideMonthLabels
              colorScheme="dark"
              theme={{
                dark: ['#161B22', '#0e4429', '#006d32', '#26a641', '#39d353'],
                light: ['#161B22', '#0e4429', '#006d32', '#26a641', '#39d353'],
              }}
              style={{
                width: '100%',
              }}
            />
          </div>
        </section>

        {/* Repositories */}
        {repos.length > 0 && (
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Popular Repositories</h2>
              <a
                href={`https://github.com/${user.login}?tab=repositories`}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.viewAll}
              >
                View All
                <VscLinkExternal size={14} />
              </a>
            </div>

            <div className={styles.reposGrid}>
              {repos.map((repo) => (
                <RepoCard key={repo.id} repo={repo} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
