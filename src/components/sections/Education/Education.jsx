import { motion } from 'framer-motion';
import { RiGraduationCapLine, RiCalendarLine, RiMapPinLine } from 'react-icons/ri';
import { education } from '@data/education';

const Education = () => {
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
      id="education"
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
          Education <span className="bg-gradient-to-r from-accent to-purple-500 bg-clip-text text-transparent">Journey</span>
        </h2>
        <p className="text-base md:text-lg text-text-secondary">
          My academic background and learning path
        </p>
      </motion.div>

      <div className="relative">
        {/* Timeline line - Desktop */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-0.5 hidden md:block" />

        <motion.div
          className="space-y-8 md:space-y-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              className="relative flex items-start gap-6 md:gap-8"
              variants={itemVariants}
            >
              {/* Timeline dot */}
              <div className="relative z-10 flex-shrink-0">
                <div className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-bg-card border-2 border-accent flex items-center justify-center">
                  <RiGraduationCapLine className="text-accent text-sm md:text-xl" />
                </div>
                {index !== education.length - 1 && (
                  <div className="absolute left-1/2 top-8 md:top-12 w-0.5 h-full bg-border -translate-x-0.5 md:hidden" />
                )}
              </div>

              {/* Content card */}
              <div className="flex-1 bg-bg-card border border-border rounded-2xl p-6 md:p-8 hover:border-accent transition-all duration-300 hover:shadow-glow">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-bold text-text-primary mb-2">
                      {edu.degree}
                    </h3>
                    {edu.field && (
                      <p className="text-base text-accent font-medium mb-2">{edu.field}</p>
                    )}
                    <p className="text-lg font-semibold text-text-secondary mb-3">
                      {edu.institution}
                    </p>
                  </div>
                  {edu.status === 'completed' && (
                    <span className="px-3 py-1 bg-green-500/10 text-green-400 text-xs font-medium rounded-full border border-green-500/30 self-start">
                      Completed
                    </span>
                  )}
                  {edu.status === 'ongoing' && (
                    <span className="px-3 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full border border-accent/30 self-start">
                      Ongoing
                    </span>
                  )}
                </div>

                <div className="flex flex-wrap items-center gap-4 md:gap-6 text-sm text-text-muted mb-4">
                  <div className="flex items-center gap-2">
                    <RiCalendarLine className="text-accent" />
                    <span>{edu.period}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <RiMapPinLine className="text-accent" />
                    <span>{edu.location}</span>
                  </div>
                  {edu.gpa && (() => {
                    // Check if it's college level (B.E., Bachelor, Engineering, etc.)
                    const isCollege = edu.degree.toLowerCase().includes('bachelor') || 
                                     edu.degree.toLowerCase().includes('b.e.') || 
                                     edu.degree.toLowerCase().includes('engineering') ||
                                     edu.degree.toLowerCase().includes('degree');
                    
                    if (isCollege) {
                      // Display as CGPA
                      return (
                        <div className="flex items-center gap-2">
                          <span className="text-accent font-semibold">CGPA:</span>
                          <span>{edu.gpa}</span>
                        </div>
                      );
                    } else {
                      // Display as Percentage for school
                      const percentage = edu.gpa.split('/')[0];
                      return (
                        <div className="flex items-center gap-2">
                          <span className="text-accent font-semibold">Percentage:</span>
                          <span>{percentage}%</span>
                        </div>
                      );
                    }
                  })()}
                </div>

                {edu.description && (
                  <p className="text-sm md:text-base text-text-secondary leading-relaxed mb-4">
                    {edu.description}
                  </p>
                )}

                {edu.achievements && edu.achievements.length > 0 && (
                  <div className="mt-4 pt-4 border-t border-border">
                    <h4 className="text-sm font-semibold text-text-primary mb-3">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {edu.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-text-secondary">
                          <span className="text-accent mt-1.5">▸</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
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

export default Education;

