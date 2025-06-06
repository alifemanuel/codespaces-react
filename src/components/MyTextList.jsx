import styles from "./MyTextList.module.css";
import { MyText } from "./MyText";

export function MyTextList() {

    const funcao = [
  
  ];

    return(
       <>
       <h1 className={styles.title}>Lista de textos</h1>
        <div className={styles.container}>
        {funcao.map((item, index) => (
        <MyText key= {index} title={item.title} text={item.text}></MyText>
      ))}
      </div>
      </>
    );

}