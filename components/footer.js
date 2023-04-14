import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="max-width px-2 py-0">
          <section className="d-flex justify-content-around justify-content-lg-between p-3 border-bottom">
            <div className="me-5 d-none d-lg-block">
              <span>Spojte se s námi přes sociální sítě:</span>
            </div>
            <div>
              <a
                href="https://www.facebook.com/lenkadesign.cz"
                className="me-4 link-secondary"
              >
                <img src="svg/facebook.svg" alt="" />
              </a>

              <a
                href="https://www.instagram.com/designlenka/?hl=cs"
                className="me-4 link-secondary p-3 "
              >
                <img src="svg/instagram.svg" alt="" />
              </a>
              <a href="" className="me-4 link-secondary">
                <img src="svg/linkedin.svg" style={{ width: "28px" }} alt="" />
              </a>
            </div>
          </section>
          <div className="d-md-flex justify-content-around pt-2">
            <div className="footer-col me-2">
              <img
                src="svg/lenka-design-logo.svg"
                style={{ width: "200px" }}
                alt=""
              />

              <p className="pt-2">
                Inspirací mi je příroda a snažím se vytvářet unikátní interiéry,
                které respektují přírodní prostředí a zároveň vyhovují
                klientovým požadavkům.
              </p>
            </div>
            <div className="footer-col">
              <h4>Naše služby</h4>
              <ul>
                <li>
                  <Link href="/komercni-interier">
                    Návrhy bytových interiérů
                  </Link>
                </li>
                <li>
                  <Link href="/bytovy-interier">
                    Návrhy komerčních interiérů
                  </Link>
                </li>
                <li>
                  <Link href="/homestaging">Homestaging</Link>
                </li>
                <li>
                  <Link href="/web-grafika">Web a grafika</Link>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Užitečné</h4>
              <ul>
                <li>
                  <Link href="/blog">Blog</Link>
                </li>
                <li>
                  <Link href="/cenik">Ceník</Link>
                </li>
                <li>
                  <Link href="/reference">Reference</Link>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Kontakt</h4>
              <ul>
                <li>
                  <div>
                    Minkovická 170, 46312 Šimonovice, Liberec Česká republika
                  </div>
                </li>
                <li>
                  <a href="tel:+420723838086">Telefon: +420 723 838 086</a>
                </li>
                <li>
                  <a href="mailto:tadnikovalenka@gmail.com">
                    E-mail: stadnikovalenka@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
