import React from 'react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer>
      <div>
        <ul className='nav-pages'>
          <li>
            <Link href="/">
              <a>Cristhian Medina</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>Home</a>
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

        <ul className='nav-social'>
          <li>
            <a href="https://github.com/Cristhian-Medina" target="_blank">GitHub</a>
          </li>
          <li>
            <a href="https://twitter.com/crismeca19" target="_blank">Twitter</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/cristhian-medina-c/" target="_blank">LinkedIn</a>
          </li>
          <li>
            <a href="https://csmedinacarrillo.wordpress.com/" target="_blank">Blog</a>
          </li>
        </ul>
      </div>

      <style jsx>
        {`
          footer {
            font-size: 1.2rem;
            background-color: var(--color-primary-alt);
            color: var(--color-secondary-light);
          }
          
          footer div {
            min-height: 80px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            margin: 0 auto;
            padding: 10px;
            max-width: 1110px;
          }

          .nav-pages,
          .nav-social {
            display: flex;
            gap: 40px;
          }

          .nav-pages li a{
            text-transform: uppercase;
            letter-spacing: 2px;
            padding: 9px 5px;
            transition-duration: .8s;
            border: 1px solid transparent;
          }

          .nav-pages li a:hover {
            border-bottom: 1px solid var(--color-secondary-light);
          }

          @media screen and (max-width: 900px) {
            .nav-pages,
            .nav-social {
              width: 100%;
              justify-content: center;
              margin: 20px 0;
            }
          }

          @media screen and (max-width: 500px) {
            .nav-pages {
              flex-direction: column;
              align-items: center;
            }
          }
        `}
      </style>
    </footer>
  )
}
