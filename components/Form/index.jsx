import React from 'react'
import { useForm, ValidationError } from '@formspree/react'

import Input from '@components/Input'
import Button from '@components/Button'

const Form = () => {
  const [state, handleSubmit] = useForm("meqdokpe")

  if (state.succeeded) {
    return (
      <div className='contact-sent'>
        <h2>Gracias por contactarme!</h2>
        <p>Me pondre en contacto con tigo lo mas pronto posible.</p>
        <p>Ten un excelente día!</p>
        <style jsx>
        {`
          .contact-sent {
            text-align: center;
          }
          .contact-sent h2 {
            font: var(--f-h2);
          }
          .contact-sent p {
            font: var(--f-text);
          }
        `}
      </style>
      </div>
    )
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Nombre</label>
      <Input
        type="text"
        name="name"
        id="name"
        placeholder="¿Cual es tu nombre?"
        required={true}
      />

      <label htmlFor="email">Correo</label>
      <Input
        type="email"
        name="email"
        id="email"
        placeholder="¿Cual es tu correo?"
        required={true}
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />

      <label htmlFor="message">Mensaje</label>
      <Input
        type="textarea"
        name="message"
        id="message"
        placeholder="¿Como te puedo ayudar?"        
        required={true}
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />

      <Button
        className="secondary"
        type="submit"
        value={!state.submitting ? "Enviar mensaje" : "Enviando..."}
        disabled={state.submitting}
      />

      <style jsx>
        {`
          form {
            background-color: var(--color-secondary-light);
            color: var(--color-text-dark);
            display: flex;
            flex-direction: column;
            width: 60%;
          }

          label {
            font: var(--f-input-title);
            margin-bottom: 8px;
          }

          input, textarea {
            font: var(--f-input-body);
            border: none;
            background-color: var(--color-secondary-gray);
            color: var(--color-text-dark);
            padding: 9px 16px;
            margin-bottom: 24px;
          }

          @media screen and (max-width: 900px) {
          }

          @media screen and (max-width: 500px) {
          }
        `}
      </style>
    </form>
  )
}

export default Form
