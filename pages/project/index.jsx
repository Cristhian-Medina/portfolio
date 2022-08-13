import React, { useState, useEffect } from 'react'

import Card from '@components/Card'

export default function ProjectPage() {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    window
      .fetch('api/project')
      .then(response => response.json())
      .then(({ data }) => {
        console.log(data)
        setProjects(data)
      })
      .catch(error => console.error(error.message))
    }, [])
    
    
  return (                        
    <>
      <h1>Proyectos</h1>

      {projects.map((project) => (
        <Card
          key={project.id}
          item={project}
        />
      ))}
    </>
  )
}
