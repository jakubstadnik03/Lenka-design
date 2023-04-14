import Head from "next/head";

export default function Cenik() {
  return (
    <>
      <Head>
        <title>Ceník služeb | Lenka Design</title>
        <meta
          name="describtion"
          content="S každým klientem prodiskutuji jeho požadavky a následně předložím cenovou nabídku"
        />
      </Head>
      <main className="cenik">
        <div className="max-width text-block">
          <h1>Ceník služeb interiérového designu</h1>
          <div>
            <p>
              S každým klientem prodiskutuji jeho požadavky a následně předložím
              cenovou nabídku.
            </p>
            <h2>Ceník služeb interiérového designu</h2>
            <p>
              Každý projekt je individuální, proto nelze říct přesnou částku
              ceny dopředu, aniž bych o projektu něco věděla. Záleží na domluvě
              s klientem, jaké služby designu požaduje, jaké detailní vybavení
              požaduje, výrobu na míru či hotové výrobky… a mnoho dalších
              aspektů od kterých se cena odvíjí.
            </p>
            <p>
              <strong>1. schůzka ZDARMA před zadáním projektu</strong>
            </p>
            <p>
              Nejprve se sejdeme k bezplatné konzultační schůzce (cca 1hod), kde
              zjistím Vaše požadavky. Doporučuji připravit fotografie či jiné
              podklady, abych lépe porozuměla Vašim představám. Doprava mimo
              Liberec je zpoplatněna.
            </p>
            <p>
              Dále dojde k zaměření a domluvení termínu. Poté Vám zašlu cenovou
              nabídku a po Vašem souhlasu zálohovou fakturu na 60% z celkové
              částky. Následně budu pracovat na projektu dle dohody a požadavků.
              Během přípravy projektu budu s Vámi ve spojení telefonicky,
              emailem či videokonferencí a budeme případně konzultovat
              rozpracovaný projekt. Vždy zasílám několik verzí a možností, které
              konzultuji s klientem. Po dokončení projektu Vás požádám o
              doplatek ceny.
            </p>

            <p>Jsem plátce DPH a níže uvedené ceny jsou bez DPH. </p>
          </div>

          <div className="max-width">
            <h2>Ceník služeb:</h2>
            <div className="price ">
              <ul>
                <li>
                  <strong>Konzultace nad projektem či změn v interiéru </strong>{" "}
                  <span>1500 Kč/1hod.</span>
                </li>
                <li>
                  <strong>3D vizualizace jedné místnosti</strong>
                  <span>6800 - 10000 Kč</span>
                </li>
                <li>
                  <strong>Návrh dispozic interiéru ve 2D</strong>
                  <span>4000 - 6000 Kč</span>
                </li>
                <li>
                  <strong>On-Line 3D vizualizace jedné místnosti</strong>
                  <span>6500 - 8000 Kč</span>
                </li>
                <li>
                  <strong>
                    Návrh celé místnosti: dispozice + 3D vizualizace + balíček
                  </strong>
                  <span>9000 - 11000 Kč</span>
                </li>
              </ul>
            </div>
            <div className="price">
              <ul>
                <li>
                  <strong>
                    Návrh celého bytu: dispozice + 3D vizualizace + balíček
                  </strong>{" "}
                  <span>od 30 000 Kč</span>
                </li>
                <li>
                  <strong>
                    Návrh rodinného domu: dispozice + 3D vizualizace + balíček
                  </strong>
                  <span>od 45 000 Kč</span>
                </li>
              </ul>
            </div>
            <div className="price">
              <ul>
                <li>
                  <strong>Konzultace s klientem v terénu či v showroomu</strong>
                  <span>800Kč/hod.</span>
                </li>
                <li>
                  <strong>Doprava mimo Liberec</strong>
                  <span>20Kč/km</span>
                </li>
                <li>
                  <strong>Home staging bytu</strong> <span>od 9000Kč</span>
                </li>
                <li>
                  <strong>Fotodokumentace nemovitosti</strong>
                  <span>od 5000 Kč</span>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <div className="price-h3">
              <h3>Balíček návrhu místnosti: </h3>
              <span className="money">6000 - 8000 Kč</span>
            </div>

            <ul className="seznam max-width">
              <li>Zaměření</li>
              <li>Moodboard (barevná koláž použitých barev v interiéru)</li>
              <li>
                Komplexní návrh interiéru - doporučení materiálů, výmalby,
                podlahy, osvětlení, zastínění oken, tapety, dekorace a ostatních
                doplňků
              </li>
              <li>Doporučení zdrojů nábytku </li>
              <li>Nákupní seznam doporučeného nábytku a doplňků</li>
              <li>Elektroinstalace</li>
              <li>Zajištění a ukázka vzorků materiálů</li>
              <li>Rozměry nábytku na míru</li>
              <li>
                Podklady na cen. nabídky a cenová nabídka od doporučených
                dodavatelů
              </li>
            </ul>
          </div>
          <div className="max-width">
            <h2>
              Konzultace nad projektem či doporučení změn a tipů v interiéru
            </h2>
            <p>
              Konzultace bytového designu provádím nejčastěji v místě realizace
              změn či online po dodání podkladů. Časté konzultace jsou ohledně
              změn daného projektu od projektanta, aby se již zohlednil nábytek
              či ostatní požadavky na vybavení.
            </p>
            <p>
              Možno zakoupit dárkový poukaz, s platností 1 rok, na konzultaci či
              doporučení změn v interiéru. Součástí poukazu je následný souhrn
              doporučených změn a tipů v elektronické podobě.{" "}
            </p>
          </div>
          <div className="max-width">
            <h2>Home staging - příprava nemovitosti k prodeji či pronájmu</h2>
            <p>
              Nejprve domluvíme schůzku a konzultaci v místě nemovitosti. V
              průběhu konzultace s Vámi projdu celou nemovitost a zapíšu
              navrhované změny, úpravy a typy v jednotlivých místnostech k
              dosažení největšího efektu. Poté ode mě obdržíte podrobný rozpis a
              plán navrhovaných úprav, vše v ceně konzultace. Dále seznam a ceny
              produktů, které jsou doporučeny do interiéru doplnit, případně ode
              mě zapůjčit.{" "}
            </p>
            <p>
              Zapůjčené produkty jsou zpoplatnění dle doby zapůjčení. Cenová
              nabídka ihned po konzultaci.
            </p>
          </div>
          <div className="max-width">
            <h2>Fotodokumentace </h2>
            <p>
              Fotodokumentace nemovitosti se nejčastěji provádí ihned po
              provedení doporučených úprav Home stagingu, ale také na požádání
              kdykoliv.{" "}
            </p>
            <p>
              {" "}
              Pěkné, vhodné fotografie jsou vhodné na inzerci nemovitosti na
              pronájme či prodej. Hotové fotografie Vám budou dodány na
              flashdisku do 5 pracovních dní.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
