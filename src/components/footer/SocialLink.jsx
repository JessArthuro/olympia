import style from "./footer.module.scss";

function SocialLink({ link, icon }) {
  return (
    <a
      className={style.social_link}
      href={link}
      target="_blank"
      rel="noreferrer noopener"
    >
      <span>{icon}</span>
    </a>
  );
}

export default SocialLink;
