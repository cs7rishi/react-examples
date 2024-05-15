import { useState, useEffect, useCallback } from "react"

export const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [url, setUrl] = useState("http://localhost:8080/products");

    const fetchProducts = useCallback(async () => {
        const response = await fetch(url);
        const data = await response.json();
        setProducts(data);
    }, [url])

    useEffect(() => {
        fetchProducts();
    }, [url]);


    return (
        <section>
            <div className="filter">
                <button onClick={() => setUrl("http://localhost:8080/products")}>All</button>
                <button onClick={() => setUrl("http://localhost:8080/products?in_stock=1")}>In Stock Only</button>
            </div>

            {products.map((p) => (
                <div className="card" key={p.id}>
                    <p className="id">{p.id}</p>
                    <p className="name">{p.name}</p>
                    <p className="info">
                        <span>${p.price}</span>
                        <span className={p.in_stock ? "instock" : "unavailable"}>{p.in_stock ? "In Stock" : "Unavailable"}</span>
                    </p>
                </div>
            ))}
        </section>
    )
}
