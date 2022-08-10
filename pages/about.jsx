import React from 'react'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <>
      <h2>Sobre Mi</h2>
      <p>
        Soy Desarrollador Frontend y Javascript con pasión por el diseño.
      </p>
      <Link href="/projects">
        <a>Proyectos</a>
      </Link>
      <img src="./images/foto1.jpg" />
    </>
  )
}
