import headerStyles from "./Header.module.css";

const Header = () => {
  return (
    <div className={headerStyles.header}>
      <h1 className={headerStyles.title}>
        <span>Jonathan</span> Surle
      </h1>
      <p className={headerStyles.description}>Développeur Web Fullstack JS</p>
    </div>
  );
};

export default Header;
