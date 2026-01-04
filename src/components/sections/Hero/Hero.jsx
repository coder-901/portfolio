import { motion } from 'framer-motion';
import { RiLinkedinBoxFill, RiGithubFill, RiTwitterXLine, RiMailLine, RiArrowDownLine } from 'react-icons/ri';
import { personalInfo } from '@data/personal';
import Button from '@components/common/Button/Button';
import TypingText from '@components/common/TypingText/TypingText';

const Hero = () => {
  const typingTexts = [
    'Data Analyst',
    'Front-End Developer',
    'AI/ML Engineer',
    'Prompt Engineer',
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center gap-8 md:gap-16 px-4 sm:px-6 md:px-12 py-20 md:py-32 flex-col-reverse md:flex-row max-w-7xl mx-auto"
    >
      <motion.div
        className="flex-1 max-w-2xl w-full md:text-left text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p
          className="text-base md:text-lg text-text-secondary mb-2"
          variants={itemVariants}
        >
          Hello, I'm
        </motion.p>

        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4 bg-gradient-to-r from-accent to-purple-500 bg-clip-text text-transparent"
          variants={itemVariants}
        >
          {personalInfo.name}
        </motion.h1>

        <motion.div
          className="text-xl sm:text-2xl md:text-3xl font-semibold text-text-primary mb-6 min-h-[2.5rem] md:min-h-[3rem]"
          variants={itemVariants}
        >
          I'm a{' '}
          <TypingText
            texts={typingTexts}
            typingSpeed={100}
            deletingSpeed={50}
            pauseDuration={2000}
            className="text-accent"
          />
        </motion.div>

        <motion.p
          className="text-base md:text-lg text-text-secondary leading-relaxed mb-8 max-w-xl mx-auto md:mx-0"
          variants={itemVariants}
        >
          {personalInfo.tagline}
        </motion.p>

        <motion.div
          className="flex items-center gap-4 mb-8 justify-center md:justify-start flex-wrap"
          variants={itemVariants}
        >
          <span className="text-sm text-text-muted">Follow me</span>
          <div className="flex gap-3 md:gap-4">
            <a
              href={personalInfo.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-bg-tertiary text-accent text-lg md:text-xl flex items-center justify-center transition-all duration-300 hover:bg-accent hover:text-bg-primary hover:shadow-glow hover:-translate-y-1"
              aria-label="LinkedIn"
            >
              <RiLinkedinBoxFill />
            </a>
            <a
              href={personalInfo.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-bg-tertiary text-accent text-lg md:text-xl flex items-center justify-center transition-all duration-300 hover:bg-accent hover:text-bg-primary hover:shadow-glow hover:-translate-y-1"
              aria-label="GitHub"
            >
              <RiGithubFill />
            </a>
            <a
              href={personalInfo.social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-bg-tertiary text-accent text-lg md:text-xl flex items-center justify-center transition-all duration-300 hover:bg-accent hover:text-bg-primary hover:shadow-glow hover:-translate-y-1"
              aria-label="Twitter"
            >
              <RiTwitterXLine />
            </a>
          </div>
        </motion.div>

        <motion.div
          className="flex gap-4 flex-wrap justify-center md:justify-start"
          variants={itemVariants}
        >
          <Button href="#contact" icon={<RiMailLine />}>
            Contact Me
          </Button>
          <Button
            href={personalInfo.resumeUrl}
            variant="secondary"
            icon={<RiArrowDownLine />}
            target="_blank"
          >
            Download Resume
          </Button>
        </motion.div>
      </motion.div>

      <motion.div
        className="flex-1 flex justify-center items-center w-full md:w-auto"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96">
          <img
            src={`${import.meta.env.BASE_URL}img/dev2.jpeg`}
            alt={personalInfo.name}
            className="w-full h-full object-cover rounded-3xl relative z-10 shadow-2xl"
          />
          <div className="absolute inset-0 -z-10 -inset-4 sm:-inset-5 bg-gradient-to-r from-accent to-purple-500 rounded-3xl opacity-30 blur-3xl animate-pulse-glow" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;

