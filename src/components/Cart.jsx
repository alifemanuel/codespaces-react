import styles from "./Cart.module.css";

export function Cart({ cart, removeAllFromCart, removeFromCart }) {
  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className={styles.container}>
      <div className={styles.cartLeft}>
        <h2>PRODUTO E SERVIÇO</h2>
        <button className={styles.removeAllButton} onClick={removeAllFromCart}>
          <b>REMOVER TODOS OS PRODUTOS</b>
        </button>
        {cart.length === 0 ? (
          <p>Seu carrinho está vazio.</p>
        ) : (
          <ul className={styles.cartList}>
            {cart.map((product, index) => (
              <li key={index} className={styles.cartItem}>
                <img src={product.thumbnail} alt={product.title} />
                <div className={styles.cartItemInfo}>
                  <h3>{product.title}</h3>
                  <p>Preço: R$ {product.price.toFixed(2)}</p>
                  <button className={styles.removeButton} onClick={() => removeFromCart(product)}>
                    Remover
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className={styles.cartRight}>
        <h2>RESUMO</h2>
        <p>Valor dos Produtos: R$ {total.toFixed(2)}</p>
        <p>Total a prazo: R$ {(total * 1.1).toFixed(2)}</p>
        <p className={styles.pix}>Valor à vista no PIX: R$ {(total * 0.9).toFixed(2)}</p>
        <p className={styles.economy}>
          Economize: R$ {(total * 0.1).toFixed(2)}
        </p>
        <button className={styles.continueButton}>CONTINUAR</button>
      </div>
    </div>
  );
}
