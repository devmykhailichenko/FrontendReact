import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { addToCart } from "../../store/cart/cartActions.js";
import { setProducts } from "../../store/products/productsActions.js";

import { productsData } from "../../data/products.js";

function Product({ product, addToCart }) {
    const navigate = useNavigate();

    const handleProductDetails = () => {
        navigate(`/products/${product.id}`);
    }

    return (
        <div className="card">
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <div className="price">{product.price}$</div>

            <div className="actions">
                <button onClick={handleProductDetails}>View product</button>
                <button className="secondary-btn" onClick={() => addToCart(product)}>
                    Add to Cart
                </button>
            </div>
        </div>
    )
}

export default function Products() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setProducts(productsData));
    }, []);

    const { products } = useSelector(state => state.products);

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
    }

    return (
        <section>
            <h1 className="page-title">Products List</h1>

            <div className="products-grid">
                {products.map((product) => (
                    <Product key={product.id} product={product} addToCart={handleAddToCart} />
                ))}
            </div>
        </section>
    )
}