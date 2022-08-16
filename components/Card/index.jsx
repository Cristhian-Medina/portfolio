import React from 'react'
import Link from 'next/link'

export default function Card({project, position}) {
  return (
    <section className={position}>
      <img src={project.images.main} alt={`proyecto ${project.name}`} />
      <h3>{project.name}</h3>
      <p>{project.description}</p>
      <Link href={`/project/${project.id}`}>
        <a>Mas detalles</a>
      </Link>
    </section>
  )
}
