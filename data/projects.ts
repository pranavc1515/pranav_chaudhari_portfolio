export interface Project {
  title: string;
  description: string;
  logo: string;
  link: string;
  slug: string;
  tags?: string[];
}

export const projects: Project[] = [
  {
    title: 'RAG Intelligence Pipeline',
    description:
      'Production Retrieval-Augmented Generation system with OpenSearch vector search, LangChain orchestration, and Gemini API for context-aware B2B intelligence at Kaitongo.',
    logo: '/logos/rag_icon.svg',
    link: 'https://github.com/pranavc1515',
    slug: 'rag-intelligence-pipeline',
    tags: ['Python', 'LangChain', 'OpenSearch', 'Gemini API', 'FastAPI'],
  },
  {
    title: 'AI Travel Chatbot',
    description:
      'Conversational AI chatbot for trip planning and real-time booking at Avathi. Integrated with booking engine APIs for live availability, recommendations, and reservation flows.',
    logo: '/logos/chatbot_icon.svg',
    link: 'https://github.com/pranavc1515',
    slug: 'ai-travel-chatbot',
    tags: ['Vue.js 3', 'Nuxt.js', 'TypeScript', 'Conversational AI', 'REST APIs'],
  },
  {
    title: 'Multi-Property Booking Engine',
    description:
      'Full-featured hotel booking engine integrated with Channex and HyperGuest channel managers. Real-time inventory sync, rate management, and reservation processing for OTAs.',
    logo: '/logos/booking_icon.svg',
    link: 'https://github.com/pranavc1515',
    slug: 'booking-engine',
    tags: ['Vue.js 3', 'TypeScript', 'Channex API', 'HyperGuest API', 'Tailwind CSS'],
  },
  {
    title: 'Document Migration SaaS',
    description:
      'Full-stack document processing platform built at Metapercept. Structured and unstructured content pipelines with Vue.js + React.js frontends and Node.js/MongoDB backend.',
    logo: '/logos/docs_icon.svg',
    link: 'https://github.com/pranavc1515',
    slug: 'document-migration-saas',
    tags: ['Vue.js', 'React.js', 'Node.js', 'MongoDB', 'Express.js'],
  },
];
