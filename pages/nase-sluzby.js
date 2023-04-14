import SluzbyNav from "../components/sluzbyNav";
import ImageGallery from "../components/sluzbyImg";
import sluzbyData from "../data/sluzbyData.json";
import Head from "next/head";

export default function naseSluzby() {
  const navrhTri = sluzbyData.triNavrh.map((item) => {
    return item;
  });
  const navrhDva = sluzbyData.dvaNavrh.map((item) => {
    return item;
  });
  const homestaging = sluzbyData.homestaging.map((item) => {
    return item;
  });
  const konzultace = sluzbyData.konzultace.map((item) => {
    return item;
  });
  const realizace = sluzbyData.realizace.map((item) => {
    return item;
  });
  return (
    <>
      <Head>
        <title>Seznam poskytovaných služeb | Lenka Design</title>
      </Head>
      <main>
        <div className="sluzby scroll sluzby-wrapper sluzby-second">
          <SluzbyNav
            img="svg/3d-design.svg"
            title="3D návrhy interiérů ikona"
            link="#3d-navrhy-interieru"
          />
          <SluzbyNav
            img="svg/2d-navrh.svg"
            title="2D návrhy dispozic"
            link="#2d-navrhy-interieru"
          />
          <SluzbyNav
            img="svg/realizace.svg"
            title="Realizace"
            link="#realizace"
          />
          <SluzbyNav
            img="svg/konzultace.svg"
            title="Konzultace"
            link="#konzultace"
          />
          <SluzbyNav
            img="svg/home-staging.svg"
            title="Homestaging"
            link="#homestaging"
          />
        </div>
        <ImageGallery
          title="Homestaging"
          text="Homestaging je profesionální příprava nemovitosti k prodeji nebo k pronájmu. Doporučuji ji k rychlejšímu a dražšímu prodeji či pronájmu nemovitosti, pro lepší si představení prostoru a přilákání více potencionálních klientů.  "
          id="homestaging"
          render={homestaging}
        />
        <ImageGallery
          title="3D návrhy interiérů"
          text="3D vizualizace Vám ukáže interiér ještě před tím, nežli se pustíte do realizace. Uvidíte zde lépe rozmístění nábytku, barvy, materiály, tapety, podlahy, nábytek a doplňky, které Vám doporučím. 3D návrh obývacího pokoje"
          id="3d-navrhy-interieru"
          render={navrhTri}
        />
        <ImageGallery
          title="2D návrhy dispozic"
          text="2D návrhy interiéru, jsou varianty dispozičního řešení navrhovaného prostoru. Z nich získáte představu o rozvržení místností, možné změny dispozic v interiéru, velikosti prostoru s možností rozmístění vybavení."
          id="2d-navrhy-interieru"
          render={navrhDva}
        />
        <ImageGallery
          title="Realizace"
          text="V případě Vašeho zájmu doporučím vyzkoušenou firmu na realizaci či jen doporučení truhlářů či řemeslníků např. nábytku na míru, položení podlahy, výmalba,…. Zařídím cenovou nabídku a pomohu i s řízením a dohledem na realizaci."
          id="realizace"
          render={realizace}
        />
        <ImageGallery
          title="Konzultace"
          text="Konzultace bytového designu jsou vhodné na doporučení menších změn v interiéru či doporučení vhodných, praktických změn v projektu od architekta. Provádím je nejčastěji v místě realizace změn či online po dodání podkladů nebo telefonicky. Možno zakoupit dárkový poukaz, s platností 1 rok, na konzultaci či doporučení změn v interiéru. Součástí poukazu je následný souhrn doporučených změn a tipů v elektronické podobě."
          id="konzultace"
          render={konzultace}
        />
      </main>
    </>
  );
}
