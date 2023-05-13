import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <section className="contact">

      <div className="contact-email">
        <a href="mailto:leandro.713@hotmail.com.br?subject=Contato através do site&body=Olá! Estou entrando em contato através do link do site.">
            <img src={require("./email-icon.png")} alt="imagem de email" />
          <p>leandro.713@hotmail.com</p>
        </a>
      </div>
      <div className="contact-phone">
        <img src={require("./whats-icon.png")} alt="" />
        <p>
          <a
            href="https://wa.me/5551996566771?text=Olá%20Estou%20entrando%20em%20contato%20pelo%20link%20do%20seu%20site."
            target="_blank"
          >
            (51) 996-566-771
          </a>
        </p>
      </div>
    </section>
  );
}
