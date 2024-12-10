import React from "react";
import "./../styles/contact.css";

const Contact = () => {
  return (
    <section className="contact container">
      <h1>Entre em Contato</h1>
      <form className="contact-form">
        <input type="text" placeholder="Seu Nome" />
        <input type="email" placeholder="Seu Email" />
        <textarea placeholder="Sua Mensagem"></textarea>
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
};

export default Contact;
