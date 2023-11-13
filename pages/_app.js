import "../styles/footer.css";
import "../styles/slider.css";
import "../styles/globals.css";
import "../styles/cenik.css";
import "../styles/kontakt.css";
import "../styles/blog.css";
import "./custom.scss";
import { SSRProvider } from "react-bootstrap";
import Header from "../components/header";
import { Analytics } from "@vercel/analytics/react";

export default function App({ Component, pageProps }) {
  return (
    <SSRProvider>
      <Header />
      <Component {...pageProps} />
      <Analytics />
    </SSRProvider>
  );
}
