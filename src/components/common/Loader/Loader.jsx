import { motion } from 'framer-motion';

const Loader = () => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center gap-6 bg-bg-primary z-[1500]">
      <motion.div
        className="w-12 h-12 border-[3px] border-border border-t-accent rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
      />
      <motion.p
        className="text-sm text-text-secondary font-mono"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Loading...
      </motion.p>
    </div>
  );
};

export default Loader;

