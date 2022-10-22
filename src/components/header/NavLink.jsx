import style from "./header.module.scss";

function NavLink({ isActive, closeMenu, href, name }) {
  return (
    <li>
      <a
        className={`${style.nav_link} ${isActive ? `${style.active}` : ""}`}
        href={href}
        onClick={closeMenu}
      >
        {name}
      </a>
    </li>
  );
}

export default NavLink;
