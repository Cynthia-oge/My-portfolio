import React from 'react'
import hero from '../../assets/Images/hero.png';

const About = () => {
  return (
    <section id='about' className="bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-18">
          
          {/* Photo Side */}
          <div className="flex-1">
            <img 
              src={hero} 
              alt="Cynthia working at desk" 
              className="rounded-lg w-full shadow-xl"
            />
          </div>
          
          {/* Text Side */}
          <div className="flex-1">
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-wide mb-4">
              About Me
            </p>
            <h2 className="text-gray-900 font-bold text-3xl md:text-4xl mb-6">
              Building Websites That Actually Convert
            </h2>
            <div className="text-gray-600 text-base md:text-lg space-y-4">
              <p>
                I'm Cynthia, a web developer focused on helping service providers 
                build online presences that actually convert.
              </p>
              <p>
                I believe websites should be clear, fast, and conversion-focused. 
                Not just pretty portfolios that sit there, but tools that actively 
                help you get clients.
              </p>
              <p>
                I'm building my brand in public, taking on select clients, and 
                sharing what I learn along the way.
              </p>
            </div>
            
            {/* Tech Stack */}
            <div className="mt-8">
              <p className="text-gray-700 font-semibold mb-3">Tech Stack:</p>
              <div className="flex flex-wrap gap-2">
                {['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS', 'Bootstrap', 'Wordpress'].map((tech) => (
                  <span 
                    key={tech}
                    className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}

export default About