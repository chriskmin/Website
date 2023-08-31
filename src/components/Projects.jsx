import React from 'react'
import Section from './common/Section'

const Projects = () => {

  const projects = [
    {
      id: 1,
      image: '',
      title: 'Music App',
      github: ''
    },
    {
      id: 1,
      image: '',
      title: 'Music App',
      github: ''
    },
    {
      id: 1,
      image: '',
      title: 'Music App',
      github: ''
    },



  ]

  return (
    <Section 
    title="Projects"
    subtitle="These are the projects that I've worked on"
    > 
      <div className='grid gap-8 lg:gap-14 lg:grid-cols-2'>
        {projects.map(({id, image, title, github}) => 
          <div>
            <img src="" alt=""/> 

          </div>
        )}
      </div>
    </Section>
  )
}

export default Projects
