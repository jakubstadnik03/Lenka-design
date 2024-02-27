import Form from "../components/form";
import Head from "next/head";

function Kontakt() {
  return (
    <>
      <Head>
        <title>Kontaktujte mě | Lenka Design</title>
        <meta name="description" content="Kontaktujte LenkuDesign.cz pro profesionální návrhy interiérů a homestaging v Liberci. Realizujte svůj vysněný domov s expertkou v designu. Zavolejte nám nebo napište e-mail ještě dnes!" />

      </Head>
      <main className="max-width max-width-small">
        <h1>Kontaktní údaje</h1>
        <p>
          <strong>
            Pište nebo volejte, ráda Vám pomohu a odpovím na Vaše otázky….
          </strong>
        </p>
        <Form />
      </main>
    </>
  );
}

export default Kontakt;
