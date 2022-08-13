import React from 'react'
import Link from 'next/link'

export default function Card({item}) {
  return (
    <div>
      <img src={item.images.main} alt={`proyecto ${item.name}`} />
      <h3>{item.name}</h3>
      <p>{item.description}</p>
      <Link href={{ pathname:`/project/${item.id}`, query: {id: item.id} }}>
        <a>Detalles</a>
      </Link>
    </div>
  )
}
