import { motion } from 'framer-motion';
import { RiCodeBoxLine, RiExternalLinkLine } from 'react-icons/ri';
import { projects } from '@data/projects';

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
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
          Featured{' '}
          <span className="bg-gradient-to-r from-accent to-purple-500 bg-clip-text text-transparent">
            Projects
          </span>
        </h2>
        <p className="text-base md:text-lg text-text-secondary">
          Company products I have built and shipped
        </p>
      </motion.div>

      <div className="relative">
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-0.5 hidden md:block" />

        <motion.div
          className="space-y-8 md:space-y-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="relative flex items-start gap-6 md:gap-8"
              variants={itemVariants}
            >
              <div className="relative z-10 flex-shrink-0">
                <div className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-bg-card border-2 border-accent flex items-center justify-center">
                  <RiCodeBoxLine className="text-accent text-sm md:text-xl" />
                </div>
                {index !== projects.length - 1 && (
                  <div className="absolute left-1/2 top-8 md:top-12 w-0.5 h-full bg-border -translate-x-0.5 md:hidden" />
                )}
              </div>

              <div className="flex-1 bg-bg-card border border-border rounded-2xl p-6 md:p-8 hover:border-accent transition-all duration-300 hover:shadow-glow">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-bold text-text-primary mb-2">
                      {project.title}
                    </h3>
                    <p className="text-lg font-semibold text-accent mb-1">{project.company}</p>
                    {project.companyNote && (
                      <p className="text-sm text-text-muted mb-3">{project.companyNote}</p>
                    )}
                  </div>
                  <div className="flex flex-wrap items-center gap-2 self-start">
                    <span className="px-3 py-1 bg-bg-tertiary text-text-secondary text-xs font-medium rounded-full border border-border">
                      {project.category}
                    </span>
                    {project.status === 'live' && (
                      <span className="px-3 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full border border-accent/30">
                        Live
                      </span>
                    )}
                    {project.status === 'company' && (
                      <span className="px-3 py-1 bg-green-500/10 text-green-400 text-xs font-medium rounded-full border border-green-500/30">
                        Company Project
                      </span>
                    )}
                  </div>
                </div>

                {project.description && (
                  <p className="text-sm md:text-base text-text-secondary leading-relaxed mb-4">
                    {project.description}
                  </p>
                )}

                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-hover transition-colors duration-300 mb-4"
                  >
                    <RiExternalLinkLine />
                    <span>{project.demo.replace(/^https?:\/\//, '')}</span>
                  </a>
                )}

                {project.highlights && project.highlights.length > 0 && (
                  <div className="mt-4 pt-4 border-t border-border">
                    <h4 className="text-sm font-semibold text-text-primary mb-3">Highlights:</h4>
                    <ul className="space-y-2">
                      {project.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="flex items-start gap-2 text-sm text-text-secondary"
                        >
                          <span className="text-accent mt-1.5">▸</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {project.technologies && project.technologies.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-mono px-2 py-1 bg-bg-tertiary rounded text-text-secondary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
