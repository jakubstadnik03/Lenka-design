import ReferenceComponent from "../components/ReferenceComponent";
import Head from "next/head";

function Reference() {
  return (
    <>
      <Head>
        <title>Reference od klientů | Lenka Design</title>
      </Head>
      <main>
        <div className="max-width">
          <h1>Reference / Média</h1>
          <p>Napsali o mě...</p>
          <p>Celé články stáhnete poklepáním na obrázek...</p>
          <div className="chalupa-clanek">
            <a
              target="_blank"
              rel="noreferrer"
              href="./img/reference/chalupar.pdf"
            >
              <img src="img/reference/chalupar.jpg" alt="Chalupář časopis" />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="./img/reference/rok_na_chalupe.pdf"
            >
              <img
                src="img/reference/rok_na_chalupe.jpg"
                alt="Rok na chalupě časopis"
              />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="./img/reference/rozmaryna.pdf"
            >
              <img
                src="./img/reference/rozmaeyna.jpg"
                alt="Rozmaryna časopis"
              />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.expedo.cz/blog/?clanek=interierovy-designer-pomuze-vam-s-navrhem-i-detaily-71"
            >
              <img
                src="img/reference/pencil-typography-black-design.jpg"
                alt="Design"
              />
            </a>
          </div>
        </div>
        <div className="reference">
          <ReferenceComponent
            image="img/reference/reference11.jpg"
            text="Děkujeme za veškerý čas a práci s návrhy pro nás. Jsme rádi, že jsme nezůstali jen u dispozic, ale viděli jsme i 3D návrhy, které nám více pomohly k rozhodnutí…. manželé z Liberce"
          />
          <ReferenceComponent
            image="img/reference/reference12.jpg"
            text="Rychlé a vstřícné jednání, skvělý přístup. Flexibilní řešení, pomoc s dodavateli, zájem a vyřešení problémů k dosažení nejlepšího výsledku, ochota kdykoliv poradit. Hezká a příjemná spolupráce. Spokojenost s výsledkem.   Paní Petra z Hrádku nad Nisou"
          />
          <ReferenceComponent
            image="img/reference/reference14.jpg"
            text="Díky návrhům a doporučení paní Lenky se nám svépomocí podařila rekonstrukce kadeřnictví. My i klienti jsme spokojeni…pan z Liberce"
          />
          <ReferenceComponent
            image="img/reference/reference2.jpg"
            text="Stačilo pár rad a doporučení a ujasnila jsem si, jakým směrem vést stavbu našeho domu… paní z Bedřichova"
          />
          <ReferenceComponent
            image="img/reference/reference3.jpg"
            text="Moc děkujeme za spolupráci, truhlář nám dle Vašeho návrhu zpracoval krásnou pracovnu. Přejeme vám vše dobré…manželé z Jablonného v Podještědí"
          />
          <ReferenceComponent
            image="img/reference/reference5.jpg"
            text="Paní Stádníková, moc děkuji za vaše projekty, velmi mi pomohly při stavbě našeho wellness rekonstrukci, která pak dopadla bez problémů…pan z Hrádku nad Nisou"
          />
          <ReferenceComponent
            image="img/reference/reference17.jpg"
            text="Provedená výměna kuchyňské linky, podlah a výmalba. Do interiéru byla zakomponována krbová kamna a obklad. Celkově hodnotím poskytnuté služby jako vynikající. Doporučené firmy realizovaly celou zakázku ve smluvených termínech, rozsahu a cenách. Paní Stádníková akci skvěle koordinovala. "
          />
          <ReferenceComponent
            image="img/reference/reference18.jpg"
            text="Spolupráce s paní Lenkou byla skvělá. Její návrhy byly praktické, útulné a vypořádala se výborně s malým prostorem. Oceňuji velmi dobrou komunikaci zejména rychlost. Dětské pokojíky slouží dle jejich návrhů na jedničku. Paní ze Znojma"
          />
          <ReferenceComponent
            image="img/reference/reference1.jpg"
            text="Podařilo se mi paní z Liberce splnit její sen a uskutečnit vysněnou kuchyň, kde vše bylo zrealizováno na zakázku dle mých návrhů a doporučeného truhláře…"
          />
          <ReferenceComponent
            image="img/reference/reference6.jpg"
            text="Děkuji za doporučení nábytku a realizaci bytu k pronájmu, klienti i já jsme moc spokojeni😊… Markéta z Liberec"
          />
          <ReferenceComponent
            image="img/reference/reference13.jpg"
            text="Paní designérka je velice milá a ochotná. Rychle reagovala na mé požadavky. Zároveň jsem ocenila její ověřené kontakty na firmy a šikovné řemeslníky…. paní ze Špindlerova Mlýna"
          />
          <ReferenceComponent
            image="img/reference/reference8.jpg"
            text="Moc děkujeme za spolupráci, truhlář nám dle Vašeho návrhu zpracoval krásnou a praktickou kuchyň. Přejeme vám vše dobré…manželé z Jablonce nad Nisou"
          />
          <ReferenceComponent
            image="img/reference/reference9.jpg"
            text="Díky vizualizacím a doporučení, jsme mohli zrekonstruovat naši provozovnu…. Monika z Liberce"
          />
          <ReferenceComponent
            image="img/reference/reference10.jpg"
            text="Děkuji za pomoc s rekonstrukcí mého bytu. Díky vašim návrhům a konzultacím to nebylo tak složité, jak jsem se na začátku obávala. Ráda vás doporučím známým…paní z Liberce"
          />
        </div>
      </main>
    </>
  );
}

export default Reference;
