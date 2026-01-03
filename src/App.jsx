import { useEffect, useState } from 'react';
import Header from '@components/layout/Header/Header';
import Footer from '@components/layout/Footer/Footer';
import Hero from '@components/sections/Hero/Hero';
import About from '@components/sections/About/About';
import Education from '@components/sections/Education/Education';
import Skills from '@components/sections/Skills/Skills';
import Projects from '@components/sections/Projects/Projects';
import Contact from '@components/sections/Contact/Contact';
import ScrollToTop from '@components/common/ScrollToTop/ScrollToTop';
import Loader from '@components/common/Loader/Loader';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div 
      className="relative min-h-screen bg-fixed"
      style={{
        background: 'radial-gradient(ellipse at top, #1a1a24 0%, #0a0a0f 100%)',
      }}
    >
      {/* Background decorations */}
      <div 
        className="fixed top-0 right-0 w-[600px] h-[600px] rounded-full blur-[100px] opacity-40 pointer-events-none -z-10 -translate-y-1/4 translate-x-1/4"
        style={{
          background: 'radial-gradient(circle, rgba(34, 211, 238, 0.3) 0%, transparent 70%)',
        }}
      />
      <div 
        className="fixed bottom-0 left-0 w-[600px] h-[600px] rounded-full blur-[100px] opacity-40 pointer-events-none -z-10 translate-y-1/4 -translate-x-1/4"
        style={{
          background: 'radial-gradient(circle, rgba(34, 211, 238, 0.3) 0%, transparent 70%)',
        }}
      />
      <div 
        className="fixed inset-0 opacity-[0.03] pointer-events-none -z-10"
        style={{
          backgroundImage: 'linear-gradient(#27272a 1px, transparent 1px), linear-gradient(90deg, #27272a 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <Header />
      
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Contact />
      </main>
      
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;

