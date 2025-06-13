import styles from "./MyGrid.module.css";
import React from "react";
import { Github } from "lucide-react";
import { Instagram } from "lucide-react";
import { Twitch } from "lucide-react";

export function MyGrid() {
    return (
        <div className={styles.container}>
        <header className={styles.header}>
            <div className={styles.gridheader}>
                <h1 style={{ padding: '2rem' }}>Foco, Força, Fé</h1>               
            </div>
            <div className={styles.gridheader}>
                <img width='125' height='125' src='https://th.bing.com/th/id/R.0c71232dcf57a121c4a3e7e2028a803a?rik=d3JjCcZwsVxQvQ&pid=ImgRaw&r=0'/>
            </div>
        </header>
        <main className={styles.main}>
            <div className={styles.grid}>
                <div className={styles.card}>
                    <img className={styles.imagem} src="https://picsum.photos/250/250?random={a}"/>
                    <h2 style={{ color: 'black' }}>MyText 0</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam doloremque incidunt cum voluptatibus quisquam dolor delectus quidem aliquid nam, sint ipsam nobis in corporis autem rerum. Optio aut aliquid ex?</p>
                </div>
                <div className={styles.card}>
                    <img className={styles.imagem} src="https://picsum.photos/250/250?random={b}"/>
                    <h2 style={{ color: 'black' }}>MyText 1</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam doloremque incidunt cum voluptatibus quisquam dolor delectus quidem aliquid nam, sint ipsam nobis in corporis autem rerum. Optio aut aliquid ex?</p>
                </div>
                <div className={styles.card}>
                    <img className={styles.imagem} src="https://picsum.photos/250/250?random={c}"/>
                    <h2 style={{ color: 'black' }}>MyText 2</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam doloremque incidunt cum voluptatibus quisquam dolor delectus quidem aliquid nam, sint ipsam nobis in corporis autem rerum. Optio aut aliquid ex?</p>
                </div>
                <div className={styles.card}>
                    <img className={styles.imagem} src="https://picsum.photos/250/250?random={d}"/>
                    <h2 style={{ color: 'black' }}>MyText 3</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam doloremque incidunt cum voluptatibus quisquam dolor delectus quidem aliquid nam, sint ipsam nobis in corporis autem rerum. Optio aut aliquid ex?</p>
                </div>
                <div className={styles.card}>
                    <img className={styles.imagem} src="https://picsum.photos/250/250?random={e}"/>
                    <h2 style={{ color: 'black' }}>MyText 4</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam doloremque incidunt cum voluptatibus quisquam dolor delectus quidem aliquid nam, sint ipsam nobis in corporis autem rerum. Optio aut aliquid ex?</p>
                </div>
            </div>
        </main>
        <footer className={styles.footer}> 
            <div className={styles.gridfooter}>
                <h1>IFRN - Campus Macau<br/>Curso Técnico de Informática<br/>Programação para Internet 2025</h1>
            </div>
            <div className={styles.gridfooter}>
                <h1 style={{ fontFamily: 'Sans', color: 'blue', padding: '3rem'}}>Prof. Guilherme Leal Santos</h1>
            </div>
            <div className={styles.gridfooter}>
                <div className={styles.rectangle}>
                    <Github style={{ transform: 'scale(1.5)', transformOrigin: 'center' }}/>
                    <Instagram style={{ transform: 'scale(1.5)', transformOrigin: 'center' }}/>
                    <Twitch style={{ transform: 'scale(1.5)', transformOrigin: 'center' }}/>
                </div>
            </div>
        </footer>
        </div>
    );
}

