import React from 'react'
import Form from '@components/Form'

export default function ContactPage() {
  return (
    <>
      <section className='section-first-contact'>
        <h2 className='title'>Ponte en contacto</h2>
        <div className='content'>
          <p>
            Me encantaría saber en qué estás trabajando y cómo puedo ayudar. Actualmente 
            estoy buscando un nuevo papel y estoy abierto a una amplia gama de oportunidades.
            Mi preferencia sería encontrar un puesto en una empresa con trabajo remoto. 
            Pero también estoy feliz de escuchar acerca de las oportunidades que no se ajustan 
            a esa descripción. Soy una persona trabajadora y positiva que siempre abordará 
            cada tarea con un sentido de propósito y atención al detalle. Por favor, no dude 
            en consultar mis perfiles en línea a continuación y ponerse en contacto con el 
            formulario.
          </p>
          <ul className='social'>
            <li><a href='https://github.com/Cristhian-Medina'>Github</a></li>
            <li><a href='https://twitter.com/crismeca19'>Twitter</a></li>
            <li><a href='https://www.linkedin.com/in/cristhian-medina-c/'>LinkedIn</a></li>
          </ul>
        </div>
      </section>

      <section className='section-form'>
        <h1 className='title'>Contactame</h1>
        <Form  className='content'/>
      </section>

      <style jsx>
        {`
          section {
            background-color: var(--color-secondary-light);
            color: var(--color-text-dark);
            display: flex;
            justify-content: space-between;
            border-top: 1px solid var(--color-secondary-gray);
            padding: 48px 0;
          }

          .title {
            font: var(--f-h2);
          }

          .content {
            width: 60%;
            font: var(--f-text);
          }

          .social {
            display: flex;
            margin-top: 24px;
          }

          .social li {
            margin-right: 15px;
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
