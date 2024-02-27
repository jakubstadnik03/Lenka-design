import Head from "next/head";
import { Inter } from "@next/font/google";
import HeroSection from "../components/hero";
import Card from "../components/card";
import ConsultationStudioComponent from "../components/studio-main";
import CottageRentalComponent from "../components/chalupa-main";
import FlatRentalComponent from "../components/byt-main";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Lenka Design | design interiéru v Liberci</title>
        <meta name="description" content="Oživte svůj domov nebo kancelář v Liberci s exkluzivními návrhy interiérů od Lenky Stádníkové. Objednejte si konzultaci ještě dnes a transformujte svůj prostor do místa, kde budete chtít trávit každou minutu." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <HeroSection />
        <section>
          <div className="max-width uvodni_text texty max-width-small">
            <h2>Naše služby</h2>
            <p className="uvodni-text-bold">
              <strong>
                Chcete svůj interiér změnit, zútulnit a cítit se v něm příjemně?
              </strong>
            </p>
            <p className="uvodni-text-bold">
              <strong>
                Stavíte dům či předěláváte byt a nevíte, jak vše nejlépe
                uspořádat a zařídit?
              </strong>
            </p>
          </div>
          <div className="d-flex overflow-auto m-auto max-width-small">
            <Card
              img="img/sluzby/navrhy_bytovych_interieru_small.jpg"
              title="Návrhy bytových interiérů"
              link="/bytovy-interier"
              desc="Oživte svůj prostor s našimi návrhy - proměňte ho v dokonalý domov!"
            />
            <Card
              img="img/sluzby/navrhy_komercnich_interieru_small.jpg"
              title="Návrh komerčních interiérů"
              link="/komercni-interier"
              desc="Proměňte svůj komerční prostor s našimi profesionálními návrhy!"
            />
            <Card
              img="img/sluzby/homestaging_small.jpg"
              title="Homestaging"
              link="/homestaging"
              desc="Připravte svůj domov k prodeji s naším homestagingem!"
            />
            <Card
              img="img/prianera/prianera-thumb.jpg"
              title="Exkluzivní nábytek Prianera"
              link="/exkluzivni-nabidky"
              desc="Připravte svůj domov k prodeji s naším homestagingem!"
            />
            <Card
              img="img/sluzby/konzultace_small.jpg"
              title="Konzultace"
              link="/konzultace"
              desc="Odhalte potenciál svého prostoru s našimi designovými konzultacemi!"
            />
          </div>
        </section>
        <ConsultationStudioComponent />
        <section className="max-width max-width-small">
          <p className="">
            Věnuji se návrhům interiérů, bytovému designu a Home stagingu již
            přes 10let, mým cílem je, aby každý klient byl spokojen. Mohu Vám
            nabídnout 3D vizualizaci, návrhy dispozic nebo jen osobní konzultaci
            v interiérovém designu. Pracuji i online a přes videokonference.
            Soustředím se na projekty a návrhy interiérů v Liberci a okolí.
            Upřednostňuji přírodní materiály či jejich imitace. Mojí největší
            inspirací je příroda. Příroda nás vytvořila, ovlivňuje nás, a proto
            se v její blízkosti cítíme nejlépe. Nechci Vás ale ovlivňovat mým
            stylem, mým cílem je pochopit ten Váš a pomoci Vám zrealizovat Váš
            sen, který máte…
          </p>
          <section
            id="citat"
            className="max-width max-width-small texty citat shadow p-2 "
            style={{ backgroundColor: "#ffff" }}
          >
            <p>
              Každého z nás ovlivňuje a formuje, jak bydlíme, někdy stačí jen
              málo a dojde k veliké změně a člověk se doma cítí hned lépe.
            </p>
            <p>
              Doporučuji konzultace s designérem již v době hrubé stavby,
              ušetříte si stres i náklady do budoucna. Vkusně, prakticky a
              zodpovědně dojdeme ke správnému cíli.
            </p>
            <p className="text-end fw-bold">MgA. Lenka Stádníková</p>
          </section>
        </section>
        <section
          id="o-mne"
          className="max-width max-width-small d-flex justify-content-center flex-column flex-md-row align-items-center max-width "
        >
          <img
            src="img/lenka.jpg"
            alt="Lenka Stádníková"
            className="rounded-circle me-md-5 mb-2 "
          />

          <div className="o_mne_text ">
            <h2>Lenka Stádníková – interiérová návrhářka v Liberci</h2>
            <p>
              Po absolvování Technické univerzity v Liberci v oboru Podniková
              Ekonomika jsem žila 14 let v zahraničí (USA, Holandsku a Velké
              Británii), vychovávala 3 děti, čerpala jsem inspirace a zkušenosti
              nejen životní, ale i profesní. Po mnoha stěhování, přestavbách
               domů  i stavbě vlastního domu a chalupy, jsem se rozhodla
              změnit svou profesi a studovat Interiérový design. Ve Velké
              Británii jsem absolvovala studium bakalářského a poté
              magisterského Interiérového designu. Moc mě to bavilo, až se
              architektura a design stali mojí prací i koníčkem.
            </p>
            <p>
              Pod vlastní firmou jsem zpracovala již stovku projektů,
              konzultací, rekonstrukcí a novostaveb. Nadále se k tomu vzdělávám,
              sleduji nejnovější trendy, inovace a veletrhy, aby moje záliba
              ušetřila klientům čas pomohla plnit jejich sny.
            </p>
          </div>
        </section>
        <FlatRentalComponent />
        <CottageRentalComponent />
      </main>
    </>
  );
}
