import styles from "./MyText.module.css";

export function MyText() {
  return (
    <div className={styles.container}>
      <div className={styles.div}>
        <h1 className={styles.title}>Meu primeiro React App</h1>
        <p className={styles.text}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos,
          ipsum accusantium ex numquam deleniti, animi itaque soluta vitae
          voluptatem illum, error totam veritatis explicabo nisi possimus harum
          sed dolore. Quidem.
        </p>
      </div>
    </div>
  );
}
