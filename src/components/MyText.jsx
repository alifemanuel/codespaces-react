import styles from "./MyText.module.css";

export function MyText({title, text}) {
  return (
    <div className={styles.container}>
      <div className={styles.div}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.text}>{text}</p>
      </div>
    </div>
  );
}
