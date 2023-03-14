import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Card({project, position}) {
  return (
    <section className={position}>
      <Image 
        src={project.images.main}
        width={300}
        height={300}
        alt={`proyecto ${project.name}`}
      />
      <h3>{project.name}</h3>
      <p>{project.description}</p>
      <Link href={`/project/${project.id}`}>
        <a>Mas detalles</a>
      </Link>
    </section>
  )
}
