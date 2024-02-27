import Head from "next/head";
import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
function BytInterier() {
  const images = [
    {
      alt: "Design bytového interiéru Liberec",
      image: "img/durychova/durychova-large4.webp",
      thumbnail: "img/durychova/durychova-large4.webp",
    },
    {
      alt: "Design bytového interiéru Liberec",
      image: "img/durychova/durychova-large5.webp",
      thumbnail: "img/durychova/durychova-large5.webp",
    },
    {
      alt: "Design bytového interiéru Liberec",
      image: "img/durychova/durychova-large6.webp",
      thumbnail: "img/durychova/durychova-large6.webp",
    },
    {
      alt: "Design bytového interiéru Liberec",
      image: "img/durychova/durychova-large7.webp",
      thumbnail: "img/durychova/durychova-large7.webp",
    },
    {
      alt: "Design bytového interiéru Liberec",
      image: "img/durychova/durychova-large8.webp",
      thumbnail: "img/durychova/durychova-large8.webp",
    },
    {
      alt: "Design bytového interiéru Liberec",
      image: "img/durychova/durychova-large9.webp",
      thumbnail: "img/durychova/durychova-large9.webp",
    },
    {
      alt: "Design bytového interiéru Liberec",
      image: "img/durychova/durychova-large10.webp",
      thumbnail: "img/durychova/durychova-large10.webp",
    },
    {
      alt: "Design bytového interiéru Liberec",
      image: "img/durychova/durychova-large11.webp",
      thumbnail: "img/durychova/durychova-large11.webp",
    },
    {
      alt: "Design bytového interiéru Liberec",
      image: "img/durychova/durychova-large1.webp",
      thumbnail: "img/durychova/durychova-large1.webp",
    },
    {
      alt: "Design bytového interiéru Liberec",
      image: "img/durychova/durychova-large0.webp",
      thumbnail: "img/durychova/durychova-large0.webp",
    },
  ];
  return (
    <>
      <Head>
        <title>Návrh bytových interiérů - Liberec a okolí | Lenka Design</title>
      </Head>
      <div className="max-width types">
        <h1>Návrh bytových interiérů - Liberec a okolí</h1>
        <h2>Co Vám mohu nabídnout?</h2>
        <p>
          Bytový design zahrnuje celou řadu aspektů, které pak ovlivní náš
          celkový styl bydlení a vytvoří atmosféru v interiéru. Důležité je si
          uvědomit, že nejde jen o estetické řešení interiéru, ale také o
          praktičnost a funkční využití. V bytovém designu jsou důležité použité
          materiály, vhodné využití prostoru, úložné prostory, umístění nábytku,
          stínění oken, doplňky, osvětlení i dekorace.
        </p>
        <p>
          Design v návrhu interiéru určují především použité materiály a jejich
          vzájemné sladění. Materiály volím nejen v souladu k ostatním již
          použitým materiálům, ale také k celkovému stylu v interiéru, nebo typu
          budovy. Dále se snažím vyjít vstříc klientovi, které materiály
          upřednostňuje a cítí se s nimi lépe. Materiály jsou důležité jak na
          podlahu, stěny, nábytek, tak ale i na doplňky a dekoraci. Pokud je to
          možné, tak se snažím klientům vzorky materiálů zařídit a ukázat,
          abyste měli co nejlepší představu o svém budoucím interiéru ještě před
          samotnou realizací.
        </p>
        <p>
          Design v interiéru také tvoří tvary. Jsou specifické pro určité styly,
          ale mají hlavně i funkční význam. Například v menších prostorách v
          průchozích zónách doporučuji rohy oblé, abychom se vyhnuli narážení do
          rohů. K těmto případům je vhodná i zakázková výroba nábytku která
          umožňuje širší řešení pro konkrétní interiér. Tvary jsou ale také
          důležité u tapet, koberců nebo vzorů na textilu.
        </p>
        <p>
          Bytový design je také třeba sjednotit správným výběrem dekoračních
          prvků, které Vám pro konkrétní interiér v návrhu vždy doporučím,
          sepíšu a odkážu Vás, kde který produkt pořídit. Tato prvky se dají
          časem obměňovat a dokážou zcela změnit ráz prostoru a mnohdy i jeho
          celkový styl. Např. Retro, Provence, Street, Minimalismus apod.
        </p>
        <p>
          Návrh interiéru tvoří nejen dispoziční řešení, ve kterém je vidět
          rozmístění hlavních částí interiéru a nábytku, ale dále je důležité
          vidět rozmístění jednotlivých prvků, materiálů, tapet, barev,
          osvětlení a doplňků. To lépe ukáže až 3D vizualizace.
        </p>
        <p>
          Služby bytového designéra obsahují návrh dispozičního řešení, 3D
          vizualizace, od výběru materiálů, barev přes výběr konkrétních prvků,
          návrh elektroinstalace, výkresy pro truhláře, doporučení dodavatelů,
          případně doporučení realizační firmy.
        </p>
      </div>
      <section className="max-width max-width-gallery">
        <h2>Fotogalerie realizace bytových interiérů</h2>
        <LightGallery speed={500} plugins={[lgThumbnail, lgZoom]}>
          {images.map((item, index) => (
            <a href={item.image} key={index}>
              <img
                src={item.thumbnail}
                className="gallery-img"
                loading="lazy"
              />
            </a>
          ))}
        </LightGallery>
      </section>
    </>
  );
}

export default BytInterier;
