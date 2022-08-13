import Link from 'next/link'

export default function Custom404() {
  return (
    <>
      <h1>404 -  </h1>
      <p>Esta Pagina esta fuera de servicio</p>
      <Link href="/">
        <a>Volver al Inicio</a>
      </Link>
    </>
  )
}
