import React from 'react'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav>
      <h2>
        <Link href="/">
          <a>CRISTHIAN MEDINA</a>
        </Link>
      </h2>
      <ul>
        <li>
          <Link href="https://csmedinacarrillo.wordpress.com/">
            <a target="_blank">Blog</a>
          </Link>
        </li>
        <li>
          <Link href="/project">
            <a>Proyectos</a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a>Contacto</a>
          </Link>
        </li>
      </ul>

      <style jsx>
        {`
          nav {
            align-items: center;
            display: flex;
            height: 140px;
            justify-content: space-between;
            margin: 10px auto 0;
            max-width: 1110px;
            font-size: 1.2rem;
          }

          h2 {
            color: var(--color-primary-light);
          }

          ul {
            display: flex;
            gap: 40px;
          }

          li a {
            text-transform: uppercase;
            color: black;
            letter-spacing: 2px;
            padding: 9px 5px;
            transition-duration: .8s;
            border: 1px solid transparent;
          }

          li a:hover {
            border: 1px solid var(--color-primary-alt);
            color: var(--color-primary-alt);
          }
        `}
      </style>
    </nav>
  )
}
