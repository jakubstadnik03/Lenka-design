import React, { useState } from "react";

const FORM_ENDPOINT = ""; // TODO - fill on the later step

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  if (submitted) {
    return (
      <>
        <h2>Thank you!</h2>
        <div>We'll be in touch soon.</div>
      </>
    );
  }

  return (
   <div className="contact-form">
        <form
          action={FORM_ENDPOINT}
          onSubmit={handleSubmit}
          method="POST"
          target="_blank"
          action="https://public.herotofu.com/v1/fb7dc860-463c-11ed-a484-c1a2ba854bab"
          id="contact-form"
        >
          <div>
          <label for="name" className="newline">Vaše jméno:</label>
            <input type="text" placeholder="Jméno a příjimení" className="form-control" name="name" required />
          </div>
          <div>
          <label for="email" className="newline">Váš email:</label>
            <input type="email" placeholder="example@example.cz" className="form-control" name="email" required />
          </div>
          <div>
          <label for="tel" className="newline">Váš Telefon:</label>
            <input type="tel" placeholder="775 116 555 333" id="tel" className="form-control" name="phone" required />
          </div>
          <div>
          <label for="message" className="newline">Zpráva:</label>
            <textarea placeholder="Zde se mě můžete zeptat na cokoliv a napsat, o jakou službu by jste měli zájem" className="form-control" rows="4" name="message" id="message" class="form-control" required />
          </div>
          <div>
            <button className="mybutton" type="submit" value="Download CTA"> Odeslat </button>
          </div>
        </form>
   </div>
  );
};

export default ContactForm;