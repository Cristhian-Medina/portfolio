import React from 'react'
import Image from 'next/image'

import Button from '@components/Button'
import banner from '@images/banner.jpg'
import user from '@images/user.jpg'

export default function HomePage() {
  return (
    <>
      <header>
        <Image src={banner} width={1110} height={600}/>
        <div>
          <h1>
            Hola 👋, Soy <br/>
            Cristhian Medina<br/>
            Desarrollador Frontend
          </h1>
        </div>
      </header>

      <main id="about">
        <section className="about-me">
          <Image src={user} width={540} height={600}/>
          <div>
            <h2>Sobre mí</h2>
            <p>
              Soy un desarrollador frontend con experiencia trabajando con JavaScript y ReactJS, 
              Manejo HTML semantico, CSS moderno y el preprocesador SASS. 
              Me gusta trabajar con la modularización de codigo, ya que me permite reutilizarlo y 
              mantenerlo de forma eficaz. Debido a que soy metodico, me esfuerzo por escribir 
              codigo claro y limpio de entender.
              Actualmente resido en Cúcuta,  es una ciudad alegre con
              gente amable pero de temperamento fuerte (Talvez debido al clima calido).
              Cuando no trabajo, me fascina cocinar junto a mi esposa (realmente soy mas ayudante 
              que cocinero) y dedicarle tiempo con mis dos hijos.
              Me encantaria que vieras mi trabajo.
            </p>
            <Button
              className="primary"
              type="link"
              value="Portafolio"
              href="/project"
            />
          </div>
        </section>

        <section className="contact-me">
          <h2>¿Estas interesado en que trabajemos juntos?</h2>
          <hr/>
          <Button
            className="primary"
            type="link"
            value="Contáctame"
            href="/contact"
          />
        </section>
      </main>

      <style jsx>
        {`
          header {
            background-color: var(--color-secondary-light);
            color: var(--color-text-dark);
            position: relative;
            height: 600px;
            margin-bottom: 112px;
          }

          header img {
            width: 100%;
            height: 100%;
            background-color: var(--color-primary-alt);
          }

          header div {
            position: absolute;
            bottom: 0;
            width: 445px;
            background-color: var(--color-secondary-light);
            padding: 32px 50px 0 0;
          }

          header h1 {
            display: inline-block;
            font: var(--f-h1);
            letter-spacing: -0.45px;
            margin-bottom: 27px;
          }

          .about-me {
            margin: 0 auto;
            margin-bottom: 188px;
            width: 1015px;
            height: 600px;
            display: flex;
            justify-content: space-between;
          }

          .about-me div {
            width: 400px;
            height: 600px;
            padding: 36px 0 0;
            border-top: 1px solid var(--color-border-gray);
            border-bottom: 1px solid var(--color-border-gray);
          }

          .about-me h2 {
            font: var(--f-h2);
            margin-bottom: 28px;
          }

          .about-me p {
            font: var(--f-text);
            margin-bottom: 24px;
          }

          .contact-me {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            height: 84px;
            margin-bottom: 150px;
          }

          .contact-me h2 {
            width: 450px;
            font: var(--f-h2);
            color: var(--color-primary-alt);
          }

          .contact-me hr {
            width: 400px;
            border-top: 1px solid var(--color-border-gray);
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
