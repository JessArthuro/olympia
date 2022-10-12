import React, { useEffect, useState } from "react";
import NavLink from "./NavLink";
import BtnPrimary from "../btn-primary/BtnPrimary";
import style from "./header.module.scss";

const { header_section, header_scrolling, header_content, header_logo, nav_list} = style;

function Header() {
  const [scrollHeader, setScrollHeader] = useState(false);

  // Funcion para manejar el scroll en la pagina y aplicar estilos diferentes al header.
  const listenToScroll = () => {
    // Medida limite de scroll en el documento.
    let scrollHeightLimit = 10;

    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    if (winScroll > scrollHeightLimit) {
      setScrollHeader(true);
    } else {
      setScrollHeader(false);
    }
  };

  // Uso del hook useEffect() para escuchar el evento scroll.
  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  return (
    <header
      className={`${header_section} ${
        scrollHeader ? `${header_scrolling}` : ""
      }`}
    >
      <div className={`${header_content} container`}>
        <img
          className={header_logo}
          src={require("../../img/logo_olympia1.png")}
          alt="Logo Olympia"
        />

        <nav>
          <ul className={nav_list}>
            <NavLink href="#." name="home" isActive={true} />
            <NavLink href="#." name="about us" />
            <NavLink href="#." name="rooms" />
            <NavLink href="#." name="services" />
            <NavLink href="#." name="contact" />
          </ul>
        </nav>

        <BtnPrimary title="sign up" />
      </div>
    </header>
  );
}

export default Header;
