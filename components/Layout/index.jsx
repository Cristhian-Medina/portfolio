import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className='layout-container'>
        {children}
      </main>
      <Footer />

      <style jsx>
        {`
          .layout-container {
            position: relative;
            display: flex;
            flex-direction: column;
            max-width: 1110px;
            margin: 0 auto;
            min-height: 90vh;
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

export default Layout
