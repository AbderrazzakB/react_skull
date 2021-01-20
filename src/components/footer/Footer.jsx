import React from "react";
import Logo from "../../assets/images/Group 114.png";

export const Footer = () => {
  return (
    <footer>
      <section className="section-1">
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
        <div className="links">
          <div>
            <h2>Information</h2>
            <a href="http://">A propos de nous</a>
            <a href="http://">Confidentialite</a>
            <a href="http://">Conditions d'utitlisation</a>
            <a href="http://">RSS</a>
          </div>
          <div>
            <h2>Service</h2>
            <a href="http://">Support en ligne</a>
            <a href="http://">Aide et FAQ</a>
            <a href="http://">Nous contacter</a>
          </div>
        </div>
        <div className="instagram">
          <h2>Instagram</h2>
        </div>
      </section>

      <section className="section-2">
        <a href="http://">Accueil</a>
        <a href="http://">Site Map</a>
      </section>

      <section className="section-3">
        <p>
          Copyright © {new Date().getUTCFullYear()} by{" "}
          <a href="http://">Malabiss</a>. All Rights Reserved.
        </p>
      </section>
    </footer>
  );
};
