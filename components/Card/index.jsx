import React from 'react'
import Link from 'next/link'

export default function Card() {
  return (
    <>
      <img src="/" alt="descrpcion alternativa" />
      <h3>Title</h3>
      <p>description</p>
      <Link href="/">
        <a>Detalles</a>
      </Link>
    </>
  )
}
