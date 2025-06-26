import styles from "./LuckyNumber.module.css";
import { useState } from "react";
    

export function LuckyNumber() {
    const [LuckyNumber, setLuckyNumber] = useState(0);
    const [Array, setArray] = useState([]);

    function handleClick() {
        var n = Math.floor(Math.random() * 40) + 1;
        
        if(Array.includes(n)) {
            alert(`O número ${n} já foi sorteado!`);
        }else{
            setArray([...Array, LuckyNumber]);
            setLuckyNumber(n);

        }
    }
    return ( 
        
    <div className={styles.container}>
        
        {/* Operador ternário: */}
        {LuckyNumber === 0 ? (
            <h2>Sorteador de números</h2>
            
        ) : (
            <h2>Número sorteado = {LuckyNumber}</h2>
        )}
        
        <button className={styles.button} onClick={handleClick}>SORTEAR</button>
        <div className={styles.array}>
        <h3>Array: [{Array.toString()}]</h3>
        </div>
    </div>
    );

}