import styles from "./Card.module.scss";

interface CardI {
  number: number;
  title: string;
}

const Card = ({ number, title }: CardI) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.content}>
        <p className={styles.number}>{number}</p>
        <p className={styles.title}>{title}</p>
      </div>
    </div>
  );
};

export default Card;
