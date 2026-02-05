import React from 'react'

const Contact = () => {
  return (
    <section id='contact' className="bg-gray-50 py-20">
      <div className="max-w-4xl mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-wide mb-4">
            Get In Touch
          </p>
          <h2 className="text-gray-900 font-bold text-4xl mb-4">
            Let's Work Together
          </h2>
          <p className="text-gray-600 text-lg">
            Whether you're a freelancer, consultant, or coach looking to improve 
            your online presence, I'd love to hear from you.
          </p>
        </div>
        
        {/* Contact Form */}
        <form className="bg-white rounded-lg shadow-lg p-8">
          
          {/* Name Field */}
          <div className="mb-6">
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
            //   value={formData.name}
            //   onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-600 transition"
              placeholder="Your name"
              required
            />
          </div>
          
          {/* Email Field */}
          <div className="mb-6">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
            //   value={formData.email}
            //   onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-600 transition"
              placeholder="your@email.com"
              required
            />
          </div>
          
          {/* Message Field */}
          <div className="mb-6">
            <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
            //   value={formData.message}
            //   onChange={handleChange}
              rows="5"
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-600 transition"
              placeholder="Tell me about your project..."
              required
            />
          </div>
          
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Send Message
          </button>
          
        </form>
        
        {/* Contact Info */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Or reach out directly:</p>
          <div className="flex justify-center gap-6">
            <a 
              href="mailto:cynthiaaniehe1@gmail.com" 
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              📧 cynthiaaniehe1@gmail.com
            </a>
            <a 
              href="https://linkedin.com/in/cynthia-aniehe" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              💼 LinkedIn
            </a>
          </div>
        </div>
        
      </div>
    </section>
  )
}

export default Contact