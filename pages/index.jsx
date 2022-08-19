import React from 'react'
// import Image from 'next/image'

export default function HomePage() {
  return (
    <>
      <header>
        <img src={'/images.png'} width={1110} height={600}/>
        <div>
          <h1>
            Hola,<br/>
            Soy Cristhian Medina<br/>
            Desarrollador Frontend
          </h1>
          <button>Sobre mí</button>
        </div>
      </header>

      <main>
        <section className='about-me'>
          <img src='/images.png' width={540} height={600}/>
          <h2>Sobre mí</h2>
          <p>
            Soy un desarrollador frontend con experiencia trabajando con JavaScript y ReactJS, 
            Utilizo HTML semantico para mejorar la accesibilidad y el SEO, manejo CSS moderno 
            y algunos de sus preprocesadores como SASS, Less y Stylus. 
            Me gusta trabajar con la modularización de codigo, ya que me permite reutilizarlo y 
            mantenerlo de forma eficaz. Debido a que soy metodico, me esfuerzo por escribir 
            codigo claro y limpio de entender.
            Actualmente resido en Cúcuta, al nororiente de Colombia, es una ciudad alegre con
            gente amable pero de temperamento fuerte (Talvez debido al clima calido).
            Cuando no trabajo, me fascina cocinar junto a mi esposa (realmente soy mas ayudante 
            que cocinero) y dedicarle tiempo con mis dos hijos.
            Me encantaria que vieras mi trabajo.
          </p>
          <button>Portafolio</button>
        </section>

        <section className='contact-me'>
          <h3>¿Estas interesado en que trabajemos juntos?</h3>
          <div></div>
          <button>Contáctame</button>
        </section>
      </main>
    </>
  )
}
