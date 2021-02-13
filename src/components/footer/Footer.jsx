import { Link } from "react-router-dom";
import footerStyles from "./Footer.module.css";
import { BiCopyright } from "react-icons/bi";

const Footer = () => {
  return (
    <div className={footerStyles.footer}>
      <p className={footerStyles.title}>
        <BiCopyright className={footerStyles.copyright} /> 2021 - Jonathan Surle
      </p>
      <Link to='/admin/dashboard'>
        <span className={footerStyles.item}>Administration</span>
      </Link>
    </div>
  );
};

export default Footer;
