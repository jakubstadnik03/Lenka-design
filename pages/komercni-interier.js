import Head from "next/head";
import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
export default function KomercniInterier() {

  const images = [
    { "thumbnail":"img/realizace/komercni_projekty/komersni-realizace-small1.jpeg", "image":"img/realizace/komercni_projekty/komersni-realizace1.jpeg" },
    { "thumbnail":"img/realizace/komercni_projekty/komersni-realizace-small2.jpeg", "image":"img/realizace/komercni_projekty/komersni-realizace2.jpeg" },
    { "thumbnail":"img/realizace/komercni_projekty/komersni-realizace-small3.jpeg", "image":"img/realizace/komercni_projekty/komersni-realizace3.jpeg" },
    { "thumbnail":"img/realizace/komercni_projekty/komersni-realizace-small4.jpeg", "image":"img/realizace/komercni_projekty/komersni-realizace4.jpeg" },
    { "thumbnail":"img/realizace/komercni_projekty/komersni-realizace-small5.jpeg", "image":"img/realizace/komercni_projekty/komersni-realizace5.jpeg" },
    { "thumbnail":"img/realizace/komercni_projekty/komersni-realizace-small6.jpeg", "image":"img/realizace/komercni_projekty/komersni-realizace6.jpeg" },
    { "thumbnail":"img/realizace/komercni_projekty/komersni-realizace-small7.jpeg", "image":"img/realizace/komercni_projekty/komersni-realizace7.jpeg" },
    { "thumbnail":"img/realizace/komercni_projekty/komersni-realizace-small8.jpeg", "image":"img/realizace/komercni_projekty/komersni-realizace8.jpeg" },
    { "thumbnail":"img/realizace/komercni_projekty/komercni_projekty_small1.jpeg", "image":"img/realizace/komercni_projekty/komercni_projekty_large1.jpeg" },
    { "thumbnail":"img/realizace/komercni_projekty/komercni_projekty_small2.jpeg", "image":"img/realizace/komercni_projekty/komercni_projekty_large2.jpeg" },
    { "thumbnail":"img/realizace/komercni_projekty/komercni_projekty_small3.jpeg", "image":"img/realizace/komercni_projekty/komercni_projekty_large3.jpeg" },
    { "thumbnail":"img/realizace/komercni_projekty/komercni_projekty_small4.jpeg", "image":"img/realizace/komercni_projekty/komercni_projekty_large4.jpeg" },
    { "thumbnail":"img/realizace/komercni_projekty/komercni_projekty_small5.jpeg", "image":"img/realizace/komercni_projekty/komercni_projekty_large5.jpeg" },
    { "thumbnail":"img/realizace/komercni_projekty/komercni_projekty_small6.jpeg", "image":"img/realizace/komercni_projekty/komercni_projekty_large6.jpeg" },
    { "thumbnail":"img/realizace/komercni_projekty/komercni_projekty_small7.jpeg", "image":"img/realizace/komercni_projekty/komercni_projekty_large7.jpeg" },
    { "thumbnail":"img/realizace/komercni_projekty/komercni_projekty_small8.jpeg", "image":"img/realizace/komercni_projekty/komercni_projekty_large8.jpeg" },
    { "thumbnail":"img/realizace/komercni_projekty/komercni_projekty_small9.jpeg", "image":"img/realizace/komercni_projekty/komercni_projekty_large9.jpeg" },
    { "thumbnail":"img/realizace/komercni_projekty/komercni_projekty_small10.jpeg", "image":"img/realizace/komercni_projekty/komercni_projekty_large10.jpeg" },
    { "thumbnail":"img/realizace/komercni_projekty/komercni_projekty_small11.jpeg", "image":"img/realizace/komercni_projekty/komercni_projekty_large11.jpeg" }
  ]
  return (
    <>
      <Head>
        <title>
          Návrh komerčních interiérů - Liberec a okolí | Lenka Design
        </title>
      </Head>
      <div className="max-width text-block types">
        <h1>Návrh komerčních interiérů - Liberec a okolí</h1>
        <h2>Co Vám mohu nabídnout?</h2>
        <p>
          Do kanceláří, recepcí, prodejen, restaurací, penzionů, kaváren,
          kadeřnictví, wellness či dalších veřejných prostorů navrhnu takové
          řešení, které Vám bude funkčně, efektně sloužit, a především podtrhne
          image Vaší firmy. Navrhnu Vám adekvátní prostory pro Váš business.{" "}
        </p>
        <p>
          Při návrhu komerčních interiérů firmy kladu důraz na celkový koncept
          firmy. Je důležité, aby se zaměstnanci v práci cítili dobře a Vaše
          firma i Vaším interiérem oslovila Vaše klienty. Do každého návrhu
          komerčního interiéru vkládám přidanou hodnotu a tzv. WOW efekt, který
          umožní zanechat v zákazníkovi nejlepší možný první dojem a tím si
          firmu uchovat v paměti.
        </p>
        <p>
          Pro komerční interiér nabídnu optimální dispoziční řešení, nábytek i
          úložné prostory s ohledem na Vaše pracovní zaměření, Vaše možnosti a
          požadavky na konkrétní prostor. Materiály pro komerční prostory se
          liší od soukromých objektů. Zde beru důraz na funkčnost, praktičnost a
          kvalitu materiálů. Dodržuji požadavky např. na odolnost proti
          opotřebení, odolnost proti oděru, protiskluznost, zátěžovost,
          protipožární testy a nehořlavost použitých materiálů.
        </p>
        <p>
          Ráda přináším i do komerčních interiérů trochu přírody či prvky, které
          zútulní pracovní prostor, aby se zde člověk cítil dobře a příjemně a
          do zaměstnání, kde tráví spoustu času chodil rád😊
        </p>
      </div>
      <section className="max-width max-width-gallery">
        <h2>Fotogalerie komerčních interiérů</h2>
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
