import React from 'react'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import SluzbyNav from './SluzbyNav'
import './sluzby.css'
import ImageGallery from './ImageGallery'
import sluzbyData from './sluzbyData.json'
import { Helmet } from 'react-helmet';





function NaseSluzby() {

  const navrhTri = sluzbyData.triNavrh.map((item) => {
    return item

})
const navrhDva = sluzbyData.dvaNavrh.map((item) => {
    return item

})
const homestaging = sluzbyData.homestaging.map((item) => {
    return item

})
const konzultace = sluzbyData.konzultace.map((item) => {
    return item

})
const realizace = sluzbyData.realizace.map((item) => {
    return item

})

  return (
    <>
    <Helmet>
        <title>Seznam poskytovaných služeb | Lenka Design</title>
    </Helmet>
    <Header />
    <main>
      <SluzbyNav />
      <ImageGallery title="Homestaging" text="Homestaging je profesionální příprava nemovitosti k prodeji nebo k pronájmu. Doporučuji ji k rychlejšímu a dražšímu prodeji či pronájmu nemovitosti, pro lepší si představení prostoru a přilákání více potencionálních klientů.  " id="homestaging" render={homestaging}/>
      <ImageGallery title="3D návrhy interiérů" text="3D vizualizace Vám ukáže interiér ještě před tím, nežli se pustíte do realizace. Uvidíte zde lépe rozmístění nábytku, barvy, materiály, tapety, podlahy, nábytek a doplňky, které Vám doporučím. 3D návrh obývacího pokoje" 
    id="3d-navrhy-interieru" render={navrhTri}
      />
      <ImageGallery title="2D návrhy dispozic" text="2D návrhy interiéru, jsou varianty dispozičního řešení navrhovaného prostoru. Z nich získáte představu o rozvržení místností, možné změny dispozic v interiéru, velikosti prostoru s možností rozmístění vybavení."
   id="2d-navrhy-interieru" render={navrhDva} />
      <ImageGallery title="Realizace" text="V případě Vašeho zájmu doporučím vyzkoušenou firmu na realizaci či jen doporučení truhlářů či řemeslníků např. nábytku na míru, položení podlahy, výmalba,…. Zařídím cenovou nabídku a pomohu i s řízením a dohledem na realizaci."
    id="realizace" render={realizace} />
      <ImageGallery title="Konzultace" text="Konzultace bytového designu jsou vhodné na doporučení menších změn v interiéru či doporučení vhodných, praktických změn v projektu od architekta. Provádím je nejčastěji v místě realizace změn či online po dodání podkladů nebo telefonicky. Možno zakoupit dárkový poukaz, s platností 1 rok, na konzultaci či doporučení změn v interiéru. Součástí poukazu je následný souhrn doporučených změn a tipů v elektronické podobě." 
   id="konzultace" render={konzultace}/>
    </main>
    <Footer />
    </>
  )
}

export default NaseSluzby