import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'

import Button from '@components/Button'

export default function ProjectId() {
  const [project, setProject] = useState(null)
  const {query: {id}} = useRouter()
  const colors = ['green', 'blue', 'gray', 'olive'];
  const ramdomColor = Math.floor(Math.random() * 4);
  
  useEffect(() => {
    const fetchProject = async (id) => {
      try {
        const response = await fetch(`../api/project/${id}`)
        const data = await response.json()
        setProject(data)
      }catch(error) {
        console.error(error.message)
      }
    }
    if(id) fetchProject(id)
  }, [id])

  if(!project) return <h1>Loading...</h1>

  return (                        
    <>
      <div className={`hero ${colors[ramdomColor]}`}>
        <Image
          layout='responsive'
          src={project.images.main}
          width={1110}
          height={500}
          alt={`proyecto ${project.name} vista para escritorio`}
        />
      </div>

      <section className='content'>
        <article className='intro'>
          <h1>{project.name}</h1>
          <p>{project.description[0]}</p>
          <ul>
            {project.technologies.map(tool => <li>{tool}</li>)}
          </ul>
          <div className='buttons-container'>
            <Button
              className="secondary "
              type="link"
              target="_blank"
              value="Visita el proyecto"
              href={project.site}
            />
            <Button
              className="secondary"
              type="link"
              target="_blank"
              value="Revisa el código"
              href={project.github}
            />
          </div>
        </article>

        <article className='description'>
          <h2>Sobre el Proyecto</h2>
          <p>{project.description[1]}</p>
          <h2>Vista del proyecto</h2>
          <div className={`img-container ${colors[ramdomColor]}`}>
            <Image
              layout='responsive'
              src={project.images.desktop}
              width={635}
              height={400}
              alt={`proyecto ${project.name}`}
            />
          </div>
          <div className={`img-container ${colors[ramdomColor]}`}>
            <Image
              layout='responsive'
              src={project.images.mobile}
              width={635}
              height={400}
              alt={`proyecto ${project.name} vista para movil`}
            />
          </div>
        </article>
      </section>

      <div className='pagination'>
        <div>
          <span className='icon'> &lt; </span>
          <Link href={project.id}>
            <a className='pagination-btn'>
              {project.name}
              <br/>
              <span className='direction'>Anterior</span>
            </a>
          </Link>
        </div>
        <div className='divider'></div>
        <div>
          <Link href={project.id}>
            <a className='pagination-btn right'>
              {project.name}
              <br/>
              <span className='direction'>Siguiente</span>
            </a>
          </Link>
          <span className='icon right'> &gt; </span>
        </div>
      </div>

      <style jsx>
        {`
          .hero {
            margin-bottom: 115px;
          }

          .content {
            display: flex;
            justify-content: space-between;
            margin-bottom: 32px;
          }

          .intro {
            width: 350px;
            border-top: 1px solid var(--color-border-gray);
            border-bottom: 1px solid var(--color-border-gray);
            padding: 48px 0;
            align-self: flex-start;
          }

          .intro h1 {
            font: var(--f-h1);
            margin-bottom: 28px;
          }

          .intro p {
            font: var(--f-text);
            margin-bottom: 22px;
          }

          .intro ul {
            font: var(--f-text);
            margin-bottom: 32px;
            color: var(--color-primary-alt);
            text-transform: capitalize;
          }

          .description {
            width: 635px;
          }

          .description h2 {
            font: var(--f-h2);
            margin-bottom: 28px;
          }

          .description p {
            font: var(--f-text);
            margin-bottom: 40px;
          }

          .img-container {
            width: 635px;
            height: 400px;
            margin-bottom: 32px;
          }

          .buttons-container {
            display: flex;
            width: 100%;
            justify-content: space-between;
          }

          .pagination {
            height: 130px;
            width: 1110px;
            margin-bottom: 64px;
            border-top: 1px solid var(--color-border-gray);
            border-bottom: 1px solid var(--color-border-gray);
            display: flex;
            align-items: center;
            justify-content: space-between;
            position: relative;
          }

          .pagination-btn {
            font: var(--f-h3);
            padding: 28px 32px;
            display: inline-block;
            transition: 2s;
            height: 130px;
          }
          .pagination-btn.right {
            text-align: right;
          }

          .direction {
            font: var(--f-text);
            display: inline-block;
          }

          .icon {
            position: absolute;
            font-size: 24px;
            top: 48px;
          }
          .icon.right {
            right: 0;
          }

          .divider {
            height: 130px;
            border-right: 1px solid var(--color-border-gray);
            border-left: 1px solid var(--color-border-gray);
          }
        `}
      </style>
    </>
  )
}
