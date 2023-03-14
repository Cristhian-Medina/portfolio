import React, { useState, useEffect } from 'react'

import Card from '@components/Card'

export default function ProjectPage() {
  const [projects, setProjects] = useState(null)

  useEffect(() => {
    window
      .fetch('api/project')
      .then(response => response.json())
      .then(({ data }) => {
        setProjects(data)
      })
      .catch(error => console.error(error.message))
    }, [])
  
  if(!projects) return <h1>Loading...</h1>
    
  return (                        
    projects.map((project, index) => (
      <Card
        key={project.id}
        project={project}
        position={(index % 2 == 0) ? 'right' : 'left'}
      />
    ))
  )
}
