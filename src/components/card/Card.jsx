import { Link } from "react-router-dom";
import cardStyles from "./Card.module.css";
import { motion } from "framer-motion";

const Card = ({
  path,
  className,
  title,
  imgSrc,
  alt,
  description,
  onClick,
}) => {
  return (
    <div>
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

          <p className={cardStyles.cardDescription}>{description}</p>
        </div>
        <Link to={path}>
          <p className={cardStyles.cardLink}>En savoir plus &rarr;</p>
        </Link>
        {localStorage.getItem("admin", "true") && (
          <button onClick={onClick}>Supprimer</button>
        )}
      </motion.div>
    </div>
  );
};

Card.defaultProps = {
  className: cardStyles.card,
};
export default Card;
