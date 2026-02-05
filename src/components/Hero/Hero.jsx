import React from 'react'
import { motion } from 'framer-motion';
import hero from '../../assets/Images/hero.png';

const Hero = () => {
  return (
        <section id='home' className="bg-white py-20 md:py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          
          {/* Text Side - Animated */}
          <motion.div 
            className="flex-1"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, ease: "easeOut" }}
          >
            {/* Headline */}
            <motion.h1 
              className="mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, delay: 0.2 }}
            >
              <span className="block text-2xl md:text-3xl font-semibold text-gray-600 mb-2">
                Hey! I'm Cynthia,
              </span>
              <span className="block text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent leading-tight">
                Web Developer for Service Providers
              </span>
            </motion.h1>
            
            {/* Subheadline */}
            <motion.p 
              className="text-gray-600 text-lg md:text-xl mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              I help freelancers, consultants, and coaches turn their websites into client magnets - not just digital brochures.
            </motion.p>
            
            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <a 
                href="#work" 
                className="bg-blue-600 text-white font-semibold px-8 py-4 rounded-lg hover:bg-blue-700 transition-all hover:shadow-lg transform hover:-translate-y-0.5 text-center"
              >
                View My Work
              </a>
              <a 
                href="#contact" 
                className="bg-white border-2 border-blue-600 text-blue-600 font-semibold px-8 py-4 rounded-lg hover:bg-blue-50 transition-all text-center"
              >
                Let's Connect
              </a>
            </motion.div>
          </motion.div>
          
          {/* Photo Side - Animated */}
          <motion.div 
            className="flex-1 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative">
              {/* Decorative background blob */}
              <div className="absolute -top-4 -right-4 w-72 h-72 md:w-96 md:h-96 bg-blue-200 rounded-full opacity-20 blur-3xl"></div>
              
              {/* Profile Image */}
              <img 
                src={hero} 
                alt="Cynthia Aniehe - Web Developer" 
                className="relative rounded-full w-72 h-72 md:w-96 md:h-96 object-cover shadow-2xl ring-4 ring-blue-100"
              />
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>

  )
}

export default Hero