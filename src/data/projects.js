export const projects = [
  {
    id: 1,
    title: 'AIGuardX',
    company: 'ZeroShield',
    companyNote: 'Enterprise endpoint AI guardrails, policy enforcement, and SOC console',
    category: 'AI Security',
    status: 'live',
    description:
      'AIGuardX is an enterprise platform for endpoint AI guardrails. It combines a Django API, a React SOC console, and a cross-platform endpoint agent that evaluates prompts against organization policies and streams telemetry back to the dashboard.',
    highlights: [
      'Built the backend API for agents, policies, security scanning, and the operations dashboard',
      'Shipped a React console for policy management, agent monitoring, and SOC workflows',
      'Delivered a cross-platform endpoint agent with telemetry, installer packaging, and policy checks',
      'Ran the stack on Docker with PostgreSQL, Redis, RabbitMQ, and Celery for production workloads',
    ],
    technologies: ['Django', 'React', 'PostgreSQL', 'Redis', 'RabbitMQ', 'Celery', 'Docker'],
    demo: 'https://aisecshield.zeroshield.ai',
  },
  {
    id: 2,
    title: 'Compliance Monitoring System',
    company: 'ZeroShield',
    companyNote: 'Enterprise GRC platform for compliance tracking, privacy assessments, and AI-assisted audits',
    category: 'GRC / Compliance',
    status: 'company',
    description:
      'A comprehensive enterprise compliance monitoring system with Django, React, and a RASA chatbot. It automates compliance tracking, evidence management, privacy assessments, and AI-powered guidance across frameworks such as ISO 27001, GDPR, and DPDPA.',
    highlights: [
      'Supported multi-framework compliance including ISO 27001, GDPR, DPDPA, and SOC 2',
      'Added evidence management, control mapping, and real-time progress tracking',
      'Built privacy workflows for PIA, DPIA, RoPA, and mobile security analysis',
      'Integrated a RASA chatbot for context-aware compliance guidance, plus dashboards and PDF/Excel reports',
    ],
    technologies: [
      'Django',
      'React',
      'Vite',
      'Tailwind CSS',
      'PostgreSQL',
      'Redis',
      'Celery',
      'RASA',
      'Docker',
    ],
    demo: null,
  },
];
