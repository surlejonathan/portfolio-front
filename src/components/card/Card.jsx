import React, { useContext } from "react";
import adminContext from "../../contexts/adminContext";
import { IoClose } from "react-icons/io5";
import cardStyles from "./Card.module.css";
import { motion } from "framer-motion";

const Card = ({
  path,
  className,
  title,
  imgSrc,
  alt,
  description,
  techno,
  onClick,
}) => {
  const { admin } = useContext(adminContext);
  return (
    <div style={{ position: "relative" }}>
      <motion.div
        className={className}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
      >
        <div className={cardStyles.cardImage}>
          <img src={imgSrc} alt={alt} />
        </div>
        <div className={cardStyles.cardBody}>
          <h3 className={cardStyles.cardTitle}>{title} </h3>

          <p>{description}</p>
          <p className={cardStyles.cardDescription}>{techno}</p>
        </div>
        {path !== "" ? (
          <a href={path} rel='noreferrer' target='_blank'>
            <p className={cardStyles.cardLink}>Lien vers le projet &rarr;</p>
          </a>
        ) : (
          <p className={cardStyles.cardLink}>Lien prochainement disponible</p>
        )}

        {admin && (
          <IoClose className={cardStyles.closeIcon} onClick={onClick}>
            Supprimer
          </IoClose>
        )}
      </motion.div>
    </div>
  );
};

Card.defaultProps = {
  className: cardStyles.card,
};
export default Card;
