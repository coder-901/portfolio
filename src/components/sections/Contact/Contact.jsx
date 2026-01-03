import { useState } from 'react';
import { motion } from 'framer-motion';
import { RiMailLine, RiWhatsappLine, RiSendPlaneLine } from 'react-icons/ri';
import emailjs from '@emailjs/browser';
import { personalInfo } from '@data/personal';
import Button from '@components/common/Button/Button';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setStatus({ type: 'success', message: 'Message sent successfully!' });
      setFormData({ name: '', email: '', message: '' });
    } catch {
      setStatus({ type: 'error', message: 'Failed to send message. Please try again.' });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setStatus({ type: '', message: '' }), 5000);
    }
  };

  return (
    <section
      id="contact"
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
          Get In <span className="bg-gradient-to-r from-accent to-purple-500 bg-clip-text text-transparent">Touch</span>
        </h2>
        <p className="text-base md:text-lg text-text-secondary">
          Feel free to contact me for projects or collaboration
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto w-full">
        <motion.div
          className="flex flex-col gap-6"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-bg-card border border-border rounded-2xl p-6 flex items-start gap-4 transition-all duration-300 hover:border-accent">
            <div className="w-12 h-12 rounded-xl bg-bg-tertiary text-accent text-2xl flex items-center justify-center flex-shrink-0">
              <RiMailLine />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-base font-semibold mb-1">Email</h3>
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-sm text-text-secondary hover:text-accent transition-colors duration-300 break-all"
              >
                {personalInfo.email}
              </a>
            </div>
          </div>

          <div className="bg-bg-card border border-border rounded-2xl p-6 flex items-start gap-4 transition-all duration-300 hover:border-accent">
            <div className="w-12 h-12 rounded-xl bg-bg-tertiary text-accent text-2xl flex items-center justify-center flex-shrink-0">
              <RiWhatsappLine />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-base font-semibold mb-1">WhatsApp</h3>
              <p className="text-sm text-text-secondary">{personalInfo.phone}</p>
              <span className="text-xs text-text-muted italic">Message Only</span>
            </div>
          </div>
        </motion.div>

        <motion.form
          className="flex flex-col gap-6"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-sm font-medium text-text-secondary">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your name"
              className="px-4 py-3 bg-bg-card border border-border rounded-lg text-text-primary text-base transition-colors duration-300 focus:border-accent focus:outline-none placeholder:text-text-muted"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm font-medium text-text-secondary">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="your@email.com"
              className="px-4 py-3 bg-bg-card border border-border rounded-lg text-text-primary text-base transition-colors duration-300 focus:border-accent focus:outline-none placeholder:text-text-muted"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-sm font-medium text-text-secondary">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              placeholder="Your message..."
              className="px-4 py-3 bg-bg-card border border-border rounded-lg text-text-primary text-base transition-colors duration-300 focus:border-accent focus:outline-none placeholder:text-text-muted resize-y min-h-[120px]"
            />
          </div>

          {status.message && (
            <p
              className={`text-sm px-4 py-3 rounded-lg ${
                status.type === 'success'
                  ? 'bg-green-500/10 text-green-500 border border-green-500/30'
                  : 'bg-red-500/10 text-red-500 border border-red-500/30'
              }`}
            >
              {status.message}
            </p>
          )}

          <Button type="submit" disabled={isSubmitting} icon={<RiSendPlaneLine />}>
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </Button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;

