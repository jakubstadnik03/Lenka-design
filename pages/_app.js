import "../styles/footer.css";
import "../styles/slider.css";
import "../styles/globals.css";
import "../styles/cenik.css";
import "../styles/kontakt.css";
import "../styles/blog.css";
import "./custom.scss";
import Header from "../components/header";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}
