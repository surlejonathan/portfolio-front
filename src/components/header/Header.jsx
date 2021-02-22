import headerStyles from "./Header.module.css";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { ImProfile } from "react-icons/im";

const Header = () => {
  return (
    <div className={headerStyles.header}>
      <h1 className={headerStyles.title}>
        <span>Jonathan</span> Surle
      </h1>
      <p className={headerStyles.description}>Développeur Web Fullstack JS</p>
      <div className={headerStyles.socialMedia}>
        <a
          href='https://github.com/surlejonathan'
          target='_blank'
          rel='noreferrer'
        >
          <SiGithub
            className={`${headerStyles.social} ${headerStyles.gitHub}`}
          />
        </a>
        <a
          href='https://www.linkedin.com/in/jonathan-surle/'
          target='_blank'
          rel='noreferrer'
        >
          <SiLinkedin
            className={`${headerStyles.social} ${headerStyles.linkedIn}`}
          />
        </a>
        <a
          href='https://drive.google.com/file/d/1E7NLrQ1P3cI9mYbXCm0R8MU98Yug0plD/view?usp=sharing'
          target='_blank'
          rel='noreferrer'
          title='télécharger CV'
          download
        >
          <ImProfile />
        </a>
      </div>
    </div>
  );
};

export default Header;
