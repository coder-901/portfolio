const BASE_URL = import.meta.env.BASE_URL;

export const projects = [
  {
    id: 1,
    title: 'Research Paper',
    category: 'Machine Learning',
    description: 'Published research on ML algorithms and their applications in predictive analytics.',
    image: `${BASE_URL}img/p2.png`,
    technologies: ['Python', 'TensorFlow', 'Pandas', 'NumPy'],
    github: 'https://github.com/coder-901',
    demo: null,
    featured: true,
  },
  {
    id: 2,
    title: 'Amazon Clone',
    category: 'Web Development',
    description: 'Full-fledged e-commerce clone with modern UI/UX and responsive design.',
    image: `${BASE_URL}img/p3.png`,
    technologies: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/coder-901',
    demo: null,
    featured: true,
  },
  {
    id: 3,
    title: 'Historical Places',
    category: 'Web Development',
    description: 'Interactive website showcasing historical landmarks with rich visuals.',
    image: `${BASE_URL}img/p1.png`,
    technologies: ['HTML', 'CSS'],
    github: 'https://github.com/coder-901',
    demo: null,
    featured: true,
  },
];

