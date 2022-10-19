import React from 'react'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import './realizace.css'
import ImageGallery from '../Realizace/ImageGallery'
import RealizaceNav from './RealizaceNav'
import RealizaceData from './Realizace.json'
import { Helmet } from 'react-helmet';

function Realizace() {

  const komercniProjekty = RealizaceData.komercniProjekty.map((item) => {
    return item
  })
  const malyByt = RealizaceData.malyByt.map((item) => {
    return item
  })
  const celyDum = RealizaceData.celyDum.map((item) => {
    return item
  })
  const homestaging = RealizaceData.homestaging.map((item) => {
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
  const chodby = RealizaceData.chodby.map((item) => {
    return item
  })
  const nabytekNaMiru = RealizaceData.nabytekNaMiru.map((item) => {
    return item
  })

  return (
    <>
    <Helmet>
        <title>Realizace interiéru  | Lenka Design</title>
    </Helmet>
    <Header />
    <main>
      <RealizaceNav />
      <ImageGallery title="Komerční projekty" id="komercni_projekty" render={komercniProjekty} />
      <ImageGallery title="Malý byt" id="maly_byt" render={malyByt} />
      <ImageGallery title="Celý dům" id="cely_dum" render={celyDum} />
      <ImageGallery title="Homestaging" id="homestaging" render={homestaging} />
      <ImageGallery title="Kuchyně" id="kuchyne" render={kuchyne} />
      <ImageGallery title="Obývací pokoje " id="obyvaci_pokoje" render={obyvaciPokoje} />
      <ImageGallery title="Dětské pokoje" id="detske_pokoje" render={detskePokoje} />
      <ImageGallery title="Ložnice" id="loznice" render={loznice} />
      <ImageGallery title="Koupelny" id="koupelny" render={koupelny} />
      <ImageGallery title="Wellness" id="wellness" render={wellness} />
      <ImageGallery title="Chodby" id="chodby" render={chodby} />
      <ImageGallery title="Nábytek na míru" id="nabytek_na_miru" render={nabytekNaMiru} />
    </main>
    <Footer />
    </>
  )
}

export default Realizace