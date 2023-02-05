import { type } from "os";
import styles from "./Title.module.scss";

interface TitleI {
  text: string;
}

const Title = ({ text }: TitleI) => {
  return (
    <div className={styles.titleContainer}>
      <h2>{text}</h2>
    </div>
  );
};

export default Title;
