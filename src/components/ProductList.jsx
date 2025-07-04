import { useEffect, useState } from "react";
import styles from "./ProductList.module.css";
import CircularProgress from '@mui/material';

export function ProductList() {
    var category = 'groceries';
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
        };

        fetchProducts();
    }, []);

    return (
        <div className={styles.container}>
            <h1>TRJ Megastore</h1>
            {products.map(product => (
              <div key={product.id} className={styles.productCard}>
                <img src={product.thumbnail} alt={product.title} className={styles.productImage}/>
                <h2 className={styles.title}>{product.title}</h2>
                <p className={styles.description}>{product.description}</p>
                <p className={styles.price}>${product.price}</p>
                </div>
            ))}
            {loading && (<div>
                <CircularProgress
                    size="lg"
                    thickness="lg"
                    sx={{ '--CircularProgress-size': '3rem', '--CircularProgress-progressSize': '0.5rem' }}
                />
                <p>Loading products...</p>
            </div>
                )}
            {error && <p>Error loading products: {error.message}</p>}
        </div>
        );
}