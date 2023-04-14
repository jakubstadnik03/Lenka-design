import Form from "../components/form";
import Head from "next/head";

function Kontakt() {
  return (
    <>
      <Head>
        <title>Kontakt | Lenka Design</title>
      </Head>
      <main className="max-width">
        <h1>Kontakt</h1>
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
