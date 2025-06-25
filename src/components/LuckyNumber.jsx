import styles from "./LuckyNumber.module.css";
import { useState } from "react";
    

export function LuckyNumber() {
    const [LuckyNumber, setLuckyNumber] = useState(0);

    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    function handleClick() {
        setLuckyNumber(Math.floor(Math.random() * 40) + 1);
    }
    return ( 
    <div className={styles.container}>
        
        {/* Operador ternário: */}
        {LuckyNumber === 0 ? (
            <h1>Lucky Number </h1>
        ) : (
            <h1>Lucky Number = {LuckyNumber}</h1>
        )}
        
        <h1>Array: </h1>
        <button className={styles.button} onClick={handleClick}> 
            I'm Feeling Lucky Today!
        </button>
    </div>
    );

}