import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm(gdpr) {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_47m0lpw",
        "template_m58cjss",
        form.current,
        "na8xge_55u88BuNEA"
      )
      .then(
        (result) => {
          alert("Vaš dotaz byl úspěšně odeslán!");
          document.location.href = "/";
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="layout">
      <div className="contact-form">
        <form ref={form} onSubmit={sendEmail} id="contact-form">
          <div>
            <label htmlFor="name" className="newline">
              Vaše jméno:
            </label>
            <input
              type="text"
              placeholder="Jméno a příjimení"
              className="form-control"
              name="user_name"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="newline">
              Váš email:
            </label>
            <input
              type="email"
              placeholder="example@example.cz"
              className="form-control"
              name="user_email"
              required
            />
          </div>
          <div>
            <label htmlFor="tel" className="newline">
              Váš Telefon:
            </label>
            <input
              type="tel"
              placeholder="775 116 555 333"
              id="tel"
              className="form-control"
              name="user_phone"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="newline">
              Zpráva:
            </label>
            <textarea
              placeholder="Zde se mě můžete zeptat na cokoliv a napsat, o jakou službu by jste měli zájem"
              className="form-control"
              rows="4"
              name="message"
              id="message"
              required
            />
          </div>
          <div>
            <button
              className=" btn btn-outline-primary mt-2 pl-5 pr-5"
              type="submit"
              value="send"
            >
              Odeslat
            </button>
          </div>
        </form>
      </div>

      <div className="contact-info">
        <ul>
          <li>
            <b>Kontakt</b>
          </li>
          <li> MgA. Lenka Stádníková</li>
          <li>Interiérová designérka</li>
        </ul>

        <div>
          <b>Adresa</b>
          <address>Durychova 950/6, Liberec, Česká republika</address>
        </div>

        <ul>
          <li>
            <b>IČO:</b> 03911446{" "}
          </li>
          <li>
            <b>DIČ:</b> CZ7555242563
          </li>
        </ul>

        <div>Jsem plátcem DPH.</div>

        <ul>
          <li>
            <a className="color" href="tel:+420-723-838-086">
              <b>Telefon:</b> +420 723 838 086
            </a>
          </li>
          <li>
            <a className="color" href="mailto:stadnikovi@gamil.com">
              <b> E-mail:</b> stadnikovalenka@gmail.com
            </a>
          </li>
        </ul>
      </div>

      {!gdpr && (
        <p className="gdpr">
          Vaše osobní údaje (e-mail, jméno a telefon) budu zpracovávat jen za
          účelem Vámi daným, ke kontaktování Vás z oblasti interiérového designu
          v souladu s platnou legislativou a zásadami ochrany osobních údajů.
          Svůj souhlas se zasíláním a zpracováním osobních údajů můžete kdykoliv
          odvolat prostřednictvím odhlašovacího odkazu v každém emailu ode mě.
        </p>
      )}
    </div>
  );
}
