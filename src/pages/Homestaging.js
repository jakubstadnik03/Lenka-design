import React from 'react'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'
import { Helmet } from 'react-helmet';
function Homestaging() {
  return (
    <>
    <Helmet>
        <title>Homestaging | Lenka Design</title>
        
    </Helmet>
    <Header />
    <div className=" max-width text-block types"> 
        <h1>Homestaging - Liberec</h1>    
            <h2>Co Vám mohu nabídnout?</h2>
           <p>Home staging je stále podceňován a mnozí lidé si myslí, že jde jen o úklid.😊 Též se nejedná o zakrývání vad a nedostatků, jak si mnozí myslí. Ve skutečnosti však jde o jeden z nejlepších marketingových nástrojů při prodeji či pronájmu nemovitosti. Ti, kteří ho umí využít tak získají obrovský náskok před konkurencí. Cílem Home stagingu je, aby nemovitost oslovila co možná nejširší okruh potenciálních zájemců. Je to profesionální příprava nemovitosti k prodeji či pronájmu. Je tedy i dobrou alternativou k nákladným rekonstrukcím, jelikož v lepším světle dokáže odprezentovat i stávající stav vybavené nemovitosti.</p>
           <p>Home staging je možné zrealizovat při prodeji nemovitosti v jakémkoliv stavu, ať se jedná o byt v původním stavu, byt v novostavbě, starší nebo zrekonstruovaný byt v cihlové i panelové zástavbě či rodinný dům. Je možné ho realizovat v nemovitosti vybavené, nevybavené, i v nemovitostech aktuálně obývaných.
 
        </p>
        <p>Potenciální zákazník po použití Home stagingu si udělá lepší představu o bytě, o jeho využití, prostoru a možnosti vybavení. Často se pak prodá byt i s doporučeným vybavením.
            Home staging je vhodný aplikovat také ve vzorových bytech. Vhodným vybavením jednoho bytu, jako ukázkového, klienti dostanou lepší představu o možnosti vybavení a prostoru potenciálního nového bytu a byty se pak prodávají rychleji a za lepší cenu.
        </p>
        <p>Při návrhu Home stagingu zpracuji seznam doporučených úprav a změn. Poté připravím seznam a odkazy na doporučené vybavení dle finančních možností klienta. Též zařídím případné zapůjčení nábytku, dekorací či doplňků a jejich nainstalování. 
        </p>
        <p>Připravím Vám nemovitost, kterou bude chtít každý!
 
        </p>
        
    </div>
       
    <Footer />
    </>
  )
}

export default Homestaging