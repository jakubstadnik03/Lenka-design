import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import ImageGlider from './ImageGlider'
import Sections from './Sections'


function Home() {
  return (
      <>
      <Header />
    <main>
      <ImageGlider />
      <Sections />
    </main>
    <Footer />
    </>
  )
}

export default Home