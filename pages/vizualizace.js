import ImageGallery from "../components/galleryImg";
import SluzbyNav from "../components/sluzbyNav";
import VizualizaceData from "../data/Vizualizace.json";
import Head from "next/head";

export default function realizace() {
  const komercniProjekty = VizualizaceData.komercniProjekty.map((item) => {
    return item;
  });
  const celyDum = VizualizaceData.celyDum.map((item) => {
    return item;
  });
  const kuchyne = VizualizaceData.kuchyne.map((item) => {
    return item;
  });
  const obyvaciPokoje = VizualizaceData.obyvaciPokoje.map((item) => {
    return item;
  });
  const detskePokoje = VizualizaceData.detskePokoje.map((item) => {
    return item;
  });
  const loznice = VizualizaceData.loznice.map((item) => {
    return item;
  });
  const koupelny = VizualizaceData.koupelny.map((item) => {
    return item;
  });
  const wellness = VizualizaceData.wellness.map((item) => {
    return item;
  });
  return (
    <>
      <Head>
        <title>Vizualizace interiéru | Lenka Design</title>
      </Head>
      <main>
        <div className="max-width">
          <h1>Vizualizace</h1>

          <div className="description scroll druhy sluzby-main sluzby-wrapper">
            {VizualizaceData.nav.map(({ img, text, link }) => {
              return (
                <SluzbyNav key={text} img={img} title={text} link={link} />
              );
            })}
          </div>
        </div>
        <ImageGallery
          title="Komerční projekty"
          id="komercni_projekty"
          render={komercniProjekty}
        />
        <ImageGallery title="Celý dům" id="cely_dum" render={celyDum} />
        <ImageGallery title="Kuchyně" id="kuchyne" render={kuchyne} />
        <ImageGallery
          title="Obývací pokoje "
          id="obyvaci_pokoje"
          render={obyvaciPokoje}
        />
        <ImageGallery
          title="Dětské pokoje"
          id="detske_pokoje"
          render={detskePokoje}
        />
        <ImageGallery title="Ložnice" id="loznice" render={loznice} />
        <ImageGallery title="Koupelny" id="koupelny" render={koupelny} />
        <ImageGallery title="Wellness" id="wellness" render={wellness} />
      </main>
    </>
  );
}
