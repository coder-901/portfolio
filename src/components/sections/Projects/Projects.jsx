import { motion } from 'framer-motion';
import { RiGithubFill, RiExternalLinkLine } from 'react-icons/ri';
import { projects } from '@data/projects';

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col gap-12 md:gap-16 px-4 sm:px-6 md:px-12 py-20 md:py-32 max-w-7xl mx-auto w-full"
    >
      <motion.div
        className="text-center max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          Featured <span className="bg-gradient-to-r from-accent to-purple-500 bg-clip-text text-transparent">Projects</span>
        </h2>
        <p className="text-base md:text-lg text-text-secondary">Some of my recent work</p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        {projects.map((project) => (
          <motion.article
            key={project.id}
            className="bg-bg-card border border-border rounded-2xl overflow-hidden transition-all duration-300 hover:border-accent hover:-translate-y-2 hover:shadow-glow"
            variants={itemVariants}
          >
            <div className="relative overflow-hidden aspect-video group">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-bg-primary/80 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-accent text-bg-primary text-2xl flex items-center justify-center transition-transform duration-300 hover:scale-110"
                    aria-label="GitHub"
                  >
                    <RiGithubFill />
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-accent text-bg-primary text-2xl flex items-center justify-center transition-transform duration-300 hover:scale-110"
                    aria-label="Live Demo"
                  >
                    <RiExternalLinkLine />
                  </a>
                )}
              </div>
            </div>

            <div className="p-6">
              <span className="text-xs font-mono text-accent uppercase tracking-wider">
                {project.category}
              </span>
              <h3 className="text-xl font-semibold mt-2 mb-3">{project.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono px-2 py-1 bg-bg-tertiary rounded text-text-secondary"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;

