import React from 'react'

const Input = ({type, name, id, placeholder, required}) => {
  if(type==="textarea") {
    return (
    <>
      <textarea
        name={name}
        id={id}
        placeholder={placeholder}
        required={required}
      />

      <style jsx>
        {`
          textarea {
            background-color: var(--color-secondary-gray);
            color: var(--color-text-dark);
            border: 1px solid var(--color-secondary-gray);
            width: 100%;
            padding: 9px 16px;
            font: var(--f-input-body);
            margin-bottom: 24px;
            outline: none;
            transition: border .3s;
          }

          textarea:hover {
            border: 1px solid var(--color-primary-alt);
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
  return (
    <>
      <input
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        required={required}
      />

      <style jsx>
        {`
          input {
            background-color: var(--color-secondary-gray);
            color: var(--color-text-dark);
            border: 1px solid var(--color-secondary-gray);
            width: 100%;
            padding: 9px 16px;
            font: var(--f-input-body);
            margin-bottom: 24px;
            outline: none;
            transition: border .3s;
          }

          input:hover {
            border: 1px solid var(--color-primary-alt);
          }

          .error {
            border: 1px solid var(--color-secondary-error);
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

export default Input
