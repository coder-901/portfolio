import { personalInfo } from '@data/personal';
import { RiLinkedinBoxFill, RiGithubFill, RiTwitterXLine, RiHeartFill } from 'react-icons/ri';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 md:px-12 border-t border-border bg-bg-secondary">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-6 text-center">
        <div className="flex gap-6">
          <a
            href={personalInfo.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-bg-tertiary text-text-secondary text-xl flex items-center justify-center transition-all duration-300 hover:bg-accent hover:text-bg-primary hover:-translate-y-1"
            aria-label="LinkedIn"
          >
            <RiLinkedinBoxFill />
          </a>
          <a
            href={personalInfo.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-bg-tertiary text-text-secondary text-xl flex items-center justify-center transition-all duration-300 hover:bg-accent hover:text-bg-primary hover:-translate-y-1"
            aria-label="GitHub"
          >
            <RiGithubFill />
          </a>
          <a
            href={personalInfo.social.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-bg-tertiary text-text-secondary text-xl flex items-center justify-center transition-all duration-300 hover:bg-accent hover:text-bg-primary hover:-translate-y-1"
            aria-label="Twitter"
          >
            <RiTwitterXLine />
          </a>
        </div>

        <p className="text-sm text-text-secondary flex items-center gap-1">
          Made with{' '}
          <RiHeartFill className="text-red-500 animate-float inline-block" /> by{' '}
          {personalInfo.name}
        </p>

        <p className="text-xs text-text-muted">© {currentYear} All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

