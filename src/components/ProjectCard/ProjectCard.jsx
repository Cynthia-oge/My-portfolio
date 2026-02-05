import React from 'react'

const ProjectCard = ({title, description, image, tags, link}) => {
  return (
    <div>
              {/* Project Image */}
        <div className="overflow-hidden">
                <img 
                  src={image} 
                  alt={title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition duration-300"
                />
        </div>
              
              {/* Project Info */}
            <div className="p-6">
                <h3 className="text-slate-900 font-bold text-xl mb-2">
                  {title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {description}
                </p>
                
                 {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {tags.map((tag) => (
                    <span 
                      key={tag}
                      className="bg-sky-100 text-sky-800 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* View Link */}
                <a 
                  href={link}
                  className="text-blue-600 font-semibold hover:text-blue-700 inline-flex items-center"
                >
                  View Project 
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
            </div>
    </div>
  )
}

export default ProjectCard