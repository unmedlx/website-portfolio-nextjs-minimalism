import { type } from "os";
import styles from "./Title.module.scss";

interface TitleI {
  text1: string;
  text2: string;
}

const Title = ({ text1, text2 }: TitleI) => {
  return (
    <div className={styles.titleContainer}>
      <h2>
        {text1} <span>{text2}</span>
      </h2>
    </div>
  );
};

export default Title;
