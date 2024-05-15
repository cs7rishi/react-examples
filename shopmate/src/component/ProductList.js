import { useState, useEffect, useCallback } from "react"
import { useFetch } from "../hooks/useFetch";
import Loading from "../assets/loading.gif"

export const ProductList = () => {
    // const [products, setProducts] = useState([]);
    const [url, setUrl] = useState("http://localhost:8080/products");
    const { data: products, loading } = useFetch(url);

    return (
        <section>
            <div className="filter">
                <button onClick={() => setUrl("http://localhost:8080/products")}>All</button>
                <button onClick={() => setUrl("http://localhost:8080/products?in_stock=1")}>In Stock Only</button>
            </div>
            {loading && <p className="loading"><img src={Loading} alt="" /></p>}
            {products && products.map((p) => (
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
