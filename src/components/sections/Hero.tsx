// Hero section
import { motion } from 'framer-motion';
import { fadeInUp } from '../../animations/variants';
import hero1 from '../../assets/hero1.jpg';
import { useLanguage } from '../../hooks/useLanguage';

const Hero = () => {
  const { t } = useLanguage();

  // Function to render description with "Red Eclipse Testing" in bold and line breaks
  const renderDescription = () => {
    const description = t.hero.description;
    const lines = description.split('\\n');

    return lines.map((line, index) => {
      const parts = line.split('Red Eclipse Testing');

      const lineContent = parts.length > 1 ? (
        <>
          {parts[0]}
          <span className="font-bold">Red Eclipse Testing</span>
          {parts[1]}
        </>
      ) : (
        <>{line}</>
      );

      return (
        <span key={index}>
          {lineContent}
          {index < lines.length - 1 && <br />}
        </span>
      );
    });
  };

  return (
    <section
      className="relative h-[50vh] flex items-center justify-center pt-16 overflow-hidden"
      style={{
        backgroundImage: `url(${hero1})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Black Overlay with fade-in animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.6)', zIndex: 10 }}
      />

      {/* Content - Centered */}
      <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3 leading-tight text-white">
            {t.hero.title}
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white">
            {renderDescription()}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
