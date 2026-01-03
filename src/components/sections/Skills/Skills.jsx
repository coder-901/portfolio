import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  const skillsWithLevel = [
    { name: 'Python', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'React', level: 80 },
    { name: 'SQL', level: 85 },
    { name: 'Machine Learning', level: 75 },
    { name: 'Data Analysis', level: 90 },
    { name: 'HTML/CSS', level: 95 },
    { name: 'Git', level: 80 },
  ];

  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col gap-12 md:gap-16 px-4 sm:px-6 md:px-12 py-20 md:py-32 max-w-7xl mx-auto w-full"
    >
      <motion.div
        className="text-center max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          Technical <span className="bg-gradient-to-r from-accent to-purple-500 bg-clip-text text-transparent">Skills</span>
        </h2>
        <p className="text-base md:text-lg text-text-secondary">
          Technologies and tools I work with
        </p>
      </motion.div>

      <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto w-full">
        {skillsWithLevel.map((skill, index) => (
          <motion.div
            key={skill.name}
            className="bg-bg-card border border-border rounded-xl p-6 hover:border-accent transition-all duration-300 hover:shadow-glow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="flex justify-between items-center mb-2">
              <span className="text-base font-semibold text-text-primary">{skill.name}</span>
              <span className="text-sm text-accent font-mono">{skill.level}%</span>
            </div>
            <div className="w-full h-2 bg-bg-tertiary rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-accent to-purple-500 rounded-full"
                initial={{ width: 0 }}
                animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                transition={{ duration: 1, delay: index * 0.1, ease: 'easeOut' }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;


