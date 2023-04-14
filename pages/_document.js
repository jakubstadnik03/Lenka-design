import { Html, Head, Main, NextScript } from "next/document";
import Header from "../components/header";
import Footer from "../components/footer";

export default function Document() {
  return (
    <Html lang="cs">
      <Head />
      <body style={{ backgroundColor: "#f2f2f2" }}>
        <Main />
        <NextScript />
        <Footer />
      </body>
    </Html>
  );
}
