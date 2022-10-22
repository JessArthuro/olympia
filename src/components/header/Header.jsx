import React, { useEffect, useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import NavLink from "./NavLink";
import BtnPrimary from "../btn_primary/BtnPrimary";
import style from "./header.module.scss";

// Desestructuracion del objeto style para no tener que poner la palabra clave en cada estilo que se declare en el documento.
const {
  header_section,
  header_scrolling,
  header_content,
  header_logo,
  nav_menu,
  menu_active,
  nav_list,
  header_buttons,
  btn_menu,
} = style;

function Header() {
  // Hook para activar/desactivar el menu de navegacion en dispositivos moviles.
  const [menu, setMenu] = useState(false);

  // Funcion para alternar el valor de menu. Si es true lo convierte a false y viceversa.
  const handleMenu = () => {
    setMenu(!menu);
  };

  // Funcion para ocultar el menu cuando se hace click en algun enlace de la navegacion.
  const closeMenu = () => {
    setMenu(false);
  };

  // Hook para declarar el estado inicial del header.
  const [scrollHeader, setScrollHeader] = useState(false);

  // Funcion para manejar el scroll en la pagina web y aplicar estilos diferentes al header.
  const listenToScroll = () => {
    // Medida limite de scroll en el documento.
    let scrollHeightLimit = 10;

    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    if (winScroll > scrollHeightLimit) {
      // Si el scroll recorrido en el documento supera el limite declarado en la funcion, se cambia el valor del header usando el hook useState.
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

        <nav className={`${nav_menu} ${menu ? `${menu_active}` : ""}`}>
          <ul className={nav_list}>
            {/* El closeMenu del comienzo es el prop de ese componente y el que esta entre llaves es una funcion para cambiar el estado del menu a false. */}
            <NavLink href="#home" name="home" isActive={true} closeMenu={closeMenu} />
            <NavLink href="#features" name="features" closeMenu={closeMenu} />
            <NavLink href="#hotels" name="hotels" closeMenu={closeMenu} />
            <NavLink href="#testimonials" name="testimonials" closeMenu={closeMenu} />
          </ul>
        </nav>

        <div className={header_buttons}>
          <BtnPrimary isSignUp={true} title="sign up" />
          <button className={btn_menu} onClick={handleMenu}>
            <HiOutlineMenuAlt3 />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
