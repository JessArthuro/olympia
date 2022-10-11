import style from "./Header.module.scss";

function NavLink({ isActive, href, name }) {
  return (
    <li>
      <a className={`${style.nav_link} ${isActive ? `${style.active}`: ''}`} href={href}>{name}</a>
    </li>
  )
}

export default NavLink;