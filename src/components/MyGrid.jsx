import styles from "./MyGrid.module.css";

export function MyGrid() {
    return (
        <div className={styles.container}>
        <header className={styles.header}>
            <div className={styles.header}>
                <h1>Foco, força, fé</h1>
            </div>
        </header>
        <main className={styles.main}>
            <div className={styles.grid}>
                <div className={styles.card}>
                    <img className={styles.imagem} src="https://picsum.photos/300/300?random={a}"/>
                    <h2>MyText 0</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam doloremque incidunt cum voluptatibus quisquam dolor delectus quidem aliquid nam, sint ipsam nobis in corporis autem rerum. Optio aut aliquid ex?</p>
                </div>
                <div className={styles.card}>
                    <img className={styles.imagem} src="https://picsum.photos/300/300?random={b}"/>
                    <h2>MyText 1</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam doloremque incidunt cum voluptatibus quisquam dolor delectus quidem aliquid nam, sint ipsam nobis in corporis autem rerum. Optio aut aliquid ex?</p>
                </div>
                <div className={styles.card}>
                    <img className={styles.imagem} src="https://picsum.photos/300/300?random={c}"/>
                    <h2>MyText 2</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam doloremque incidunt cum voluptatibus quisquam dolor delectus quidem aliquid nam, sint ipsam nobis in corporis autem rerum. Optio aut aliquid ex?</p>
                </div>
                <div className={styles.card}>
                    <img className={styles.imagem} src="https://picsum.photos/300/300?random={d}"/>
                    <h2>MyText 3</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam doloremque incidunt cum voluptatibus quisquam dolor delectus quidem aliquid nam, sint ipsam nobis in corporis autem rerum. Optio aut aliquid ex?</p>
                </div>
                <div className={styles.card}>
                    <img className={styles.imagem} src="https://picsum.photos/300/300?random={e}"/>
                    <h2>MyText 4</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam doloremque incidunt cum voluptatibus quisquam dolor delectus quidem aliquid nam, sint ipsam nobis in corporis autem rerum. Optio aut aliquid ex?</p>
                </div>
            </div>
        </main>
        <footer className={styles.footer}> 
            <div className={styles.footer}>
                <h1>IFRN - Campus Macau</h1>
                <h1>Curso Técnico de Informática</h1>
                <h1>Programação para Internet 2025</h1>
            </div>
            <div className={styles.footer}>
                <h1>Prof. Guilherme Leal Santos</h1>
            </div>
            <div className={styles.footer}>
                <h1>IFRN - Campus Macau</h1>
                <h1>Curso Técnico de Informática</h1>
                <h1>Programação para Internet 2025</h1>
            </div>
        </footer>
        </div>
    );
}