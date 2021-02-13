import { Link } from "react-router-dom";
import footerStyles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={footerStyles.footer}>
      <p className={footerStyles.title}>Jonathan SURLE - 2021</p>
      <Link to='/admin/dashboard'>
        <span className={footerStyles.item}>Administration</span>
      </Link>
    </div>
  );
};

export default Footer;
