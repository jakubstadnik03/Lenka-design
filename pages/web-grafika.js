import Head from "next/head";
import { useEffect, useState, React } from "react";
import Carousel from "react-bootstrap/Carousel";
import SluzbyNav from "../components/sluzbyNav";
import webData from "../data/webData.json";
import ImageGallery from "../components/galleryImg";

export default function Realizace() {
  // window.addEventListener("load", function (e) {
  //   window.dispatchEvent(new Event("resize"));
  // });

  const slideImage = [
    {
      url: "img/web/laptop_mockup1.png",
    },
    {
      url: "img/web/laptop_mockup2.png",
    },
    {
      url: "img/web/laptop_mockup3.png",
    },
    {
      url: "img/web/business_card5.jpg",
    },
    {
      url: "img/web/business_card.jpg",
    },
  ];
  const plakat = webData.plakat.map((item) => {
    return item;
  });
  const logo = webData.logo.map((item) => {
    return item;
  });
  const businessCard = webData.businessCard.map((item) => {
    return item;
  });
  const web = webData.web.map((item) => {
    return item;
  });
  return (
    <>
      <Head>
        <title>Tvorba webu | Lenka Design</title>
      </Head>
      <main className="max-width">
        <div className="herowb">
          <div className="herowb-text">
            <h1>
              Profesionální návrh a design webových stránek, či jiné grafiky na
              míru
            </h1>
            <p>
              Jste začínající firma? A potřebujete web a grafiku co nejdříve, ať
              můžete začít vydělávat?
            </p>
            <p>
              O vše se postaráme od designu loga, nafocení produktů, grafiky
              webu a nakódování celé struktury webu.
            </p>
          </div>
          <div className="slide-container slide-small">
            <Carousel style={{ maxWidth: "600px" }}>
              {slideImage.map((slideImage, index) => (
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={slideImage.url}
                    alt="First slide"
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        </div>

        <section className="max-width">
          <h2>Naše služby</h2>
          <div className="sluzby scroll sluzby-wrapper sluzby-second">
            <SluzbyNav
              title="Tvorba webu"
              link="#tvorba-webu"
              img="img/web/web.svg"
            />
            <SluzbyNav
              title="Tvorba grafiky"
              link="#tvorba-grafiky"
              img="img/web/grafika.svg"
            />
            <SluzbyNav
              title="Fotografování"
              link="#fotografovani"
              img="img/web/foto.svg"
            />
          </div>
        </section>
        <article id="tvorba-webu">
          <div className="article-title">
            <h2>Tvorba Webových stránek</h2>
            <p className="title-text">
              Navrhneme design, díky kterému váš web vynikne. Zapamatovatelné
              firemní stránky podpoří viditelnost značky a odliší vás od
              konkurence.
            </p>
          </div>
          <section>
            <h2>Jak Probíhá spolupráce?</h2>
            <div className="d-flex overflow-auto m-auto">
              <div className="spoluprace-section flex-shrink-0">
                <span className="number">1</span>
                <h3>Konzultace</h3>
                <p>
                  V této fázi se s klientem setkáváme a diskutujeme o jeho
                  požadavcích na webovou stránku. Můžeme se ptát na cílovou
                  skupinu, cíle, které chce webová stránka splnit, požadavky na
                  obsah a funkce a další specifika. Zde je důležité, abychom si
                  ujasnili všechny potřebné informace a dohodli se na tom, co je
                  potřeba pro tvorbu stránky.
                </p>
              </div>
              <div className="spoluprace-section flex-shrink-0">
                <span className="number">2</span>
                <h3>Návrh</h3>
                <p>
                  Po konzultaci začínáme s tvorbou návrhu stránky. Můžeme využít
                  designového nástroje, který umožňuje vytváření náhledů
                  stránky, a to jak pro mobilní, tak desktopovou verzi. Během
                  této fáze se také dohodneme na barevném schématu, typografii,
                  umístěním prvků a celkovém vzhledu stránky.
                </p>
              </div>
              <div className="spoluprace-section flex-shrink-0">
                <span className="number">3</span>
                <h3>Vývoj</h3>
                <p>
                  Po dokončení návrhu se začíná s kódováním webové stránky.
                  Používáme moderní technologie a metody vývoje, abychom
                  zajistili, že webová stránka bude rychlá, responzivní a
                  bezpečná. Pracujeme na tvorbě webových stránek s použitím
                  nejnovějších nástrojů a frameworků, jako jsou React, Next.js a
                  další.
                </p>
              </div>
              <div className="spoluprace-section flex-shrink-0">
                <span className="number">4</span>
                <h3>Testování</h3>
                <p>
                  Po dokončení vývoje provádíme testování, abychom zajistili, že
                  stránka funguje správně a bez problémů. Testujeme všechny
                  funkce stránky a ověřujeme, že všechny odkazy fungují, stránky
                  se načítají rychle a responzivita odpovídá požadavkům.
                </p>
              </div>
              <div className="spoluprace-section flex-shrink-0">
                <span className="number">5</span>
                <h3>Schválení</h3>
                <p>
                  Po úspěšném dokončení testů je čas na schválení stránky
                  klientem. Zde může klient dát zpětnou vazbu na webovou stránku
                  a pokud je potřeba, provedeme nějaké úpravy. Pokud je klient s
                  výsledkem spokojený, můžeme pokračovat v další fázi.
                </p>
              </div>
              <div className="spoluprace-section flex-shrink-0">
                <span className="number">6</span>
                <h3>Nasazení</h3>
                <p>
                  Po schválení webové stránky se přistupuje k jejímu nasazení.
                  Nahráváme webovou stránku na hostingovou službu a zajišťujeme,
                  že je stránka dostupná a správně se načítá. Tuto fázi
                  ukončujeme, když je webová stránka úspěšně nasazena a
                  připravena k použití.
                </p>
              </div>
            </div>
          </section>
          <section className="gallery-web">
            <div className="sluzba max-width" key={web.title}>
              <div className="sluzba-text-wrapper">
                <h2 id={web.id} className="sluzba-title">
                  {web.title}
                </h2>
              </div>
              {web.map((item, index) => (
                <a href={item.image} key={index} target="_blank">
                  <img
                    src={item.thumbnail}
                    className="gallery-img"
                    loading="lazy"
                  />
                </a>
              ))}
            </div>
            {/* <ImageGallery title="Reference" render={web} /> */}
          </section>
        </article>
        <article id="tvorba-grafiky">
          <div className="article-title">
            <h2>Tvorba grafiky</h2>
            <p>
              Také nabízíme profesionální tvorbu reklamní grafiky. Pomůžeme Vám
              vytvořit poutavé plakáty, vizitky, loga a reklamy, které budou
              oslovovat Vaše zákazníky. Díky našemu talentovanému týmu grafiků,
              se postaráme o to, aby Vaše značka byla nejen viditelná, ale i
              zapamatovatelná. Nabízíme konkurenceschopné ceny a široké spektrum
              služeb, takže pokud hledáte způsob, jak vystoupit z davu, obraťte
              se na nás. Společně dosáhneme skvělých výsledků.
            </p>
          </div>
          <section className="gallery-web">
            <div>
              <ImageGallery
                title="Design vizitek"
                text="Nezapomenutelná první dojem - to je to, co Vám kvalitní vizitka umožní. Ať už se jedná o podnikatele, profesionály nebo studenty, kteří hledají novou práci, kvalitní vizitka je nezbytností. Proto jsme zde, abychom Vám pomohli s tvorbou vizitek, které Vás budou reprezentovat tak, jak si zasloužíte. S našimi moderními designovými prvky a kreativními nápady, budou Vaše vizitky stát v řadě a vyniknou nad ostatními.
  Zajistíme vše od návrhu až po tisk."
                id="design-vizitek"
                render={businessCard}
              />
              <ImageGallery
                title="Design loga"
                text="Vaše značka potřebuje silné logo, které bude snadno rozpoznatelné a reprezentovat Vaše hodnoty. S naším kreativním přístupem a moderními designovými trendy Vám pomůžeme vytvořit logo, které bude zapamatovatelné a vynikne nad ostatními. Kontaktujte nás a vytvořte si s námi své dokonalé logo."
                id="design-loga"
                render={logo}
              />
              <ImageGallery
                title="Design plakátů"
                text="Přitáhněte pozornost svých zákazníků s našimi efektivními a krásnými plakáty. Naši talentovaní grafici Vám pomohou s tvorbou kreativních nápadů, které odpovídají Vašim potřebám a zvýší zájem o Vaši značku. Kontaktujte nás a nechte nás vytvořit pro Vás dokonalý plakát."
                id="design-vizitek"
                render={plakat}
              />
            </div>
          </section>
        </article>
      </main>
    </>
  );
}
