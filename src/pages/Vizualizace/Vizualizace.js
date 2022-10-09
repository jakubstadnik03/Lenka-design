import React from 'react'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import '../Realizace/realizace.css'
import ImageGallery from './ImageGallery'
import RealizaceNav from './VizualizaceNav'
import RealizaceData from './Vizualizace.json'
import { Helmet } from 'react-helmet';

function Vizualizace() {

  const komercniProjekty = RealizaceData.komercniProjekty.map((item) => {
    return item

  })

  const celyDum = RealizaceData.celyDum.map((item) => {
    return item

  })
  const kuchyne = RealizaceData.kuchyne.map((item) => {
    return item

  })
  const obyvaciPokoje = RealizaceData.obyvaciPokoje.map((item) => {
    return item

  })
  const detskePokoje = RealizaceData.detskePokoje.map((item) => {
    return item

  })
  const loznice = RealizaceData.loznice.map((item) => {
    return item

  })
  const koupelny = RealizaceData.koupelny.map((item) => {
    return item

  })
  const wellness = RealizaceData.wellness.map((item) => {
    return item

  })



  return (
    <>
    <Helmet>
        <title>Vizualizace interiéru  | Lenka Design</title>
    </Helmet>
    <Header />
    <main>
      <RealizaceNav />
      <ImageGallery title="Komerční projekty" id="komercni_projekty" render={komercniProjekty} />
      <ImageGallery title="Celý dům" id="cely_dum" render={celyDum} />
      <ImageGallery title="Kuchyně" id="kuchyne" render={kuchyne} />
      <ImageGallery title="Obývací pokoje " id="obyvaci_pokoje" render={obyvaciPokoje} />
      <ImageGallery title="Dětské pokoje" id="detske_pokoje" render={detskePokoje} />
      <ImageGallery title="Ložnice" id="loznice" render={loznice} />
      <ImageGallery title="Koupelny" id="koupelny" render={koupelny} />
      <ImageGallery title="Wellness" id="wellness" render={wellness} />
    </main>

    <Footer />
    </>
  )
}

export default Vizualizace