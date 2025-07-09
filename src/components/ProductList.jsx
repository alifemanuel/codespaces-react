import { useEffect, useState } from "react";
import styles from "./ProductList.module.css";
import { CircularProgress } from "@mui/material";
import { ShoppingCart } from "lucide-react";

export function ProductList() {
  var category = "beauty";
  var limit = 12;
  var apiUrl = `https://dummyjson.com/products/category/${category}?limit=${limit}&select=id,thumbnail,title,price,description`;

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        setProducts(data.products);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    setTimeout(() => {
      fetchProducts();
    }, 2000);
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>TRJ Megastore</h1>
        <button className={styles.cartButton}> <ShoppingCart /> Adicionar ao carrinho</button>
      </div>
      {products.map((product) => (
        <div key={product.id} className={styles.productCard}>
          <img
            src={product.thumbnail}
            alt={product.title}
            className={styles.productImage}
          />
          <h2 className={styles.productTitle}>{product.title}</h2>
          <p className={styles.productDescription}>{product.description}</p>
          <p className={styles.productPrice}>${product.price}</p>
        </div>
      ))}
      {loading && (
        <div>
          <CircularProgress
            // size="sm"
            thickness={5}
            style={{ margin: "2rem auto", display: "block" }}
            sx={{
              color: "#001111",
            }}
          />
          <p>Loading products...</p>
        </div>
      )}
      {error && <p>Error loading products: {error.message}</p>}
    </div>
  );
}