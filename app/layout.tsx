import type { Metadata } from 'next';

import Layout from '@/components/Layout';

import '@/styles/globals.css';
import '@/styles/themes.css';

export const metadata: Metadata = {
  title: {
    default: 'Pranav Chaudhari | Portfolio',
    template: 'Pranav Chaudhari | %s',
  },
  description:
    'Pranav Chaudhari is an AI Software Engineer with 4+ years of experience building production LLM systems, RAG pipelines, AI agents, and full-stack web applications.',
  keywords: [
    'pranav chaudhari',
    'ai software engineer',
    'genai engineer',
    'llm engineer',
    'rag pipeline',
    'langchain developer',
    'full stack developer',
    'react developer',
    'python developer',
    'fastapi',
    'opensearch',
    'pranav chaudhari portfolio',
  ],
  openGraph: {
    title: "Pranav Chaudhari | AI Software Engineer",
    description:
      'AI Software Engineer building production RAG pipelines, LLM integrations, and full-stack web applications.',
    url: 'https://thepranavchaudhari.dev',
  },
  twitter: {
    card: 'summary_large_image',
  },
};

const themeScript = `
  (function() {
    const theme = localStorage.getItem('theme');
    if (theme) {
      document.documentElement.setAttribute('data-theme', theme);
    }
  })();
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
