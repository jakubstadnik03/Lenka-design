import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import ImageGlider from './ImageGlider'
import Sections from './Sections'
import { Helmet } from 'react-helmet';


function Home() {
  return (
      <>
      <Helmet>
      <title>Návrh interiéru Liberec, interiérový design | Lenka Design</title>
      </Helmet>
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