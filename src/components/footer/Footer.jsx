import FooterGroup from "./FooterGroup";
import { AiOutlineLine } from "react-icons/ai";
import style from "./footer.module.scss";
import SocialLink from "./SocialLink";
import { FaFacebook, FaTwitter, FaInstagramSquare } from "react-icons/fa";
import BtnPrimary from "../btn_primary/BtnPrimary";

const {
  footer_section,
  footer_grid,
  footer_image,
  footer_description,
  social_links,
  subscribe_description,
  subscription_form,
  input_email,
  info_dev,
  link_dev,
} = style;

function Footer() {
  return (
    <footer className={footer_section}>
      <section className="container">
        <div className={footer_grid}>
          {/* Contenedor del logo e iconos de redes sociales */}
          <div>
            <img
              className={footer_image}
              src={require("../../img/logo_olympia2.png")}
              alt="logo Olympia"
            />
            <p className={footer_description}>
              The best hotel booking platform in the world.
            </p>

            <div className={social_links}>
              <SocialLink
                link="https://www.facebook.com/"
                icon={<FaFacebook />}
              />
              <SocialLink 
                link="https://twitter.com/" 
                icon={<FaTwitter />} />
              <SocialLink
                link="https://www.instagram.com/"
                icon={<FaInstagramSquare />}
              />
            </div>
          </div>

          {/* Componentes encargados de mostrar la lista de enlaces de cada grupo. */}
          <FooterGroup title="rooms" rooms={true} />
          <FooterGroup title="resources" resources={true} />
          <FooterGroup title="company" company={true} />

          <div>
            <h4 className={style.group_title}>newsletter</h4>
            <p className={subscribe_description}>
              Subscribe and get the latest updates.
            </p>
            <div className={subscription_form}>
              <input
                className={input_email}
                type="email"
                placeholder="Enter your email"
              />
              <BtnPrimary title="submit" isBtnFooter={true} />
            </div>
          </div>
        </div>

        {/* Contenedor de informacion sobre el desarrollador */}
        <p className={info_dev}>
          &copy; {new Date().getFullYear()} <AiOutlineLine /> Develope by{" "}
          <a
            className={link_dev}
            href="https://github.com/JessArthuro?tab=repositories"
            target="_blank"
            rel="noreferrer noopener"
          >
            JS Arthuro
          </a>
        </p>
      </section>
    </footer>
  );
}

export default Footer;
