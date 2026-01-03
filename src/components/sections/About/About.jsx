import { motion } from 'framer-motion';
import {
  RiBarChartBoxLine,
  RiCodeSSlashLine,
  RiBrainLine,
  RiRobotLine,
} from 'react-icons/ri';
import { personalInfo } from '@data/personal';
import { skills } from '@data/skills';

const iconMap = {
  RiBarChartBoxLine,
  RiCodeSSlashLine,
  RiBrainLine,
  RiRobotLine,
};

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col gap-12 md:gap-16 px-4 sm:px-6 md:px-12 py-20 md:py-32 max-w-7xl mx-auto"
    >
      <motion.div
        className="text-center max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          About <span className="bg-gradient-to-r from-accent to-purple-500 bg-clip-text text-transparent">Me</span>
        </h2>
        <p className="text-base md:text-lg text-text-secondary leading-relaxed px-4">
          {personalInfo.description}
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        {skills.map((skill) => {
          const IconComponent = iconMap[skill.icon];
          return (
            <motion.div
              key={skill.id}
              className="bg-bg-card border border-border rounded-2xl p-6 text-center transition-all duration-300 hover:border-accent hover:-translate-y-2 hover:shadow-glow"
              variants={itemVariants}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-bg-tertiary text-accent text-3xl mb-4">
                <IconComponent />
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-2">{skill.title}</h3>
              <p className="text-sm text-accent font-mono mb-3">{skill.experience}</p>
              <p className="text-sm text-text-muted">{skill.description}</p>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default About;

