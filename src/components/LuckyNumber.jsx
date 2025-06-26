import styles from "./LuckyNumber.module.css";
import { useState } from "react";
    

export function LuckyNumber() {
    const [LuckyNumber, setLuckyNumber] = useState(0);
    const [Array, setArray] = useState([]);

    function handleClick() {
        setLuckyNumber(Math.floor(Math.random() * 40) + 1);
        setArray(prev => [...prev, LuckyNumber]);
    }
    return ( 
        
    <div className={styles.container}>
        
        {/* Operador ternário: */}

        {Array.includes(LuckyNumber) ? (
            <h2 className={styles.error}>Número já sorteado! ({LuckyNumber})<br/>Array: [{Array}]</h2>
            
        ) : (
            <h2 className={styles.success}>Número sorteado = {LuckyNumber} <br/>Array: [{Array}]</h2>
        )}
        
        <button className={styles.button} onClick={handleClick}> 
            Sortear
        </button>


    </div>
    );

}