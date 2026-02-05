import React, { useEffect, useState } from 'react'
import ProjectCard from '../ProjectCard/ProjectCard'

const Projects = () => {
    const [projectList, setProjectList] = useState([])

    useEffect(() => {
        fetch('./projects.json')
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            setProjectList(data)
        })
    })

  return (
    <section id='projects' className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-wide mb-4">
            Portfolio
          </p>
          <h2 className="text-gray-900 font-bold text-4xl mb-4">
            Featured Work
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Recent projects showcasing my approach to building effective, 
            user-friendly websites.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 gap-18">
          {projectList.map((project) => (
            <ProjectCard 
              key={project.id}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:border-blue-600 hover:shadow-lg transition group"
              title={project.title}
              description={project.description}
              image={project.image}
              tags={project.tags}
              link={project.link}
            />
           ))}
            </div>

     </div>
     </section>   
  )
}

export default Projects