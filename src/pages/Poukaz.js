import React from 'react'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'
import { Helmet } from 'react-helmet';

function Poukaz() {

  return (
    <>
    <Helmet>
        <title>Dárkový poukaz | Lenka Design</title>
        
    </Helmet>
    <Header />
    <div className="pozvanka-block" >
            <p>Pokud máte zájem, je možné si zakoupit dárkový  poukaz.</p>
            <div className="poukazka"></div>
        </div>
    <Footer />
    </>

  )
}

export default Poukaz