import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

export default function ProjectId() {
  const {query: {id}} = useRouter()
  console.log('Este es el query: ', id)
  const [project, setProject] = useState({})

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await fetch(`api/project/${id}`)
        const data = await response.json()
        console.log('Esta es la data: ', data)
        setProject(data)
      
      }catch(error) {
        console.error(error.message)
      }

      if(id) fetchProject()
    }
    }, [id])
    
    
  return (                        
    <>
      <h1>Proyecto {project.name}</h1>
      <p>{project.description}</p>
      {/* <ul>
        {project.technologies.map(tag => <li>{tag}</li>)}
      </ul> */}
      <Link href={project.link}>
        <a>Visita el proyecto</a>
      </Link>
    </>
  )
}
