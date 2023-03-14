import React from 'react'
import Link from 'next/link'

const Button = ({className, type, value, href, disabled}) => {
  if(type === 'link') {
    return (
      <>
        <Link href={href}>
          <a className={className}>{value}</a>
        </Link>

        <style jsx>
          {`
            a {
              display: block;
              border: none;
              outline: none;
              text-transform: uppercase;
              font: var(--f-button);
              letter-spacing: 2px;
              padding: 16px 0;
              text-align: center;
              transition: background-color .3s;
            }

            .primary {
              background-color: var(--color-primary-dark);
              color: var(--color-secondary-light);
              width: 200px;
            }

            .primary:hover {
              background-color: var(--color-primary-light);
            }

            .secondary {
              background-color: var(--color-secondary-light);
              color: var(--color-primary-dark);
              border: 1px solid var(--color-primary-dark);
              width: 162px;
            }

            .secondary:hover {
              background-color: var(--color-primary-dark);
              color: var(--color-secondary-light);
            }

            .secondary::disabled {
              background-color: var(--color-secondary-gray);
              color: var(--color-secondary-gray);
              border: 1px solid var(--color-secondary-gray);
            }
          `}
        </style>
      </>
    )
  }

  return (
    <>
      <input
        className={className}
        type={type}
        value={value}
        disabled={disabled}
      />

      <style jsx>
        {`
          input {
            border: none;
            outline: none;
            text-transform: uppercase;
            font: var(--f-button);
            letter-spacing: 2px;
            padding: 16px 0;
            transition: background-color .3s;
          }

          .primary {
            background-color: var(--color-primary-dark);
            color: var(--color-secondary-light);
            width: 200px;
          }

          .primary:hover {
            background-color: var(--color-primary-light);
          }

          .primary::disabled {
            background-color: var(--color-secondary-gray);
          }

          .secondary {
            background-color: var(--color-secondary-light);
            color: var(--color-primary-dark);
            border: 1px solid var(--color-primary-dark);
            width: 162px;
          }

          .secondary:hover {
            background-color: var(--color-primary-dark);
            color: var(--color-secondary-light);
          }

          .secondary::disabled {
            background-color: var(--color-secondary-gray);
            color: var(--color-secondary-gray);
            border: 1px solid var(--color-secondary-gray);
          }
        `}
      </style>
    </>
  )
}

export default Button
