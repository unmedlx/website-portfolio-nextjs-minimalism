import styles from "./Subtitle.module.scss";

interface SubtitleI {
  text: string;
}

const Subtitle = ({ text }: SubtitleI) => {
  return <h4 className={styles.h4}>{text}</h4>;
};

export default Subtitle;
