import React from 'react'
import Image from 'next/image'

import Button from '@components/Button'

export default function Card({project, position, color}) {
  const colors = ['green', 'blue', 'gray', 'olive'];
  return (
    <>
      <section className={`project-card ${position}`}>
        <div className={`card-img-container ${colors[color]}`}>
          <Image 
            src={project.images.cover}
            width={540}
            height={500}
            alt={`proyecto ${project.name}`}
          />
        </div>

        <div className='card-body-container'>
          <h3>{project.name}</h3>
          <p>{project.description}</p>
          <Button
            className="secondary"
            type="link"
            value="Mas detalles"
            href={`/project/${project.id}`}
          />
        </div>
      </section>

      <style jsx>
        {`
          .project-card {
            background-color: var(--color-secondary-light);
            color: var(--color-text-dark);
            height: 500px;
            width: 1015px;
            margin-bottom: 80px;
            display: flex;
            justify-content: space-between
          }

          .right {
            align-self: flex-end;
            flex-direction: row-reverse;
          }

          .card-img-container {
            width: 540px;
            height: 500px;
          }

          .card-body-container {
            width: 350px;
            height: 500px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            border-top: 1px solid var(--color-border-gray);
            border-bottom: 1px solid var(--color-border-gray);
          }

          .card-body-container h3 {
            font: var(--f-h1);
            margin-bottom: 28px;
          }

          .card-body-container p {
            font: var(--f-text);
            margin-bottom: 24px;
            max-height: 300px;
            overflow: auto;
          }

          @media screen and (max-width: 900px) {
          }

          @media screen and (max-width: 500px) {
          }
        `}
      </style>
    </>
  )
}
